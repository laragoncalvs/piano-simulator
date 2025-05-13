import Soundfont from "soundfont-player";
import * as THREE from 'three';
import { keyMap } from "./keyMap.js";
import { allCubes } from "./cubes.js";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
document.body.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
});

Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((piano) => {
  document.addEventListener("keydown", (e) => {
      const note = keyMap[e.key];
      if (note) {
          piano.play(note);
      }
  });
});

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

let piano;
Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((loadedPiano) => {
    piano = loadedPiano;
});

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
    requestAnimationFrame(animate);
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
          const note = keyMap[cube.userData.letter];
          if (piano && note) piano.play(note);
          scene.remove(cube);
          activeCubes.splice(i, 1);
      
      }
      

     
    }

    renderer.render(scene, camera);
}

animate();

// SUA SEQUÊNCIA COMPLETA AQUI:

// ===================================
// Sequência musical (você já forneceu)
// Fur Elise - Ludwig van Beethoven (Introdução)
addCubeToScene("t", 0, 0.05);     // E5
addCubeToScene("r", 250, 0.05);   // D#5
addCubeToScene("t", 500, 0.05);   // E5
addCubeToScene("r", 750, 0.05);   // D#5
addCubeToScene("t", 1000, 0.05);  // E5
addCubeToScene("]", 1250, 0.05);  // B4
addCubeToScene("e", 1500, 0.05);  // D5
addCubeToScene("q", 1750, 0.05);  // C5
addCubeToScene("l", 2000, 0.05);  // A4

addCubeToScene("a", 2250, 0.05);  // C4
addCubeToScene("g", 2500, 0.05);  // E4
addCubeToScene("l", 2750, 0.05);  // A4

addCubeToScene("]", 3000, 0.05);  // B4
addCubeToScene("g", 3250, 0.05);  // E4
addCubeToScene("//", 3500, 0.05);  // G#4
addCubeToScene("l", 3750, 0.05);  // A4

addCubeToScene("a", 4000, 0.05);  // C4
addCubeToScene("g", 4250, 0.05);  // E4

addCubeToScene("t", 4500, 0.05);  // E5
addCubeToScene("r", 4750, 0.05);  // D#5
addCubeToScene("t", 5000, 0.05);  // E5
addCubeToScene("r", 5250, 0.05);  // D#5
addCubeToScene("t", 5500, 0.05);  // E5
addCubeToScene("]", 5750, 0.05);  // B4
addCubeToScene("e", 6000, 0.05);  // D5
addCubeToScene("q", 6250, 0.05);  // C5
addCubeToScene("l", 6500, 0.05);  // A4

addCubeToScene("a", 6750, 0.05);  // C4
addCubeToScene("g", 7000, 0.05);  // E4
addCubeToScene("l", 7250, 0.05);  // A4

addCubeToScene("]", 7500, 0.05);  // B4
addCubeToScene("g", 7750, 0.05);  // E4
addCubeToScene("q", 8000, 0.05);  // C5
addCubeToScene("l", 8250, 0.05);  // A4

addCubeToScene("t", 8500, 0.05);   // E5
addCubeToScene("r", 8750, 0.05);   // D#5
addCubeToScene("t", 9000, 0.05);   // E5
addCubeToScene("r", 9250, 0.05);   // D#5
addCubeToScene("t", 9500, 0.05);   // E5
addCubeToScene("]", 9750, 0.05);   // B4
addCubeToScene("e", 10000, 0.05);  // D5
addCubeToScene("q", 10250, 0.05);  // C5
addCubeToScene("l", 10500, 0.05);  // A4

addCubeToScene("a", 10750, 0.05);  // C4
addCubeToScene("g", 11000, 0.05);  // E4
addCubeToScene("l", 11250, 0.05);  // A4

addCubeToScene("]", 11500, 0.05);  // B4
addCubeToScene("g", 11750, 0.05);  // E4
addCubeToScene("q", 12000, 0.05);  // C5
addCubeToScene("l", 12250, 0.05);  // A4

addCubeToScene("t", 12500, 0.05);  // E5
addCubeToScene("r", 12750, 0.05);  // D#5
addCubeToScene("t", 13000, 0.05);  // E5
addCubeToScene("r", 13250, 0.05);  // D#5
addCubeToScene("t", 13500, 0.05);  // E5
addCubeToScene("]", 13750, 0.05);  // B4
addCubeToScene("e", 14000, 0.05);  // D5
addCubeToScene("q", 14250, 0.05);  // C5
addCubeToScene("l", 14500, 0.05);  // A4
