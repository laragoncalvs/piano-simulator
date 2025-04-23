import Soundfont from "soundfont-player";
import * as THREE from 'three';
import { keyMap } from "./keyMap";
import { allCubes } from './cubes.js';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 7, 2);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(13.5, 20);
const planeGeometry2 = new THREE.PlaneGeometry(13.5, 2);
const lineGeometry = new THREE.PlaneGeometry(0.04, 20);
const lineMaterial = new THREE.MeshStandardMaterial({ color: 0x606060, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x606060, side: THREE.DoubleSide, transparent: true, opacity: 0.2 });
const planeMaterial2 = new THREE.MeshStandardMaterial({ color: 0x47BC8D, side: THREE.DoubleSide, transparent: true, opacity: 1 });

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);

const lines = Array.from({ length: 11 }, (_, i) => new THREE.Mesh(lineGeometry, lineMaterial));
lines.forEach((line, i) => {
    line.rotation.x = -Math.PI / 2;
    line.position.x = [0, 1.1 , -1.1, 2.2, -2.2, 3.3, -3.3, 4.4, -4.4, 5.5, -5.5][i];
    line.position.z = -8;
    scene.add(line);
});

plane.rotation.x = -Math.PI / 2;
plane2.rotation.x = -Math.PI / 2;
scene.add(plane, plane2);
plane.position.z = -8;
plane2.position.z = 3;
scene.background = new THREE.Color(0x0B0912);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xF5F591, 4);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

const activeCubes = [];
const spawnEvents = [];

function addCubeToScene(letter, delay, speed) {
    spawnEvents.push({ letter, delay, speed, spawned: false });
}

function spawnCube(letter, speed) {
    const cube = allCubes[letter]?.clone();
    if (!cube) return;

    cube.userData = { speed };
    scene.add(cube);
    activeCubes.push(cube);
}

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = performance.now();

    spawnEvents.forEach(event => {
        if (elapsedTime > event.delay && !event.spawned) {
            spawnCube(event.letter, event.speed);
            event.spawned = true;
        }
    });

    activeCubes.forEach((cube, index) => {
        cube.position.z += cube.userData.speed;
        if (cube.position.z > 2) {
            scene.remove(cube);
            activeCubes.splice(index, 1);
        }
    });

    renderer.render(scene, camera);
}

animate();

Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((piano) => {
    document.addEventListener("keydown", (e) => {
        const note = keyMap[e.key];
        if (note) {
            piano.play(note);
        }
    });
});
//
//const sequence = [
//    { time: 0, notes: ["d", "g"] },
//    { time: 500, notes: ["e", "a"] },
//    { time: 1000, notes: ["g", "d"] },
//    { time: 1500, notes: ["d", "g"] },
//    { time: 2000, notes: ["e", "a"] },
//    { time: 2500, notes: ["g", "d"] },
//    { time: 3000, notes: ["f", "a"] },
//    { time: 3500, notes: ["g", "b"] }
//  ];
//  
//  sequence.forEach((event) => {
//    event.notes.forEach((note) => {
//      const mappedNote = keyMap[note];
//      addCubeToScene(note, event.time, 0.05);
//      console.log(`At ${event.time}ms: Play ${mappedNote}`);
//    });
//  });
//  
//  
// Exemplo de uso:
//addCubeToScene("a", 1000, 0.05);
//addCubeToScene("a", 1500, 0.05);
//addCubeToScene("d", 2000, 0.05);
//addCubeToScene("a", 3000, 0.05);
//addCubeToScene("h", 3500, 0.05);
//addCubeToScene("g", 4000, 0.05);
//
//addCubeToScene("a", 6000, 0.05);
//addCubeToScene("a", 6500, 0.05);
//addCubeToScene("d", 7000, 0.05);
//addCubeToScene("a", 7500, 0.05);
//addCubeToScene("k", 8000, 0.05);
//addCubeToScene("h", 9000, 0.05);
//addCubeToScene("h", 9500, 0.05);
//
//addCubeToScene("a", 11000, 0.05);
//addCubeToScene("a", 11500, 0.05);
//addCubeToScene("q", 12000, 0.05);
//addCubeToScene("l", 13000, 0.05);
//addCubeToScene("h", 13700, 0.05);
//addCubeToScene("g", 14400, 0.05);
//addCubeToScene("d", 15100, 0.05);
//
//addCubeToScene("ç", 16500, 0.05);
//addCubeToScene("ç", 17000, 0.05);
//addCubeToScene("l", 17500, 0.05);
//addCubeToScene("h", 18500, 0.05);
//addCubeToScene("k", 19500, 0.05);
//addCubeToScene("h", 20500, 0.05);
//addCubeToScene("h", 21000, 0.05);
addCubeToScene("8", 0, 0.05);    // A2 (baixo)
addCubeToScene("b", 250, 0.05);  // E3
addCubeToScene("z", 500, 0.05);  // C3
addCubeToScene("b", 750, 0.05);  // E3

// Segundo acorde (G)
addCubeToScene("7", 1000, 0.05); // G2 (baixo)
addCubeToScene("c", 1250, 0.05); // D3
addCubeToScene("0", 1500, 0.05); // B2
addCubeToScene("c", 1750, 0.05); // D3

// Terceiro acorde (F)
addCubeToScene("5", 2000, 0.05); // F2 (baixo)
addCubeToScene("z", 2250, 0.05); // C3
addCubeToScene("8", 2500, 0.05); // A2
addCubeToScene("z", 2750, 0.05); // C3

// Quarto acorde (E)
addCubeToScene("4", 3000, 0.05); // E2 (baixo)
addCubeToScene("0", 3250, 0.05); // B2
addCubeToScene("7", 3500, 0.05); // G2
addCubeToScene("0", 3750, 0.05); // B2

// Melodia principal - Primeira frase "City of stars, are you shining just for me?"
addCubeToScene("a", 4000, 0.05); // C4 (Dó)
addCubeToScene("d", 4250, 0.05); // D4 (Ré)
addCubeToScene("g", 4500, 0.05); // E4 (Mi)
addCubeToScene("g", 4750, 0.05); // E4 (Mi)
addCubeToScene("d", 5000, 0.05); // D4 (Ré)
addCubeToScene("a", 5250, 0.05); // C4 (Dó)
addCubeToScene("/", 5500, 0.05); // B3 (Si)
addCubeToScene(".", 5750, 0.05); // A3 (Lá)

// Continuação da melodia com acompanhamento
// Primeiro acorde (Am) com melodia
addCubeToScene("8", 6000, 0.05); // A2 (baixo)
addCubeToScene("a", 6000, 0.05); // C4 (melodia - simultâneo com o baixo)
addCubeToScene("b", 6250, 0.05); // E3
addCubeToScene("d", 6250, 0.05); // D4 (melodia)
addCubeToScene("z", 6500, 0.05); // C3
addCubeToScene("g", 6500, 0.05); // E4 (melodia)
addCubeToScene("b", 6750, 0.05); // E3
addCubeToScene("g", 6750, 0.05); // E4 (melodia)

// Segundo acorde (G) com melodia
addCubeToScene("7", 7000, 0.05); // G2 (baixo)
addCubeToScene("d", 7000, 0.05); // D4 (melodia - simultâneo com o baixo)
addCubeToScene("c", 7250, 0.05); // D3
addCubeToScene("a", 7250, 0.05); // C4 (melodia)
addCubeToScene("0", 7500, 0.05); // B2
addCubeToScene("/", 7500, 0.05); // B3 (melodia)
addCubeToScene("c", 7750, 0.05); // D3
addCubeToScene(".", 7750, 0.05); // A3 (melodia)

// Segunda frase da melodia "City of stars, there's so much that I can't see"
addCubeToScene("a", 8000, 0.05); // C4 (Dó)
addCubeToScene("d", 8250, 0.05); // D4 (Ré)
addCubeToScene("g", 8500, 0.05); // E4 (Mi)
addCubeToScene("k", 8750, 0.05); // G4 (Sol)
addCubeToScene("h", 9000, 0.05); // F4 (Fá)
addCubeToScene("g", 9250, 0.05); // E4 (Mi)
addCubeToScene("d", 9500, 0.05); // D4 (Ré)
addCubeToScene("a", 9750, 0.05); // C4 (Dó)

// Terceiro acorde (F) com melodia
addCubeToScene("5", 10000, 0.05); // F2 (baixo)
addCubeToScene("a", 10000, 0.05); // C4 (melodia - simultâneo com o baixo)
addCubeToScene("z", 10250, 0.05); // C3
addCubeToScene("/", 10250, 0.05); // B3 (melodia)
addCubeToScene("8", 10500, 0.05); // A2
addCubeToScene(".", 10500, 0.05); // A3 (melodia)
addCubeToScene("z", 10750, 0.05); // C3

// Quarto acorde (E) com melodia final da frase
addCubeToScene("4", 11000, 0.05); // E2 (baixo)
addCubeToScene("a", 11000, 0.05); // C4 (melodia - simultâneo com o baixo)
addCubeToScene("0", 11250, 0.05); // B2
addCubeToScene("/", 11250, 0.05); // B3 (melodia)
addCubeToScene("7", 11500, 0.05); // G2
addCubeToScene(".", 11500, 0.05); // A3 (melodia)
addCubeToScene("0", 11750, 0.05); // B2

// Ponte - "Who knows? Is this the start of something wonderful and new?"
addCubeToScene("d", 12000, 0.05); // D4 (Ré)
addCubeToScene("g", 12250, 0.05); // E4 (Mi)
addCubeToScene("k", 12500, 0.05); // G4 (Sol)
addCubeToScene("l", 12750, 0.05); // A4 (Lá)
addCubeToScene("k", 13000, 0.05); // G4 (Sol)
addCubeToScene("g", 13250, 0.05); // E4 (Mi)
addCubeToScene("d", 13500, 0.05); // D4 (Ré)
addCubeToScene("a", 13750, 0.05); // C4 (Dó)

// Retorno à melodia principal com variação - "Or one more dream that I cannot make true"
addCubeToScene("a", 14000, 0.05); // C4 (Dó)
addCubeToScene("d", 14250, 0.05); // D4 (Ré)
addCubeToScene("g", 14500, 0.05); // E4 (Mi)
addCubeToScene("g", 14750, 0.05); // E4 (Mi)
addCubeToScene("d", 15000, 0.05); // D4 (Ré)
addCubeToScene("a", 15250, 0.05); // C4 (Dó)
addCubeToScene("/", 15500, 0.05); // B3 (Si)
addCubeToScene(".", 15750, 0.05); // A3 (Lá)

// Finalização - Arpejos finais com notas sustentadas
// Primeiro acorde (Am)
addCubeToScene("8", 16000, 0.05);    // A2 (baixo)
addCubeToScene("b", 16250, 0.05);    // E3
addCubeToScene("z", 16500, 0.05);    // C3
addCubeToScene("b", 16750, 0.05);    // E3
addCubeToScene("a", 17000, 0.05);    // C4 (nota final da melodia)

// Acorde final (Am) sustentado
addCubeToScene("8", 17500, 0.05);    // A2 (baixo)
addCubeToScene("z", 17500, 0.05);    // C3 (simultâneo)
addCubeToScene("b", 17500, 0.05);    // E3 (simultâneo)
addCubeToScene("a", 17500, 0.05);    // C4 (simultâneo - nota final)
