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

//Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((piano) => {
    document.addEventListener("keydown", (e) => {
        const note = keyMap[e.key];
        if (note) {
            piano.play(note);
        }
    });
//});
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

addCubeToScene("g", 0, 0.05);     // E4
addCubeToScene("f", 250, 0.05);   // D#4
addCubeToScene("g", 500, 0.05);   // E4
addCubeToScene("f", 750, 0.05);   // D#4
addCubeToScene("g", 1000, 0.05);  // E4
addCubeToScene("]", 1250, 0.05);  // B4
addCubeToScene("d", 1500, 0.05);  // D4
addCubeToScene("a", 1750, 0.05);  // C4
addCubeToScene("l", 2000, 0.05);  // A4

// Continuação do tema A
addCubeToScene("z", 2250, 0.05);  // C3 (baixo)
addCubeToScene("g", 2250, 0.05);  // E4 (simultâneo com o baixo)
addCubeToScene("l", 2500, 0.05);  // A4
addCubeToScene("]", 2750, 0.05);  // B4

// Repetição do motivo principal
addCubeToScene("g", 3000, 0.05);  // E4
addCubeToScene("f", 3250, 0.05);  // D#4
addCubeToScene("g", 3500, 0.05);  // E4
addCubeToScene("f", 3750, 0.05);  // D#4
addCubeToScene("g", 4000, 0.05);  // E4
addCubeToScene("]", 4250, 0.05);  // B4
addCubeToScene("d", 4500, 0.05);  // D4
addCubeToScene("a", 4750, 0.05);  // C4
addCubeToScene("l", 5000, 0.05);  // A4

// Continuação
addCubeToScene("z", 5250, 0.05);  // C3 (baixo)
addCubeToScene("g", 5250, 0.05);  // E4 (simultâneo com o baixo)
addCubeToScene("l", 5500, 0.05);  // A4
addCubeToScene("]", 5750, 0.05);  // B4

// Transição para a parte B
addCubeToScene("q", 6000, 0.05);  // C5
addCubeToScene("g", 6250, 0.05);  // E4
addCubeToScene("l", 6500, 0.05);  // A4
addCubeToScene("g", 6750, 0.05);  // E4

// Parte B - Desenvolvimento
addCubeToScene("]", 7000, 0.05);  // B4
addCubeToScene("g", 7250, 0.05);  // E4
addCubeToScene("k", 7500, 0.05);  // G4
addCubeToScene("g", 7750, 0.05);  // E4

// Continuação da parte B
addCubeToScene("d", 8000, 0.05);  // D4
addCubeToScene("g", 8250, 0.05);  // E4
addCubeToScene("l", 8500, 0.05);  // A4
addCubeToScene("g", 8750, 0.05);  // E4

// Mais desenvolvimento
addCubeToScene("]", 9000, 0.05);  // B4
addCubeToScene("g", 9250, 0.05);  // E4
addCubeToScene("q", 9500, 0.05);  // C5
addCubeToScene("g", 9750, 0.05);  // E4

// Retorno ao tema A - Repetição do motivo principal
addCubeToScene("g", 10000, 0.05); // E4
addCubeToScene("f", 10250, 0.05); // D#4
addCubeToScene("g", 10500, 0.05); // E4
addCubeToScene("f", 10750, 0.05); // D#4
addCubeToScene("g", 11000, 0.05); // E4
addCubeToScene("]", 11250, 0.05); // B4
addCubeToScene("d", 11500, 0.05); // D4
addCubeToScene("a", 11750, 0.05); // C4
addCubeToScene("l", 12000, 0.05); // A4

// Continuação do tema A
addCubeToScene("z", 12250, 0.05); // C3 (baixo)
addCubeToScene("g", 12250, 0.05); // E4 (simultâneo com o baixo)
addCubeToScene("l", 12500, 0.05); // A4
addCubeToScene("]", 12750, 0.05); // B4

// Parte C - Seção mais rápida
addCubeToScene("g", 13000, 0.05); // E4
addCubeToScene("l", 13125, 0.05); // A4
addCubeToScene("q", 13250, 0.05); // C5
addCubeToScene("g", 13375, 0.05); // E4
addCubeToScene("l", 13500, 0.05); // A4
addCubeToScene("q", 13625, 0.05); // C5
addCubeToScene("t", 13750, 0.05); // E5
addCubeToScene("l", 13875, 0.05); // A4

// Continuação da parte C
addCubeToScene("g", 14000, 0.05); // E4
addCubeToScene("l", 14125, 0.05); // A4
addCubeToScene("q", 14250, 0.05); // C5
addCubeToScene("g", 14375, 0.05); // E4
addCubeToScene("l", 14500, 0.05); // A4
addCubeToScene("q", 14625, 0.05); // C5
addCubeToScene("t", 14750, 0.05); // E5
addCubeToScene("l", 14875, 0.05); // A4

// Transição de volta para o tema A
addCubeToScene("f", 15000, 0.05); // D#4
addCubeToScene("g", 15250, 0.05); // E4
addCubeToScene("f", 15500, 0.05); // D#4
addCubeToScene("g", 15750, 0.05); // E4

// Repetição final do tema A
addCubeToScene("g", 16000, 0.05); // E4
addCubeToScene("f", 16250, 0.05); // D#4
addCubeToScene("g", 16500, 0.05); // E4
addCubeToScene("f", 16750, 0.05); // D#4
addCubeToScene("g", 17000, 0.05); // E4
addCubeToScene("]", 17250, 0.05); // B4
addCubeToScene("d", 17500, 0.05); // D4
addCubeToScene("a", 17750, 0.05); // C4
addCubeToScene("l", 18000, 0.05); // A4

// Finalização
addCubeToScene("z", 18250, 0.05); // C3 (baixo)
addCubeToScene("g", 18250, 0.05); // E4 (simultâneo com o baixo)
addCubeToScene("l", 18500, 0.05); // A4
addCubeToScene("]", 18750, 0.05); // B4
addCubeToScene("g", 19000, 0.05); // E4
addCubeToScene("l", 19250, 0.05); // A4
addCubeToScene("]", 19500, 0.05); // B4
addCubeToScene("q", 19750, 0.05); // C5
addCubeToScene("l", 20000, 0.05); // A4 (nota final)
