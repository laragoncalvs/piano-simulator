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



const autoplayButton = document.getElementById("autoplayButton");
const jogarButton = document.getElementById("jogarButton");
if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
}



autoplayButton.addEventListener("click", () => {
    if (modoAtual === "autoplay") return;
telaInicial.style.setProperty("margin-top", "0vh", "important");
//degrade.style.display = "none";
//grade.style.display = "none";
//imgContainer.style.display = "none";
     // containerButton.style.transform = 'translateY(150px)';


    modoAtual = "autoplay";
    resetarCena();
    carregarPartitura();
     startTime = performance.now();
    autoplayButton.disabled = true;
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
//degrade.style.display = "none";
//grade.style.display = "none";
//imgContainer.style.display = "none";
//      containerButton.style.transform = 'translateY(150px)';
//
 console.log("carregado")
    modoAtual = "jogar";
    resetarCena();
    carregarPartitura();
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
function carregarPartitura() {
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


    
}