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


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0B0912);

const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 7, 2);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(13.5, 20);
const planeGeometry2 = new THREE.PlaneGeometry(13.5, 2);

const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x606060,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.2
});

const planeMaterial2 = new THREE.MeshStandardMaterial({
    color: 0x47BC8D,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1
});

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);

plane.rotation.x = -Math.PI / 2;
plane2.rotation.x = -Math.PI / 2;
plane.position.z = -8;
plane2.position.z = 3;

scene.add(plane, plane2);

const lineGeometry = new THREE.PlaneGeometry(0.04, 20);
const lineMaterial = new THREE.MeshStandardMaterial({
    color: 0x606060,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5
});

const lines = Array.from({ length: 11 }, (_, i) => new THREE.Mesh(lineGeometry, lineMaterial));
lines.forEach((line, i) => {
    line.rotation.x = -Math.PI / 2;
    line.position.x = [0, 1.1 , -1.1, 2.2, -2.2, 3.3, -3.3, 4.4, -4.4, 5.5, -5.5][i];
    line.position.z = -8;
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
    const elapsedTime = performance.now();

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
}


const autoplayButton = document.getElementById("autoplayButton");
const jogarButton = document.getElementById("jogarButton");
if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
}

autoplayButton.addEventListener("click", () => {
    if (modoAtual === "autoplay") return;

    modoAtual = "autoplay";
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

    modoAtual = "jogar";
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
            animate(); // ✅ chama animate depois de carregar
        });
    } else {
        animate(); // ✅ chama animate se já estiver carregado
    }
});

addCubeToScene("g", 2105, 0.05);
addCubeToScene("g", 2519, 0.05);
addCubeToScene("h", 2927, 0.05);
addCubeToScene("k", 3403, 0.05);
addCubeToScene("k", 3913, 0.05);
addCubeToScene("h", 4472, 0.05);
addCubeToScene("g", 4927, 0.05);
addCubeToScene("d", 5409, 0.05);
addCubeToScene("a", 5912, 0.05);
addCubeToScene("a", 6392, 0.05);
addCubeToScene("d", 6856, 0.05);
addCubeToScene("g", 7345, 0.05);
addCubeToScene("g", 7863, 0.05);
addCubeToScene("d", 8648, 0.05);
addCubeToScene("d", 8904, 0.05);
addCubeToScene("g", 9793, 0.05);
addCubeToScene("g", 10327, 0.05);
addCubeToScene("h", 10792, 0.05);
addCubeToScene("k", 11321, 0.05);
addCubeToScene("k", 11809, 0.05);
addCubeToScene("h", 12256, 0.05);
addCubeToScene("g", 12809, 0.05);
addCubeToScene("d", 13281, 0.05);
addCubeToScene("a", 13728, 0.05);
addCubeToScene("a", 14192, 0.05);
addCubeToScene("d", 14688, 0.05);
addCubeToScene("g", 15170, 0.05);
addCubeToScene("d", 15672, 0.05);
addCubeToScene("a", 16432, 0.05);
addCubeToScene("a", 16720, 0.05);
addCubeToScene("d", 17696, 0.05);
addCubeToScene("g", 18673, 0.05);
addCubeToScene("a", 19880, 0.05);
addCubeToScene("d", 20232, 0.05);
addCubeToScene("g", 20537, 0.05);
addCubeToScene("h", 20880, 0.05);
addCubeToScene("g", 21311, 0.05);
addCubeToScene("a", 21849, 0.05);
addCubeToScene("d", 22473, 0.05);
addCubeToScene("g", 23095, 0.05);
addCubeToScene("h", 23417, 0.05);
addCubeToScene("g", 23688, 0.05);
addCubeToScene("d", 24280, 0.05);
addCubeToScene("a", 24872, 0.05);
addCubeToScene("d", 25439, 0.05);
addCubeToScene("a", 26072, 0.05);
