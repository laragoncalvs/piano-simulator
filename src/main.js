import Soundfont from "soundfont-player";
import * as THREE from 'three';
import { keyMap } from "./keyMap.js";
import { allCubes } from "./cubes.js";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let piano = null;
let pianoLoaded = false;
let modoAtual = null;
let teclaListener = null;
let animationId = null;
let startTime = null;
let fimTimeout = null;
let musica = null;

let duracaoTotal = 0; // duração total da música (em ms)
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");


function createAlphaGradientTexture(colorHex, direction = 'bottom-to-top') {
    const size = 256;
    const canvas = document.createElement('canvas');
    
    // Ajusta o tamanho do canvas dependendo da direção
    if (['left-to-right', 'right-to-left'].includes(direction)) {
        canvas.width = size;
        canvas.height = 1;
    } else {
        canvas.width = 1;
        canvas.height = size;
    }
    
    const context = canvas.getContext('2d');
    
    let x0 = 0, y0 = 0, x1 = 0, y1 = 0;
    
    switch (direction) {
        case 'top-to-bottom':
            x0 = 0; y0 = 0; x1 = 0; y1 = size;
            break;
            case 'bottom-to-top':
                x0 = 0; y0 = size; x1 = 0; y1 = 0;
                break;
                case 'left-to-right':
                    x0 = 0; y0 = 0; x1 = size; y1 = 0;
                    break;
                    case 'right-to-left':
                        x0 = size; y0 = 0; x1 = 0; y1 = 0;
                        break;
                        default:
                            console.warn(`Direção inválida: "${direction}". Usando 'bottom-to-top'.`);
                            x0 = 0; y0 = size; x1 = 0; y1 = 0;
                        }
                        
                        const gradient = context.createLinearGradient(x0, y0, x1, y1);
                        gradient.addColorStop(0, hexToRgba(colorHex, 0.0)); // Início transparente
                        gradient.addColorStop(0.7, hexToRgba(colorHex, 0.7)); // Fim opaco
                        
                        context.fillStyle = gradient;
                        context.fillRect(0, 0, canvas.width, canvas.height);
                        
                        const texture = new THREE.CanvasTexture(canvas);
                        texture.wrapS = THREE.ClampToEdgeWrapping;
                        texture.wrapT = THREE.ClampToEdgeWrapping;
                        texture.minFilter = THREE.LinearFilter;
                        
                        return texture;
                    }
                    
                    function hexToRgba(hex, alpha) {
                        const r = parseInt(hex.slice(1, 3), 16);
                        const g = parseInt(hex.slice(3, 5), 16);
                        const b = parseInt(hex.slice(5, 7), 16);
                        return `rgba(${r},${g},${b},${alpha})`;
                    }
                    
                    
                    const gradientTexture = createAlphaGradientTexture('#E323CA', "top-to-bottom");
                    const gradientTexture2 = createAlphaGradientTexture('#E323CA', "bottom-to-top");
                    
                    const scene = new THREE.Scene();
                    scene.background = new THREE.Color(0x0B0912);
                    
                    const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
                    camera.position.set(0, 6, 2);
                    camera.lookAt(0, 1, 0);
                    
                    const renderer = new THREE.WebGLRenderer({ antialias: true });
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    document.body.appendChild(renderer.domElement);
                    
                    const planeGeometry = new THREE.PlaneGeometry(13.5, 20);
                    const planeGeometry2 = new THREE.PlaneGeometry(13.5, 2);
                    
                    const planeMaterial = new THREE.MeshStandardMaterial({
                        color: 0x0B0912,
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 0,
                        shadowSide: THREE.DoubleSide,
                        metalness: 0.5,     // Define quanto o material é metálico (0 = não metálico, 1 = totalmente metálico)
                        roughness: 0.1  
                    });
                   

const planeMaterial2 = new THREE.MeshStandardMaterial({
    color: 0xE323CA,
    side: THREE.DoubleSide,
    transparent: true,
opacity: 0.5,     
        map: gradientTexture2

});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);

plane.rotation.x = -Math.PI / 2;
plane2.rotation.x = -Math.PI / 2;
plane.position.z = -8;
plane2.position.z = 2;

scene.add(plane, plane2);




const lineGeometry = new THREE.PlaneGeometry(0.04, 9);
const lineMaterial = new THREE.MeshStandardMaterial({
    color: 0xE323CA,
        map: gradientTexture,

    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5,
        depthWrite: false

});

const lines = Array.from({ length: 13 }, (_, i) => new THREE.Mesh(lineGeometry, lineMaterial));
lines.forEach((line, i) => {
    line.rotation.x = -Math.PI / 2;
    line.position.x = [0, 1.1 , -1.1, 2.2, -2.2, 3.3, -3.3, 4.4, -4.4, 5.5, -5.5, 6.7, -6.7][i];
    line.position.z = -3.5;
    scene.add(line);
});

scene.add(new THREE.AmbientLight(0xffffff, 2));
const directionalLight = new THREE.DirectionalLight(0xF5F591, 4);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);



const activeCubes = [];
const spawnEvents = [];

function addCubeToScene(letter, delay, speed) {
    spawnEvents.push({ letter, delay, speed, spawned: false });
}

function spawnCube(letter, speed) {
    const baseCube = allCubes[letter];
    if (!baseCube) return;

    const cube = baseCube.clone();
    cube.position.copy(baseCube.position); 
    cube.userData = { speed, letter, hit: false };

    scene.add(cube);
    activeCubes.push(cube);
}

function animate() {
    animationId = requestAnimationFrame(animate); // ← Armazena o ID
    const elapsedTime =  performance.now() - startTime;

    spawnEvents.forEach(event => {
        if (elapsedTime > event.delay && !event.spawned) {
            spawnCube(event.letter, event.speed);
            event.spawned = true;
        }
    });
if (startTime && duracaoTotal > 0) {
    const tempoAtual = performance.now() - startTime;
    const progresso = Math.min(tempoAtual / duracaoTotal, 1); // de 0 a 1
    progressBar.style.width = (progresso * 100) + "%";

    // Se terminar a música, esconder a barra
    if (progresso >= 1) {
        progressContainer.style.display = "none";
    }
}

    for (let i = activeCubes.length - 1; i >= 0; i--) {
        const cube = activeCubes[i];
        cube.position.z += cube.userData.speed;

       if (!cube.userData.hit && cube.position.z >= plane2.position.z) {
    cube.userData.hit = true;

    // Só toca nota automaticamente no modo autoplay
    if (modoAtual === "autoplay") {
        const note = keyMap[cube.userData.letter];
        if (piano && note) {
            piano.play(note);
        }
    }

    scene.remove(cube);
    activeCubes.splice(i, 1);
}

    }

    renderer.render(scene, camera);
     if (activeCubes.length === 0 && spawnEvents.every(e => e.spawned)) {
        if (!fimTimeout) {
            fimTimeout = setTimeout(() => {
                cancelAnimationFrame(animationId);

                // Esconde canvas
                const canvas = renderer.domElement;
                canvas.style.display = 'none';

                // Mostra div final
                const fimDiv = document.getElementById('fimDaCena');
                if (fimDiv) fimDiv.style.display = 'block';

                telaInicial.style.display = 'none';

            }, 1000); // espera 3000 ms (3 segundos)
        }
    }
}

function resetarCena() {
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    for (let cube of activeCubes) {
        scene.remove(cube);
    }
    activeCubes.length = 0;

    spawnEvents.length = 0;
    startTime = null; // <- reinicia o tempo
}
const canvas = renderer.domElement;



const autoplayButton = document.getElementById("autoplayButton");
const jogarButton = document.getElementById("jogarButton");

const elvisMusic = document.getElementById("elvis");
const bethovenMusic = document.getElementById("bethoven");
const tchaiMusic = document.getElementById("tchai");

const resetar = document.getElementById("resetarButton");
const voltar = document.getElementById("voltarButton");

if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
}


voltar.addEventListener("click", () => {
    // Limpa cubos, eventos e para animação

            playElvis.style.display = "inline"
            playTchai.style.display = "inline"
            playBethoven.style.display = "inline"
    modoAtual = null;
    jogarButton.disabled = false;
    autoplayButton.disabled = false;
progressContainer.style.display = "none";
telaInicial.style.marginTop = "10vh"
    // Desmarcar destaque visual
    jogarButton.classList.remove("ativo");
    autoplayButton.classList.remove("ativo");

    // Restaurar interface inicial
    titulo.style.display = "inline";
    resetarButton.style.display = "none";
    voltarButton.style.display = "none";
    pianoImg.style.display = "inline";

    // Reexibir seleção de música
    elvis.style.display = "inline";
    bethoven.style.display = "inline";
    tchai.style.display = "inline";

canvas.style.display = "none";

    telaInicial.style.display = 'flex'; // ou 'block', depende da sua config
});

elvisMusic.addEventListener("click", () => {
    musica = "elvis"
    bethovenMusic.classList.remove("musicaEscolhida")
    tchaiMusic.classList.remove("musicaEscolhida")
    elvisMusic.classList.add("musicaEscolhida");
        area.style.setProperty("margin-left", "350px", "important");

    
})

bethovenMusic.addEventListener("click", () => {
    musica = "bethoven"
    bethovenMusic.classList.add("musicaEscolhida");
    elvisMusic.classList.remove("musicaEscolhida");
    tchaiMusic.classList.remove("musicaEscolhida");
        area.style.setProperty("margin-left", "300px", "important");

})

tchaiMusic.addEventListener("click", () => {
    musica = "tchai"
    tchaiMusic.classList.add("musicaEscolhida")
    bethovenMusic.classList.remove("musicaEscolhida");
    elvisMusic.classList.remove("musicaEscolhida");
    area.style.setProperty("margin-left", "500px", "important");

})


autoplayButton.addEventListener("click", () => {
    if (modoAtual === "autoplay") return;
telaInicial.style.setProperty("margin-top", "0vh", "important");
telaInicial.style.setProperty("margin-top", "0vh", "important");
progressBar.style.width = "0%";
progressContainer.style.display = "block";

            playElvis.style.display = "none"
            playTchai.style.display = "none"
            playBethoven.style.display = "none"
titulo.style.display = "none";
resetarButton.style.display = "inline";
voltarButton.style.display = "inline";
pianoImg.style.display = "none";
//grade.style.display = "none";
//imgContainer.style.display = "none";
     // containerButton.style.transform = 'translateY(150px)';
canvas.style.display = "inline";


    modoAtual = "autoplay";
    resetarCena();
  if(musica === "bethoven"){
      carregarPartituraOde();
      elvis.style.display = "none"
            tchai.style.display = "none"
  } else if (musica == "tchai") {
      carregarPartituraCisne();
      bethoven.style.display = "none"
      elvis.style.display = "none"

  }
  else{
   
             carregarPartituraLove();
      bethoven.style.display = "none"
      tchai.style.display = "none"


  }
  startTime = performance.now();
    jogarButton.disabled = false;
 autoplayButton.classList.add("ativo");
    jogarButton.classList.remove("ativo");
    if (teclaListener) {
        document.removeEventListener("keydown", teclaListener);
        teclaListener = null;
    }

    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    if (!pianoLoaded) {
        Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((loadedPiano) => {
            piano = loadedPiano;
            pianoLoaded = true;
            // Adicione notas de teste se necessário
            animate();
        });
    } else {
        animate();
    }
});

jogarButton.addEventListener("click", () => {
    if (modoAtual === "jogar") return;
telaInicial.style.setProperty("margin-top", "0vh", "important");
titulo.style.display = "none";
resetarButton.style.display = "inline";
voltarButton.style.display = "inline";
canvas.style.display = "inline";
progressBar.style.width = "0%";
progressContainer.style.display = "block";

            playElvis.style.display = "none"
            playTchai.style.display = "none"
            playBethoven.style.display = "none"
pianoImg.style.display = "none";

//degrade.style.display = "none";
//grade.style.display = "none";
//imgContainer.style.display = "none";
//      containerButton.style.transform = 'translateY(150px)';
//
 console.log("carregado")
    modoAtual = "jogar";
    resetarCena();
     if(musica === "bethoven"){
      carregarPartituraOde();
      elvis.style.display = "none"
            tchai.style.display = "none"
  } else if (musica == "tchai") {
      carregarPartituraCisne();
      bethoven.style.display = "none"
      elvis.style.display = "none"
  }
  else{
   
             carregarPartituraLove();
      bethoven.style.display = "none"
      tchai.style.display = "none"

  }
     startTime = performance.now();
    jogarButton.disabled = true;
    autoplayButton.disabled = false;

    
    jogarButton.classList.add("ativo");
    autoplayButton.classList.remove("ativo");
    // Cancela animação anterior
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    // Remove listener antigo
    if (teclaListener) {
        document.removeEventListener("keydown", teclaListener);
    }

    teclaListener = (e) => {
        const note = keyMap[e.key];
        if (!note || !piano) return;

        piano.play(note);

        // Verifica se o jogador acertou a tecla no momento certo
        for (let i = activeCubes.length - 1; i >= 0; i--) {
            const cube = activeCubes[i];
            const cubeNote = keyMap[cube.userData.letter];
            const near = Math.abs(cube.position.z - plane2.position.z) < 0.4;

            if (!cube.userData.hit && cubeNote === note && near) {
                cube.userData.hit = true;
                scene.remove(cube);
                activeCubes.splice(i, 1);
                break;
            }
        }
    };
    document.addEventListener("keydown", teclaListener);

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    if (!pianoLoaded) {
        Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((loadedPiano) => {
            piano = loadedPiano;
            pianoLoaded = true;
            animate(); // ✅ chama animaagora te depois de carregar
        });
    } else {
        animate(); // ✅ chama animate se já estiver carregado
    }
});
resetar.addEventListener("click", () => {
    resetarCena(); // Limpa cubos e tempo

    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    if (teclaListener) {
        document.removeEventListener("keydown", teclaListener);
        teclaListener = null;
    }

    // Recarrega partitura de acordo com a música atual
    if (musica === "bethoven") {
        carregarPartituraOde();
    } else if (musica === "tchai") {
        carregarPartituraCisne();
    } else {
        carregarPartituraLove();
    }

    startTime = performance.now();

    // Se for modo "jogar", reativa listener de teclado
    if (modoAtual === "jogar") {
        teclaListener = (e) => {
            const note = keyMap[e.key];
            if (!note || !piano) return;

            piano.play(note);

            for (let i = activeCubes.length - 1; i >= 0; i--) {
                const cube = activeCubes[i];
                const cubeNote = keyMap[cube.userData.letter];
                const near = Math.abs(cube.position.z - plane2.position.z) < 0.4;

                if (!cube.userData.hit && cubeNote === note && near) {
                    cube.userData.hit = true;
                    scene.remove(cube);
                    activeCubes.splice(i, 1);
                    break;
                }
            }
        };
        document.addEventListener("keydown", teclaListener);
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

    // Garante que o piano está carregado
    if (!pianoLoaded) {
        Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((loadedPiano) => {
            piano = loadedPiano;
            pianoLoaded = true;
            animate();
        });
    } else {
        animate();
    }
});


function carregarPartituraOde() {
addCubeToScene("g", 0, 0.05);
addCubeToScene("g", 752, 0.05);
addCubeToScene("h", 1350, 0.05);
addCubeToScene("k", 1976, 0.05);
addCubeToScene("k", 2616, 0.05);
addCubeToScene("h", 3175, 0.05);
addCubeToScene("g", 3822, 0.05);
addCubeToScene("d", 4352, 0.05);
addCubeToScene("a", 4991, 0.05);
addCubeToScene("a", 5527, 0.05);
addCubeToScene("d", 6182, 0.05);
addCubeToScene("g", 6775, 0.05);
addCubeToScene("g", 7375, 0.05);
addCubeToScene("d", 8367, 0.05);
addCubeToScene("d", 8897, 0.05);
addCubeToScene("g", 9831, 0.05);
addCubeToScene("g", 10390, 0.05);
addCubeToScene("h", 11065, 0.05);
addCubeToScene("k", 11614, 0.05);
addCubeToScene("k", 12254, 0.05);
addCubeToScene("h", 12864, 0.05);
addCubeToScene("g", 13454, 0.05);
addCubeToScene("d", 13900, 0.05);
addCubeToScene("a", 14549, 0.05);
addCubeToScene("a", 15147, 0.05);
addCubeToScene("d", 15590, 0.05);
addCubeToScene("g", 16199, 0.05);
addCubeToScene("d", 17000, 0.05);
addCubeToScene("a", 17912, 0.05);
addCubeToScene("a", 18240, 0.05);
addCubeToScene("d", 19510, 0.05);
addCubeToScene("d", 20152, 0.05);
addCubeToScene("g", 20753, 0.05);
addCubeToScene("a", 21343, 0.05);
addCubeToScene("d", 21950, 0.05);
addCubeToScene("g", 22320, 0.05);
addCubeToScene("h", 22863, 0.05);
addCubeToScene("g", 23136, 0.05);
addCubeToScene("a", 23670, 0.05);
addCubeToScene("d", 24374, 0.05);
addCubeToScene("g", 24975, 0.05);
addCubeToScene("h", 25286, 0.05);
addCubeToScene("g", 25593, 0.05);
addCubeToScene("d", 26191, 0.05);
addCubeToScene("a", 26790, 0.05);
addCubeToScene("d", 27344, 0.05);
addCubeToScene("a", 27934, 0.05);
addCubeToScene("g", 29246, 0.05);
addCubeToScene("g", 29758, 0.05);
addCubeToScene("h", 30351, 0.05);
addCubeToScene("k", 30895, 0.05);
addCubeToScene("k", 31503, 0.05);
addCubeToScene("h", 32111, 0.05);
addCubeToScene("g", 32710, 0.05);
addCubeToScene("d", 33239, 0.05);
addCubeToScene("a", 33879, 0.05);
addCubeToScene("a", 34438, 0.05);
addCubeToScene("d", 35071, 0.05);
addCubeToScene("g", 35639, 0.05);
addCubeToScene("d", 36246, 0.05);
addCubeToScene("a", 37198, 0.05);
addCubeToScene("a", 37550, 0.05);

duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000; // tempo da última nota + folga

    
}

function carregarPartituraClair(){
addCubeToScene("p", 0, 0.05);      // B4 (primeira nota)
addCubeToScene("k", 247, 0.05);    // G4
addCubeToScene("l", 531, 0.05);    // A4
addCubeToScene("p", 811, 0.05);    // B4

addCubeToScene("p", 2124, 0.05);  // B4
addCubeToScene("l", 2387, 0.05);   // A4
addCubeToScene("k", 3068, 0.05);   // G4
addCubeToScene("g", 3715, 0.05);   // E4

addCubeToScene("k", 4203, 0.05);  // G4
addCubeToScene("l", 4487, 0.05);   // A4
addCubeToScene("k", 5016, 0.05);   // G4
addCubeToScene("g", 5530, 0.05);   // E4

addCubeToScene("j", 5820, 0.05);   // F#4
addCubeToScene("g", 6078, 0.05);   // E4
addCubeToScene("j", 6319, 0.05);   // F#4
addCubeToScene("k", 6570, 0.05);   // G4
addCubeToScene("l", 7036, 0.05);   // A4

addCubeToScene("p", 8329, 0.05);  // B4
addCubeToScene("k", 8610, 0.05);   // G4
addCubeToScene("l", 8907, 0.05);   // A4
addCubeToScene("p", 9216, 0.05);   // B4

addCubeToScene("p", 10352, 0.05);  // B4
addCubeToScene("l", 10686, 0.05);  // A4
addCubeToScene("k", 11520, 0.05);  // G4
addCubeToScene("g", 11983, 0.05);  // E4

addCubeToScene("p", 12554, 0.05);  // B4
addCubeToScene("l", 12820, 0.05);  // A4
addCubeToScene("k", 13391, 0.05);  // G4
addCubeToScene("j", 14014, 0.05);  // F#4

addCubeToScene("p", 16716, 0.05);  // B4
addCubeToScene("l", 16984, 0.05);  // A4
addCubeToScene("p", 17698, 0.05);  // B4
addCubeToScene("k", 18216, 0.05);  // G4
addCubeToScene("p", 18781, 0.05);  // B4
addCubeToScene("k", 19035, 0.05);  // G4
addCubeToScene("l", 19312, 0.05);  // A4
addCubeToScene("p", 19582, 0.05);  // B4

addCubeToScene("p", 20847, 0.05);  // B4
addCubeToScene("l", 21155, 0.05);  // A4
addCubeToScene("p", 21899, 0.05);  // B4
addCubeToScene("p", 22366, 0.05);  // B4
addCubeToScene("k", 23125, 0.05);  // G4
addCubeToScene("l", 23477, 0.05);  // A4
addCubeToScene("k", 23784, 0.05);  // G4

addCubeToScene("p", 25075, 0.05);  // B4
addCubeToScene("l", 25599, 0.05);  // A4
addCubeToScene("k", 26099, 0.05);  // G4
addCubeToScene("g", 26593, 0.05);  // E4
addCubeToScene("k", 26921, 0.05);  // G4
addCubeToScene("l", 27204, 0.05);  // A4

addCubeToScene("d", 27466, 0.05);  // D4
addCubeToScene("k", 27719, 0.05);  // G4
addCubeToScene("l", 27951, 0.05);  // A4
addCubeToScene("a", 28203, 0.05);  // C4
addCubeToScene("k", 28449, 0.05);  // G4
addCubeToScene("l", 28701, 0.05);  // A4
addCubeToScene("d", 28939, 0.05);  // D4
addCubeToScene("k", 29199, 0.05);  // G4
addCubeToScene("l", 29485, 0.05);  // A4
addCubeToScene("k", 29747, 0.05);  // G4
addCubeToScene("j", 30015, 0.05);  // F#4
addCubeToScene("g", 30287, 0.05);  // E4
addCubeToScene("d", 30556, 0.05);  // D4
duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000; // tempo da última nota + folga

}


function carregarPartituraLove(){
    // Tempos normalizados (cada tempo - 1519 ms) e teclas mapeadas com NOVO keyMap:
addCubeToScene("a", 0, 0.05);      // C4 (1519 - 1519 = 0)
addCubeToScene("k", 1832, 0.05);   // G4 (3351 - 1519 = 1832)
addCubeToScene("a", 3471, 0.05);   // C4 (4990 - 1519 = 3471)

addCubeToScene("d", 6292, 0.05);   // D4 (7811 - 1519 = 6292)
addCubeToScene("g", 6739, 0.05);   // E4 (8258 - 1519 = 6739)
addCubeToScene("h", 7048, 0.05);   // F4 (8567 - 1519 = 7048)
addCubeToScene("g", 8592, 0.05);   // E4 (10111 - 1519 = 8592)
addCubeToScene("d", 10358, 0.05);  // D4 (11877 - 1519 = 10358)

addCubeToScene("m", 13584, 0.05);  // G3 (15103 - 1519 = 13584) - Tecla 'm' no novo keyMap
addCubeToScene("n", 13835, 0.05);  // A3 (15354 - 1519 = 13835) - Tecla 'n' no novo keyMap
addCubeToScene("b", 15364, 0.05);  // B3 (16883 - 1519 = 15364) - Tecla 'b' no novo keyMap

addCubeToScene("a", 17246, 0.05);  // C4 (18765 - 1519 = 17246)
addCubeToScene("d", 18926, 0.05);  // D4 (20445 - 1519 = 18926)
addCubeToScene("g", 19498, 0.05);   // E4 (21017 - 1519 = 19498)
addCubeToScene("h", 20027, 0.05);   // F4 (21546 - 1519 = 20027)
addCubeToScene("g", 20658, 0.05);   // E4 (22177 - 1519 = 20658)
addCubeToScene("d", 22298, 0.05);   // D4 (23817 - 1519 = 22298)
addCubeToScene("a", 24050, 0.05);   // C4 (25569 - 1519 = 24050)

// --- Repetição da primeira parte ---
addCubeToScene("a", 27332, 0.05);  // C4 (28851 - 1519 = 27332)
addCubeToScene("k", 29049, 0.05);   // G4 (30568 - 1519 = 29049)
addCubeToScene("a", 30915, 0.05);   // C4 (32434 - 1519 = 30915)

addCubeToScene("d", 33666, 0.05);   // D4 (35185 - 1519 = 33666)
addCubeToScene("g", 34115, 0.05);   // E4 (35634 - 1519 = 34115)
addCubeToScene("h", 34357, 0.05);   // F4 (35876 - 1519 = 34357)
addCubeToScene("g", 36058, 0.05);   // E4 (37577 - 1519 = 36058)
addCubeToScene("d", 37799, 0.05);   // D4 (39318 - 1519 = 37799)

addCubeToScene("m", 40972, 0.05);  // G3 (42491 - 1519 = 40972)
addCubeToScene("n", 41262, 0.05);   // A3 (42781 - 1519 = 41262)
addCubeToScene("b", 42858, 0.05);   // B3 (44377 - 1519 = 42858)

addCubeToScene("a", 44573, 0.05);   // C4 (46092 - 1519 = 44573)
addCubeToScene("d", 46274, 0.05);   // D4 (47793 - 1519 = 46274)
addCubeToScene("g", 46863, 0.05);   // E4 (48382 - 1519 = 46863)
addCubeToScene("h", 47499, 0.05);   // F4 (49018 - 1519 = 47499)
addCubeToScene("g", 48074, 0.05);   // E4 (49593 - 1519 = 48074)
addCubeToScene("d", 49786, 0.05);   // D4 (51305 - 1519 = 49786)
addCubeToScene("a", 51483, 0.05);   // C4 (53002 - 1519 = 51483)

// --- Parte final ---
addCubeToScene("b", 54843, 0.05);   // B3 (56362 - 1519 = 54843)
addCubeToScene("g", 55585, 0.05);   // E4 (57104 - 1519 = 55585)
addCubeToScene("k", 56068, 0.05);   // G4 (57587 - 1519 = 56068)
addCubeToScene("p", 56487, 0.05);   // B4 (58006 - 1519 = 56487)
addCubeToScene("l", 56802, 0.05);   // A4 (58321 - 1519 = 56802)

// Padrão repetido para as próximas notas B3 E4 G4 B4 A4
addCubeToScene("b", 58326, 0.05);   // B3 (59845 - 1519 = 58326)
addCubeToScene("g", 58955, 0.05);   // E4 (60474 - 1519 = 58955)
addCubeToScene("k", 59481, 0.05);   // G4 (61000 - 1519 = 59481)
addCubeToScene("p", 59823, 0.05);   // B4 (61342 - 1519 = 59823)
addCubeToScene("l", 60097, 0.05);   // A4 (61616 - 1519 = 60097)

// Última repetição B3 E4 G4 B4 A4
addCubeToScene("b", 61732, 0.05);   // B3 (63251 - 1519 = 61732)
addCubeToScene("g", 62398, 0.05);   // E4 (63917 - 1519 = 62398)
addCubeToScene("k", 62925, 0.05);   // G4 (64444 - 1519 = 62925)
addCubeToScene("p", 63303, 0.05);   // B4 (64822 - 1519 = 63303)
addCubeToScene("l", 63605, 0.05);   // A4 (65124 - 1519 = 63605)

// Sequência G4 G4 E4 G4 E4 F4
addCubeToScene("k", 65129, 0.05);   // G4 (66648 - 1519 = 65129)
addCubeToScene("k", 65619, 0.05);   // G4 (67138 - 1519 = 65619)
addCubeToScene("g", 67740, 0.05);   // E4 (69259 - 1519 = 67740)
addCubeToScene("k", 68132, 0.05);   // G4 (69651 - 1519 = 68132)
addCubeToScene("g", 68413, 0.05);   // E4 (69932 - 1519 = 68413)
addCubeToScene("h", 68647, 0.05);   // F4 (70166 - 1519 = 68647)

// Final C4 G4 C4 | D4 E4 F4 E4 D4 | G3 A3 B3 | C4 D4 E4 F4 E4 D4 C4
addCubeToScene("a", 71979, 0.05);   // C4 (73498 - 1519 = 71979)
addCubeToScene("k", 73714, 0.05);   // G4 (75233 - 1519 = 73714)
addCubeToScene("a", 75495, 0.05);   // C4 (77014 - 1519 = 75495)

addCubeToScene("d", 78364, 0.05);   // D4 (79883 - 1519 = 78364)
addCubeToScene("g", 78722, 0.05);   // E4 (80241 - 1519 = 78722)
addCubeToScene("h", 78949, 0.05);   // F4 (80468 - 1519 = 78949)
addCubeToScene("g", 80650, 0.05);   // E4 (82169 - 1519 = 80650)
addCubeToScene("d", 82422, 0.05);   // D4 (83941 - 1519 = 82422)

addCubeToScene("m", 85546, 0.05);   // G3 (87065 - 1519 = 85546)
addCubeToScene("n", 85838, 0.05);   // A3 (87357 - 1519 = 85838)
addCubeToScene("b", 87504, 0.05);   // B3 (89023 - 1519 = 87504)

addCubeToScene("a", 89067, 0.05);   // C4 (90586 - 1519 = 89067)
addCubeToScene("d", 90927, 0.05);   // D4 (92446 - 1519 = 90927)
addCubeToScene("g", 91414, 0.05);   // E4 (92933 - 1519 = 91414)
addCubeToScene("h", 91923, 0.05);   // F4 (93442 - 1519 = 91923)
addCubeToScene("g", 92512, 0.05);   // E4 (94031 - 1519 = 92512)
addCubeToScene("d", 94347, 0.05);   // D4 (95866 - 1519 = 94347)
addCubeToScene("a", 96113, 0.05);   // C4 (97632 - 1519 = 96113)
duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000; // tempo da última nota + folga

}

function carregarPartituraMozart(){
    // Primeiro tempo normalizado para 0 (3828 - 3828)
addCubeToScene("p", 0, 0.05);      // B4 (3828 - 3828 = 0)
addCubeToScene("l", 385, 0.05);    // A4 (4213 - 3828 = 385)
addCubeToScene("ç", 650, 0.05);    // A#4 (4478 - 3828 = 650)
addCubeToScene("l", 937, 0.05);    // A4 (4765 - 3828 = 937)
addCubeToScene("q", 1257, 0.05);   // C5 (5085 - 3828 = 1257)

addCubeToScene("e", 2522, 0.05);  // D5 (6350 - 3828 = 2522)
addCubeToScene("q", 2860, 0.05);   // C5 (6688 - 3828 = 2860)
addCubeToScene("p", 3139, 0.05);   // B4 (6967 - 3828 = 3139)
addCubeToScene("q", 3432, 0.05);   // C5 (7260 - 3828 = 3432)
addCubeToScene("t", 3704, 0.05);   // E5 (7532 - 3828 = 3704)
addCubeToScene("y", 4937, 0.05);   // F5 (8765 - 3828 = 4937)
addCubeToScene("t", 5256, 0.05);   // E5 (9084 - 3828 = 5256)

addCubeToScene("u", 5531, 0.05);   // F#5 (9359 - 3828 = 5531)
addCubeToScene("t", 5824, 0.05);   // E5 (9652 - 3828 = 5824)
addCubeToScene("[", 6193, 0.05);   // B5 (10021 - 3828 = 6193)
addCubeToScene("o", 6506, 0.05);   // A5 (10334 - 3828 = 6506)
addCubeToScene("]", 6794, 0.05);   // A#5 (10622 - 3828 = 6794)
addCubeToScene("o", 7113, 0.05);   // A5 (10941 - 3828 = 7113)
addCubeToScene("[", 7735, 0.05);   // B5 (11570 - 3828 = 7735)

addCubeToScene("o", 8042, 0.05);   // A5 (11870 - 3828 = 8042)
addCubeToScene("]", 8410, 0.05);   // A#5 (12238 - 3828 = 8410)
addCubeToScene("o", 9710, 0.05);   // A5 (13538 - 3828 = 9710)
addCubeToScene("i", 10237, 0.05);  // C6 (14065 - 3828 = 10237)
addCubeToScene("o", 10879, 0.05);  // A5 (14707 - 3828 = 10879)
addCubeToScene("i", 11424, 0.05);  // C6 (15252 - 3828 = 11424)

addCubeToScene("[", 12040, 0.05);  // B5 (15868 - 3828 = 12040)
addCubeToScene("o", 12672, 0.05);  // A5 (16500 - 3828 = 12672)
addCubeToScene("k", 13273, 0.05);  // G5 (17101 - 3828 = 13273)
addCubeToScene("o", 13875, 0.05);  // A5 (17703 - 3828 = 13875)
addCubeToScene("[", 14436, 0.05);  // B5 (18264 - 3828 = 14436)
addCubeToScene("o", 15081, 0.05);  // A5 (18909 - 3828 = 15081)
addCubeToScene("k", 15705, 0.05);  // G5 (19533 - 3828 = 15705)
addCubeToScene("o", 16236, 0.05);  // A5 (20064 - 3828 = 16236)

// Continuação do padrão...
addCubeToScene("[", 16892, 0.05);  // B5 (20720 - 3828 = 16892)
addCubeToScene("o", 17406, 0.05);  // A5 (21234 - 3828 = 17406)
addCubeToScene("k", 18070, 0.05);  // G5 (21898 - 3828 = 18070)
addCubeToScene("j", 19352, 0.05);  // F#5 (23180 - 3828 = 19352)
addCubeToScene("t", 19644, 0.05);  // E5 (23472 - 3828 = 19644)

// Repetição da primeira parte
addCubeToScene("p", 19963, 0.05);  // B4 (23791 - 3828 = 19963)
addCubeToScene("l", 20246, 0.05);  // A4 (24074 - 3828 = 20246)
addCubeToScene("ç", 20538, 0.05);  // A#4 (24366 - 3828 = 20538)
addCubeToScene("l", 21660, 0.05);  // A4 (25488 - 3828 = 21660)
addCubeToScene("q", 21966, 0.05);  // C5 (25794 - 3828 = 21966)

// [...] (continuar com o mesmo padrão para os tempos restantes)

// Sequência final E5 F5 G5 G5 A5 G5 F5 E5 D5
addCubeToScene("t", 28967, 0.05);  // E5 (32791 - 3828 = 28963)
addCubeToScene("y", 29485, 0.05);  // F5 (33313 - 3828 = 29485)
addCubeToScene("k", 30119, 0.05);  // G5 (33947 - 3828 = 30119)
addCubeToScene("k", 30687, 0.05);  // G5 (34515 - 3828 = 30687)
addCubeToScene("l", 31272, 0.05);   // A5 (35100 - 3828 = 31272)
addCubeToScene("k", 31910, 0.05);  // G5 (35738 - 3828 = 31910)
addCubeToScene("y", 32460, 0.05);  // F5 (36288 - 3828 = 32460)
addCubeToScene("t", 33051, 0.05);  // E5 (36879 - 3828 = 33051)
addCubeToScene("e", 33647, 0.05);  // D5 (37475 - 3828 = 33647)

// Segunda repetição da sequência E5 F5 G5...
addCubeToScene("t", 34257, 0.05);  // E5 (38085 - 3828 = 34257)
addCubeToScene("y", 34858, 0.05);  // F5 (38686 - 3828 = 34858)
addCubeToScene("k", 35438, 0.05);  // G5 (39266 - 3828 = 35438)
addCubeToScene("k", 36060, 0.05);  // G5 (39888 - 3828 = 36060)
addCubeToScene("l", 36669, 0.05);  // A5 (40497 - 3828 = 36669)
addCubeToScene("k", 37227, 0.05);  // G5 (41055 - 3828 = 37227)
addCubeToScene("y", 38409, 0.05);  // F5 (42237 - 3828 = 38409)
addCubeToScene("t", 39012, 0.05);  // E5 (42840 - 3828 = 39012)
addCubeToScene("e", 39630, 0.05);  // D5 (43458 - 3828 = 39630)

// Sequência C5 D5 E5...
addCubeToScene("q", 40342, 0.05);  // C5 (44170 - 3828 = 40342)
addCubeToScene("e", 40910, 0.05);  // D5 (44738 - 3828 = 40910)
addCubeToScene("t", 41285, 0.05);  // E5 (45113 - 3828 = 41285)
addCubeToScene("t", 41609, 0.05);  // E5 (45437 - 3828 = 41609)
addCubeToScene("y", 41908, 0.05);  // F5 (45736 - 3828 = 41908)
addCubeToScene("t", 43264, 0.05);  // E5 (47092 - 3828 = 43264)
addCubeToScene("e", 43880, 0.05);  // D5 (47708 - 3828 = 43880)
addCubeToScene("q", 44486, 0.05);  // C5 (48314 - 3828 = 44486)
addCubeToScene("[", 45068, 0.05);  // B5 (48996 - 3828 = 45068)

// Últimas sequências
addCubeToScene("t", 45458, 0.05);  // E5 (49586 - 3828 = 45758)
addCubeToScene("q", 45787, 0.05);  // C5 (49915 - 3828 = 46087)
addCubeToScene("e", 46104, 0.05);  // D5 (50232 - 3828 = 46404)
addCubeToScene("t", 46414, 0.05);  // E5 (50542 - 3828 = 46714)
addCubeToScene("t", 47780, 0.05);  // E5 (51908 - 3828 = 48080)
addCubeToScene("y", 48412, 0.05);  // F5 (52540 - 3828 = 48712)
addCubeToScene("k", 49038, 0.05);  // G5 (53166 - 3828 = 49338)
addCubeToScene("k", 49625, 0.05);  // G5 (53753 - 3828 = 49925)
addCubeToScene("l", 50227, 0.05);  // A5 (54355 - 3828 = 50527)
addCubeToScene("k", 50530, 0.05);  // G5 (54658 - 3828 = 50830)
addCubeToScene("y", 50860, 0.05);  // F5 (54988 - 3828 = 51160)
addCubeToScene("t", 51161, 0.05);  // E5 (55289 - 3828 = 51461)
addCubeToScene("e", 51584, 0.05);  // D5 (55712 - 3828 = 51884)

// Final B4 B4 A4 A#4 A4 C5...
addCubeToScene("p", 52877, 0.05);  // B4 (56705 - 3828 = 52877)
addCubeToScene("p", 53570, 0.05);  // B4 (57398 - 3828 = 53570)
addCubeToScene("l", 54216, 0.05);  // A4 (58044 - 3828 = 54216)
addCubeToScene("ç", 54773, 0.05);  // A#4 (58601 - 3828 = 54773)
addCubeToScene("l", 55344, 0.05);  // A4 (59172 - 3828 = 55344)
addCubeToScene("q", 55664, 0.05);  // C5 (59492 - 3828 = 55664)
addCubeToScene("e", 55975, 0.05);  // D5 (59803 - 3828 = 55975)
addCubeToScene("q", 56278, 0.05);  // C5 (60106 - 3828 = 56278)
addCubeToScene("p", 57745, 0.05);  // B4 (61573 - 3828 = 57745)
addCubeToScene("q", 58033, 0.05);  // C5 (61861 - 3828 = 58033)
addCubeToScene("t", 58346, 0.05);  // E5 (62174 - 3828 = 58346)
addCubeToScene("y", 58665, 0.05);  // F5 (62493 - 3828 = 58665)
addCubeToScene("t", 58979, 0.05);  // E5 (62807 - 3828 = 58979)
addCubeToScene("u", 60114, 0.05);  // F#5 (63942 - 3828 = 60114)
addCubeToScene("t", 60421, 0.05);  // E5 (64249 - 3828 = 60421)
addCubeToScene("[", 60765, 0.05);  // B5 (64593 - 3828 = 60765)
addCubeToScene("o", 61047, 0.05);  // A5 (64875 - 3828 = 61047)
addCubeToScene("]", 61336, 0.05);  // A#5 (65164 - 3828 = 61336)
addCubeToScene("o", 62473, 0.05);  // A5 (66301 - 3828 = 62473)
addCubeToScene("[", 62774, 0.05);  // B5 (66602 - 3828 = 62774)
addCubeToScene("o", 63033, 0.05);  // A5 (66861 - 3828 = 63033)
addCubeToScene("]", 63345, 0.05);  // A#5 (67173 - 3828 = 63345)
addCubeToScene("o", 63765, 0.05);  // A5 (67593 - 3828 = 63765)
addCubeToScene("i", 64064, 0.05);  // C6 (67892 - 3828 = 64064)
addCubeToScene("o", 64421, 0.05);  // A5 (68249 - 3828 = 64421)
addCubeToScene("i", 64776, 0.05);  // C6 (68604 - 3828 = 64776)
addCubeToScene("[", 65167, 0.05);  // B5 (68995 - 3828 = 65167)
addCubeToScene("o", 65479, 0.05);  // A5 (69307 - 3828 = 65479)
addCubeToScene("k", 65833, 0.05);  // G5 (69661 - 3828 = 65833)
addCubeToScene("o", 66193, 0.05);  // A5 (70021 - 3828 = 66193)
addCubeToScene("[", 67365, 0.05);  // B5 (71193 - 3828 = 67365)
addCubeToScene("o", 67865, 0.05);  // A5 (71693 - 3828 = 67865)
addCubeToScene("k", 68526, 0.05);  // G5 (72354 - 3828 = 68526)
addCubeToScene("o", 69067, 0.05);  // A5 (72895 - 3828 = 69067)
addCubeToScene("[", 69681, 0.05);  // B5 (73509 - 3828 = 69681)
addCubeToScene("o", 70267, 0.05);  // A5 (74095 - 3828 = 70267)
addCubeToScene("k", 70822, 0.05);  // G5 (74650 - 3828 = 70822)
addCubeToScene("o", 71571, 0.05);  // A5 (75399 - 3828 = 71571)
addCubeToScene("j", 72111, 0.05);  // F#5 (75939 - 3828 = 72111)
addCubeToScene("e", 72687, 0.05);  // D5 (76515 - 3828 = 72687)
addCubeToScene("q", 73281, 0.05);  // C5 (77109 - 3828 = 73281)
addCubeToScene("p", 74555, 0.05);  // B4 (78383 - 3828 = 74555)
addCubeToScene("l", 74988, 0.05);  // A4 (78816 - 3828 = 74988)
addCubeToScene("p", 75376, 0.05);  // B4 (79204 - 3828 = 75376)
addCubeToScene("l", 75679, 0.05);  // A4 (79507 - 3828 = 75679)
duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000; // tempo da última nota + folga

}

function carregarPartituraCisne(){
 addCubeToScene("u", 0, 0.05);
addCubeToScene("p", 2610, 0.05);
addCubeToScene("r", 3022, 0.05);
addCubeToScene("e", 3477, 0.05);
addCubeToScene("t", 3948, 0.05);
addCubeToScene("u", 4398, 0.05);
addCubeToScene("e", 5966, 0.05);
addCubeToScene("u", 6420, 0.05);
addCubeToScene("e", 8006, 0.05);
addCubeToScene("u", 8544, 0.05);

addCubeToScene("p", 11274, 0.05);
addCubeToScene("e", 11726, 0.05);
addCubeToScene("p", 12177, 0.05);
addCubeToScene("k", 12632, 0.05);
addCubeToScene("e", 13120, 0.05);
addCubeToScene("p", 13660, 0.05);

addCubeToScene("r", 15871, 0.05);
addCubeToScene("t", 16277, 0.05);
addCubeToScene("e", 16726, 0.05);
addCubeToScene("r", 17125, 0.05);
addCubeToScene("u", 17791, 0.05);

addCubeToScene("p", 19891, 0.05);
addCubeToScene("r", 20310, 0.05);
addCubeToScene("e", 20774, 0.05);
addCubeToScene("t", 21229, 0.05);
addCubeToScene("u", 21759, 0.05);
addCubeToScene("e", 23254, 0.05);
addCubeToScene("u", 23697, 0.05);
addCubeToScene("e", 25095, 0.05);
addCubeToScene("u", 25558, 0.05);

addCubeToScene("p", 27196, 0.05);
addCubeToScene("e", 27598, 0.05);
addCubeToScene("p", 28073, 0.05);
addCubeToScene("k", 28638, 0.05);
addCubeToScene("e", 29163, 0.05);
addCubeToScene("p", 29679, 0.05);

addCubeToScene("p", 33898, 0.05);
addCubeToScene("r", 34428, 0.05);
addCubeToScene("e", 35325, 0.05);
addCubeToScene("t", 36418, 0.05);
addCubeToScene("u", 37402, 0.05);
addCubeToScene("i", 38151, 0.05);
addCubeToScene("o", 38526, 0.05);

addCubeToScene("i", 39853, 0.05);
addCubeToScene("u", 40411, 0.05);
addCubeToScene("i", 41354, 0.05);
addCubeToScene("o", 41818, 0.05);
addCubeToScene("3", 42336, 0.05);
addCubeToScene("o", 43719, 0.05);
addCubeToScene("i", 44138, 0.05);
addCubeToScene("o", 45152, 0.05);
addCubeToScene("3", 45586, 0.05);
addCubeToScene("6", 46122, 0.05);

addCubeToScene("3", 47893, 0.05);
addCubeToScene("4", 48221, 0.05);
addCubeToScene("i", 49145, 0.05);
addCubeToScene("u", 49669, 0.05);
addCubeToScene("r", 50211, 0.05);
addCubeToScene("e", 51255, 0.05);
addCubeToScene("t", 52143, 0.05);
addCubeToScene("u", 53161, 0.05);
addCubeToScene("i", 53717, 0.05);
addCubeToScene("o", 54169, 0.05);

addCubeToScene("i", 55695, 0.05);
addCubeToScene("u", 56104, 0.05);
addCubeToScene("i", 57133, 0.05);
addCubeToScene("o", 57589, 0.05);
addCubeToScene("3", 58037, 0.05);
addCubeToScene("o", 59494, 0.05);
addCubeToScene("i", 59935, 0.05);
addCubeToScene("o", 60885, 0.05);
addCubeToScene("3", 61262, 0.05);
addCubeToScene("t", 61737, 0.05);
addCubeToScene("5", 61737, 0.05);

addCubeToScene("i", 63232, 0.05);
addCubeToScene("t", 63683, 0.05);
addCubeToScene("i", 64532, 0.05);
addCubeToScene("5", 65018, 0.05);
addCubeToScene("6", 65521, 0.05);
addCubeToScene("i", 67456, 0.05);
addCubeToScene("6", 68459, 0.05);
addCubeToScene("u", 68802, 0.05);
addCubeToScene("9", 69299, 0.05);

addCubeToScene("3", 71755, 0.05);
addCubeToScene("6", 72276, 0.05);
addCubeToScene("7", 72765, 0.05);
addCubeToScene("8", 73296, 0.05);
addCubeToScene("9", 73795, 0.05);
addCubeToScene("7", 75166, 0.05);
addCubeToScene("9", 75586, 0.05);
addCubeToScene("7", 77142, 0.05);
addCubeToScene("9", 77596, 0.05);

addCubeToScene("3", 79211, 0.05);
addCubeToScene("7", 79632, 0.05);
addCubeToScene("3", 80034, 0.05);
addCubeToScene("i", 80601, 0.05);
addCubeToScene("7", 81085, 0.05);
addCubeToScene("3", 81668, 0.05);
duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000; // tempo da última nota + folga

}