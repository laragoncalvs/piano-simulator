import Soundfont from "soundfont-player";
import * as THREE from 'three';
import { keyMap } from "./keyMap.js";
import { allCubes } from "./cubes.js";
import { loadedTexturesAlt } from './cubes.js'; // ajuste o caminho conforme seu projeto
import notasJson from './partituras/furelise.json';
import lagoJson from './partituras/lago.json';
import littlestar from './partituras/littlestar.json';
import jinglebell from './partituras/jinglebell.json';
import odeToJoy from './partituras/ode.json';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let piano = null;
let pianoLoaded = false;
let modoAtual = null;
let modoMusica = null; // "aprendiz" ou "jogador"
let multiplicadorTempo = 1; // Multiplicador de tempo para ajustar velocidade
let teclaListener = null;
let animationId = null;
let startTime = null;
let fimTimeout = null;
let musica = null;
let pontuation = 0;
let totalNotas = 0;  // Total de notas da música
let pontosParaAcerto = 0;  // Pontos por acerto correto
const PONTUACAO_MAXIMA = 1000;  // Pontuação máxima

let duracaoTotal = 0;


function createAlphaGradientTexture(colorHex, direction = 'bottom-to-top') {
    const size = 256;
    const canvas = document.createElement('canvas');

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
camera.position.set(0, 6, 3);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const planeGeometry2 = new THREE.PlaneGeometry(13.5, 2);



const planeMaterial2 = new THREE.MeshStandardMaterial({
    color: 0xE323CA,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5,


});

const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);

plane2.rotation.x = -Math.PI / 2;
plane2.position.z = 3;

scene.add(plane2);




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
    line.position.x = [0, 1.1, -1.1, 2.2, -2.2, 3.3, -3.3, 4.4, -4.4, 5.5, -5.5, 6.7, -6.7][i];
    line.position.z = -2.5;
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

// Função para aplicar multiplicador de tempo a todos os eventos após carregamento
function aplicarMultiplicadorTempo() {
    spawnEvents.forEach(event => {
        event.delay *= multiplicadorTempo;
        // Ajustar velocidade do cubo para compensar o tempo maior
        // Se o tempo aumenta em X, a velocidade deve diminuir em X para o cubo chegar no tempo certo
        event.speed /= multiplicadorTempo;
    });
}

function spawnCube(letter, speed) {
    const baseCube = allCubes[letter];
    if (!baseCube) return;

    // Clona a geometria
    const geometry = baseCube.geometry.clone();

    // Clona materiais corretamente
    let newMaterials;
    if (Array.isArray(baseCube.material)) {
        newMaterials = baseCube.material.map(mat => mat.clone());
    } else {
        newMaterials = baseCube.material.clone();
    }

    const cube = new THREE.Mesh(geometry, newMaterials);
    cube.position.copy(baseCube.position);
    cube.userData = { speed, letter, hit: false, opacity: 1.0 };

    scene.add(cube);
    activeCubes.push(cube);
}

function animate() {
    animationId = requestAnimationFrame(animate);
    const elapsedTime = performance.now() - startTime;

    // Spawna cubos
    spawnEvents.forEach(event => {
        if (elapsedTime > event.delay && !event.spawned) {
            spawnCube(event.letter, event.speed);
            event.spawned = true;
        }
    });

    // Atualiza a barra de progresso
    if (startTime && duracaoTotal > 0) {
        const tempoAtual = performance.now() - startTime;
        const progresso = Math.min(tempoAtual / duracaoTotal, 1);
        progressBar.style.width = (progresso * 100) + "%";

        if (progresso >= 1) {
            progressContainer.style.display = "none";
        }
    }

    // Atualiza posição dos cubos
    for (let i = activeCubes.length - 1; i >= 0; i--) {
        const cube = activeCubes[i];
        cube.position.z += cube.userData.speed;

        const zAlvo = plane2.position.z;
        const offset = 0.8;

        if (!cube.userData.hit && cube.position.z >= (zAlvo - offset)) {
            // No autoplay, marca como hit e remove automaticamente
            if (modoAtual === "autoplay") {
                cube.userData.hit = true;

                const letra = cube.userData.letter;

                // Muda a cor das outras faces (exceto a face 2 com textura)
                if (Array.isArray(cube.material)) {
                    cube.material.forEach((mat, idx) => {
                        if (mat instanceof THREE.MeshStandardMaterial && mat.color) {
                            mat.color.set(0x51B79F);
                        }

                        if (idx === 2 && mat instanceof THREE.MeshBasicMaterial) {
                            const novaTextura = loadedTexturesAlt[letra];
                            if (novaTextura) {
                                mat.map = novaTextura;
                                mat.needsUpdate = true;
                            } else {
                                console.warn(`Textura alternativa não encontrada para: ${letra}`);
                            }
                        }
                    });
                }

                const note = keyMap[cube.userData.letter];
                if (piano && note) {
                    piano.play(note);
                }

                // Aguarda 400ms antes de remover o cubo
                setTimeout(() => {
                    if (scene.children.includes(cube)) scene.remove(cube);
                    const index = activeCubes.indexOf(cube);
                    if (index !== -1) activeCubes.splice(index, 1);
                }, 400);
            }
        }

        // Se o cubo passou da área sem ser pressionado no modo jogar
        if (modoAtual === "jogar" && !cube.userData.hit && cube.position.z > (zAlvo + 1.5)) {
            cube.userData.hit = true;

            // Penalidade de -5% do valor de cada acerto
            const penalidade = pontosParaAcerto * 0.05;
            pontuation = Math.max(0, pontuation - penalidade);
            showPointsAnimation(-penalidade);
            atualizarPontuacao();

            // Remove o cubo
            scene.remove(cube);
            activeCubes.splice(i, 1);
        }
    }


    renderer.render(scene, camera);

    // Finalização da animação
    if (activeCubes.length === 0 && spawnEvents.every(e => e.spawned)) {
        if (!fimTimeout) {
            fimTimeout = setTimeout(() => {
                cancelAnimationFrame(animationId);

                const canvas = renderer.domElement;
                canvas.style.display = 'none';

                const fimDiv = document.getElementById('fimDaCena');
                const pontuacaoFinal = document.getElementById('pontuacaoFinal');
                if (fimDiv) {
                    fimDiv.style.display = 'flex';
                    // Atualiza as estrelas baseado na pontuação
                    atualizarEstrelas();
                    // Só anima pontuação no modo jogar
                    if (modoAtual === "jogar") {
                        pontuacaoFinal.style.display = 'block';
                        animarPontuacaoFinal();
                    } else {
                        // Esconde a pontuação em modo autoplay
                        pontuacaoFinal.style.display = 'none';
                    }
                }

                document.getElementById('botoesMusica').style.display = 'none';
                document.getElementById('pontuacaoContainer').style.display = 'none';
                document.getElementById('pontuacaoTitle').style.display = 'none';
                document.getElementById('pontuacao').style.display = 'none';
                document.getElementById('gameMenu').style.display = 'none';
                telaInicial.style.display = 'none';

                console.log("Animação finalizada.");
            }, 1000);
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
    startTime = null;
    fimTimeout = null;
}

function atualizarPontuacao() {
    if (pontuacao) {
        pontuacao.textContent = `000${Math.floor(pontuation)}`;
    }
    // Atualizar progress bar de pontuação
    const pontuacaoBar = document.getElementById("pontuacaoBar");
    if (pontuacaoBar) {
        const percentual = (pontuation / PONTUACAO_MAXIMA) * 100;
        pontuacaoBar.style.width = percentual + "%";
    }
}

// Função para animar a pontuação final
function animarPontuacaoFinal() {
    const pontuacaoFinal = document.getElementById('pontuacaoFinal');
    const pontuacaoMaxima = Math.floor(pontuation);
    const duracao = 2000; // 2 segundos
    const inicio = performance.now();

    function animar(agora) {
        const decorrido = agora - inicio;
        const progresso = Math.min(decorrido / duracao, 1);
        const valorAtual = Math.floor(progresso * pontuacaoMaxima);

        pontuacaoFinal.textContent = valorAtual;

        if (progresso < 1) {
            requestAnimationFrame(animar);
        }
    }

    requestAnimationFrame(animar);
}

// Função para atualizar as estrelas baseado na pontuação
function atualizarEstrelas() {
    const estrelas = document.querySelector('.estrelas');
    const fraseMotivacao = document.getElementById('fraseMotivacao');
    
    // Não mostra estrelas e frase de motivação em modo autoplay
    if (modoAtual === "autoplay") {
        if (estrelas) estrelas.style.display = 'none';
        if (fraseMotivacao) fraseMotivacao.style.display = 'none';
        return;
    }
    
    // Mostra novamente no modo jogar
    if (estrelas) estrelas.style.display = 'block';
    if (fraseMotivacao) fraseMotivacao.style.display = 'block';
    
    const estrelasSpans = document.querySelectorAll('.estrelas span');
    const pontuacaoAtual = Math.floor(pontuation);
    
    // Determina quantas estrelas mostrar
    let quantidadeEstrelas = 1;
    let frase = "Bom trabalho!";
    
    if (pontuacaoAtual < 700) {
        quantidadeEstrelas = 1;
        frase = "Boa tentativa! Continue praticando!";
    } else if (pontuacaoAtual < 850) {
        quantidadeEstrelas = 2;
        frase = "Excelente desempenho! Você está quase lá!";
    } else {
        quantidadeEstrelas = 3;
        frase = "Perfeito! Você é um maestro!";
    }
    
    // Atualiza as estrelas: cheias (★) ou vazias (☆)
    estrelasSpans.forEach((estrela, index) => {
        if (index < quantidadeEstrelas) {
            estrela.textContent = '★'; // Estrela cheia
        } else {
            estrela.textContent = '☆'; // Estrela vazia
        }
    });
    
    // Atualiza a frase de motivação
    if (fraseMotivacao) {
        fraseMotivacao.textContent = frase;
    }
}

function showPointsAnimation(points) {
    const roundedPoints = Math.round(points);
    // Não mostra animação se os pontos arredondados forem zero
    if (roundedPoints === 0) return;

    const pontosDiv = document.createElement('div');
    pontosDiv.className = `floating-points ${roundedPoints >= 0 ? 'positive' : 'negative'}`;
    pontosDiv.textContent = roundedPoints >= 0 ? `+${roundedPoints}` : `${roundedPoints}`;

    // Posição aleatória na tela (parte superior)
    const randomX = Math.random() * (window.innerWidth - 200) + 100;
    const randomY = window.innerHeight * 0.3 + Math.random() * 200;

    pontosDiv.style.left = randomX + 'px';
    pontosDiv.style.top = randomY + 'px';

    document.body.appendChild(pontosDiv);

    // Remove o elemento após a animação
    setTimeout(() => {
        pontosDiv.remove();
    }, 2000);
}

function atualizarOpacidadeCubo(cube) {
    if (Array.isArray(cube.material)) {
        cube.material.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshBasicMaterial) {
                mat.opacity = cube.userData.opacity;
                mat.transparent = true;
                mat.needsUpdate = true;
            }
        });
    }
}

function reduzirOpacidadeCubo(cube) {
    cube.userData.opacity = Math.max(0, cube.userData.opacity - 1 / 3);
    atualizarOpacidadeCubo(cube);

    // Se opacidade chegou a 0, remover cubo
    if (cube.userData.opacity <= 0.05) {
        scene.remove(cube);
        const index = activeCubes.indexOf(cube);
        if (index !== -1) activeCubes.splice(index, 1);
    }
}

const canvas = renderer.domElement;
const resetar = document.getElementById("resetarButton");
const voltar = document.getElementById("voltarButton");
const pontuacao = document.getElementById("pontuacao");
const gameMenu = document.getElementById("gameMenu");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const autoplayButton = document.getElementById("autoplayButton");
const jogarButton = document.getElementById("jogarButton");

// Mapeamento de nomes de músicas
const nomesDasMusicas = {
    "littlestar": "Twinkle, Twinkle, Little Star - Mozart",
    "jinglebell": "Jingle Bells - James Lord Pierpont",
    "elvis": "Beethoven - Für Elise",
    "bethoven": "Bethoven - Ode á Alegria",
    "tchai": "Tchaikovsky - Lago dos Cisnes"
};

// Função para obter nome da música
function obterNomeDaMusica(musicaKey) {
    return nomesDasMusicas[musicaKey] || "Música";
}

// Ler música e modo do localStorage
const musicaArmazenada = localStorage.getItem("musica") || "elvis";
const modoArmazenado = localStorage.getItem("modo") || "autoplay";
modoMusica = localStorage.getItem("modoMusica") || "jogador";
musica = musicaArmazenada;

// Configurar multiplicador de tempo baseado no modo
// Modo aprendiz: 70% mais lento (multiplicador ~1.43)
// Modo jogador: velocidade original (multiplicador 1)
multiplicadorTempo = modoMusica === "aprendiz" ? 1.428571 : 1;

if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
}


voltar.addEventListener("click", () => {
    modoAtual = null;
    progressContainer.style.display = "none";
    pontuacao.style.display = "none";
    document.getElementById("pontuacaoContainer").style.display = "none";
    document.getElementById("gameMenu").style.display = "none";
    document.getElementById("nomeDaMusica").style.display = "none";
    document.getElementById("botoesMusica").style.display = "none";
    document.getElementById("botoesJogar").classList.remove("ativo");
    document.getElementById("botoesAutoplay").classList.remove("ativo");
    canvas.style.display = "none";
    window.location.href = "selector.html";
});


autoplayButton.addEventListener("click", () => {
    if (modoAtual === "autoplay") return;
    progressBar.style.width = "0%";
    progressContainer.style.display = "flex";
    // Não mostra pontuação no modo autoplay
    pontuacao.style.display = "none";
    document.getElementById("pontuacaoContainer").style.display = "none";
    document.getElementById("pontuacaoTitle").style.display = "none";
    document.getElementById("gameMenu").style.display = "flex";
    document.getElementById("nomeDaMusica").textContent = obterNomeDaMusica(musica);
    document.getElementById("nomeDaMusica").style.display = "block";
    document.getElementById("botoesMusica").style.display = "flex";

    // Atualizar estado ativo dos botões
    document.getElementById("botoesAutoplay").classList.add("ativo");
    document.getElementById("botoesJogar").classList.remove("ativo");

    canvas.style.display = "inline";

    modoAtual = "autoplay";
    pontuation = 0;
    atualizarPontuacao();
    resetarCena();
    if (musica === "bethoven") {
        carregarPartituraOdeToJoy();
    } else if (musica == "tchai") {
        carregarPartituraCisne();
    } else if(musica === "littlestar") {    
        carregarPartituraTwinkle(); 
    } else if(musica === "jinglebell") {
        carregarPartituraJingleBell();
    }
    else {
        carregarPartituraFurElise();
    }
    startTime = performance.now();
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
            animate();
        });
    } else {
        animate();
    }
});



jogarButton.addEventListener("click", () => {
    if (modoAtual === "jogar") return;
    document.getElementById("gameMenu").style.display = "flex";
    pontuacao.style.display = "block";
    document.getElementById("nomeDaMusica").textContent = obterNomeDaMusica(musica);
    document.getElementById("nomeDaMusica").style.display = "block";
    canvas.style.display = "inline";
    progressBar.style.width = "0%";
    progressContainer.style.display = "flex";
    document.getElementById("pontuacaoContainer").style.display = "block";
    document.getElementById("pontuacaoTitle").style.display = "block";
    document.getElementById("nomeDaMusica").textContent = obterNomeDaMusica(musica);
    document.getElementById("nomeDaMusica").style.display = "block";
    document.getElementById("botoesMusica").style.display = "flex";

    // Atualizar estado ativo dos botões
    document.getElementById("botoesJogar").classList.add("ativo");
    document.getElementById("botoesAutoplay").classList.remove("ativo");

    modoAtual = "jogar";
    pontuation = 0;
    atualizarPontuacao();
    resetarCena();
    if (musica === "bethoven") {
        carregarPartituraOdeToJoy();
    } else if (musica == "tchai") {
        carregarPartituraCisne();
    } else if(musica === "littlestar") {
        carregarPartituraTwinkle(); 
    } else if(musica === "jinglebell") {
        carregarPartituraJingleBell();
    }
    else {
        carregarPartituraFurElise();
    }
    startTime = performance.now();
    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    if (teclaListener) {
        document.removeEventListener("keydown", teclaListener);
    }

    teclaListener = (e) => {
        const note = keyMap[e.key];
        if (!note || !piano) return;

        piano.play(note);

        // Primeiro, procura o cubo mais próximo na área correta
        let acertou = false;
        let cuboMaisProximoNaArea = null;
        let menorDistanciaArea = Infinity;

        for (let i = 0; i < activeCubes.length; i++) {
            const cube = activeCubes[i];
            const cubeNote = keyMap[cube.userData.letter];
            const near = Math.abs(cube.position.z - plane2.position.z) < 1;

            if (!cube.userData.hit && cubeNote === note && near) {
                const distancia = Math.abs(cube.position.z - plane2.position.z);
                if (distancia < menorDistanciaArea) {
                    menorDistanciaArea = distancia;
                    cuboMaisProximoNaArea = cube;
                }
            }
        }

        if (cuboMaisProximoNaArea) {
            cuboMaisProximoNaArea.userData.hit = true;
            acertou = true;

            const letra = cuboMaisProximoNaArea.userData.letter;

            // Muda a cor e textura (igual ao autoplay)
            if (Array.isArray(cuboMaisProximoNaArea.material)) {
                cuboMaisProximoNaArea.material.forEach((mat, idx) => {
                    if (mat instanceof THREE.MeshStandardMaterial && mat.color) {
                        mat.color.set(0x51B79F);
                    }

                    if (idx === 2 && mat instanceof THREE.MeshBasicMaterial) {
                        const novaTextura = loadedTexturesAlt[letra];
                        if (novaTextura) {
                            mat.map = novaTextura;
                            mat.needsUpdate = true;
                        } else {
                            console.warn(`Textura alternativa não encontrada para: ${letra}`);
                        }
                    }
                });
            }

            // Remove o cubo após a mudança de cor e textura
            setTimeout(() => {
                pontuation = Math.min(PONTUACAO_MAXIMA, pontuation + pontosParaAcerto);
                showPointsAnimation(pontosParaAcerto);
                atualizarPontuacao();
                scene.remove(cuboMaisProximoNaArea);
                const index = activeCubes.indexOf(cuboMaisProximoNaArea);
                if (index !== -1) activeCubes.splice(index, 1);
            }, 400);
        }

        // Se não acertou na área correta, procura pelo cubo mais próximo com a mesma nota
        if (!acertou) {
            let cuboMaisProximo = null;
            let menorDistancia = Infinity;

            for (let i = 0; i < activeCubes.length; i++) {
                const cube = activeCubes[i];
                const cubeNote = keyMap[cube.userData.letter];

                if (!cube.userData.hit && cubeNote === note) {
                    const distancia = Math.abs(cube.position.z - plane2.position.z);
                    if (distancia < menorDistancia) {
                        menorDistancia = distancia;
                        cuboMaisProximo = cube;
                    }
                }
            }

            if (cuboMaisProximo) {
                reduzirOpacidadeCubo(cuboMaisProximo);
            } else {
                // Nenhum cubo tem essa nota - penalidade de -10% do valor de cada acerto
                const penalidade = pontosParaAcerto * 0.10;
                pontuation = Math.max(0, pontuation - penalidade);
                showPointsAnimation(-penalidade);
                atualizarPontuacao();
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
            animate();
        });
    } else {
        animate();
    }
});
resetar.addEventListener("click", () => {
    resetarCena();

    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    if (teclaListener) {
        document.removeEventListener("keydown", teclaListener);
        teclaListener = null;
    }

    if (musica === "bethoven") {
        carregarPartituraOdeToJoy();
    } else if (musica === "tchai") {
        carregarPartituraCisne();
    } else if (musica === "littlestar") {
        carregarPartituraTwinkle();
    } else if (musica === "jinglebell") {
        carregarPartituraJingleBell();
    } else {
        carregarPartituraFurElise();
    }

    startTime = performance.now();

    if (modoAtual === "jogar") {
        teclaListener = (e) => {
            const note = keyMap[e.key];
            if (!note || !piano) return;

            piano.play(note);

            // Primeiro, procura um cubo na área correta
            let acertou = false;
            for (let i = activeCubes.length - 1; i >= 0; i--) {
                const cube = activeCubes[i];
                const cubeNote = keyMap[cube.userData.letter];
                const near = Math.abs(cube.position.z - plane2.position.z) < 0.4;

                if (!cube.userData.hit && cubeNote === note && near) {
                    cube.userData.hit = true;
                    acertou = true;

                    const letra = cube.userData.letter;

                    // Muda a cor e textura (igual ao autoplay)
                    if (Array.isArray(cube.material)) {
                        cube.material.forEach((mat, idx) => {
                            if (mat instanceof THREE.MeshStandardMaterial && mat.color) {
                                mat.color.set(0x51B79F);
                            }

                            if (idx === 2 && mat instanceof THREE.MeshBasicMaterial) {
                                const novaTextura = loadedTexturesAlt[letra];
                                if (novaTextura) {
                                    mat.map = novaTextura;
                                    mat.needsUpdate = true;
                                } else {
                                    console.warn(`Textura alternativa não encontrada para: ${letra}`);
                                }
                            }
                        });
                    }

                    // Remove o cubo após a mudança de cor e textura
                    setTimeout(() => {
                        pontuation = Math.min(PONTUACAO_MAXIMA, pontuation + pontosParaAcerto);
                        showPointsAnimation(pontosParaAcerto);
                        atualizarPontuacao();
                        scene.remove(cube);
                        const index = activeCubes.indexOf(cube);
                        if (index !== -1) activeCubes.splice(index, 1);
                    }, 400);
                    break;
                }
            }

            // Se não acertou na área correta, procura pelo cubo mais próximo com a mesma nota
            if (!acertou) {
                let cuboMaisProximo = null;
                let menorDistancia = Infinity;

                for (let i = 0; i < activeCubes.length; i++) {
                    const cube = activeCubes[i];
                    const cubeNote = keyMap[cube.userData.letter];

                    if (!cube.userData.hit && cubeNote === note) {
                        const distancia = Math.abs(cube.position.z - plane2.position.z);
                        if (distancia < menorDistancia) {
                            menorDistancia = distancia;
                            cuboMaisProximo = cube;
                        }
                    }
                }

                if (cuboMaisProximo) {
                    reduzirOpacidadeCubo(cuboMaisProximo);
                } else {
                    // Nenhum cubo tem essa nota - penalidade de -10% do valor de cada acerto
                    const penalidade = pontosParaAcerto * 0.10;
                    pontuation = Math.max(0, pontuation - penalidade);
                    showPointsAnimation(-penalidade);
                    atualizarPontuacao();
                }
            }
        };
        document.addEventListener("keydown", teclaListener);
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

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







const pitchToKey = {};
for (const [key, pitch] of Object.entries(keyMap)) {
    pitchToKey[pitch] = key;
}

async function carregarPartituraFurElise() {
    const notes = notasJson;

    for (const note of notes) {
        const key = pitchToKey[note.pitch];
        if (!key) {
            console.warn(`⚠️ Sem mapeamento: ${note.pitch} (${note.start_ms}ms)`);
            continue;
        }
        addCubeToScene(key, note.start_ms, 0.05);
    }

    // Aplicar multiplicador de tempo para modo aprendiz
    aplicarMultiplicadorTempo();

    // Calcular pontuação por acerto
    totalNotas = spawnEvents.length;
    pontosParaAcerto = PONTUACAO_MAXIMA / totalNotas;

    duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000;
}

async function carregarPartituraCisne() {
    const notes = lagoJson;

    for (const note of notes) {
        const key = pitchToKey[note.pitch];
        if (!key) {
            console.warn(`⚠️ Sem mapeamento: ${note.pitch} (${note.start_ms}ms)`);
            continue;
        }
        addCubeToScene(key, note.start_ms, 0.05);
    }

    // Aplicar multiplicador de tempo para modo aprendiz
    aplicarMultiplicadorTempo();

    // Calcular pontuação por acerto
    totalNotas = spawnEvents.length;
    pontosParaAcerto = PONTUACAO_MAXIMA / totalNotas;

    duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000;
}

async function carregarPartituraTwinkle() {
    const notes = littlestar;

    for (const note of notes) {
        const key = pitchToKey[note.pitch];
        if (!key) {
            console.warn(`⚠️ Sem mapeamento: ${note.pitch} (${note.start_ms}ms)`);
            continue;
        }
        addCubeToScene(key, note.start_ms, 0.05);
    }

    // Aplicar multiplicador de tempo para modo aprendiz
    aplicarMultiplicadorTempo();

    totalNotas = spawnEvents.length;
    pontosParaAcerto = PONTUACAO_MAXIMA / totalNotas;
    duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000;
}

async function carregarPartituraOdeToJoy() {
    const notes = odeToJoy;     
        for (const note of notes) {
        const key = pitchToKey[note.pitch];
        if (!key) {
            console.warn(`⚠️ Sem mapeamento: ${note.pitch} (${note.start_ms}ms)`);
            continue;
        }
        addCubeToScene(key, note.start_ms, 0.05);
    }

    // Aplicar multiplicador de tempo para modo aprendiz
    aplicarMultiplicadorTempo();

    totalNotas = spawnEvents.length;
    pontosParaAcerto = PONTUACAO_MAXIMA / totalNotas;
    duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000;
}

async function carregarPartituraJingleBell() {
    const notes = jinglebell;

    for (const note of notes) {
        const key = pitchToKey[note.pitch];
        if (!key) {
            console.warn(`⚠️ Sem mapeamento: ${note.pitch} (${note.start_ms}ms)`);
            continue;
        }
        addCubeToScene(key, note.start_ms, 0.05);
    }

    // Aplicar multiplicador de tempo para modo aprendiz
    aplicarMultiplicadorTempo();

    totalNotas = spawnEvents.length;
    pontosParaAcerto = PONTUACAO_MAXIMA / totalNotas;
    duracaoTotal = Math.max(...spawnEvents.map(e => e.delay)) + 5000;
}