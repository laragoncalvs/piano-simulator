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

const sequence = [
    { time: 0, notes: ["d", "g"] },
    { time: 500, notes: ["e", "a"] },
    { time: 1000, notes: ["g", "d"] },
    { time: 1500, notes: ["d", "g"] },
    { time: 2000, notes: ["e", "a"] },
    { time: 2500, notes: ["g", "d"] },
    { time: 3000, notes: ["f", "a"] },
    { time: 3500, notes: ["g", "b"] }
  ];
  
  sequence.forEach((event) => {
    event.notes.forEach((note) => {
      const mappedNote = keyMap[note];
      addCubeToScene(note, event.time, 0.05);
      console.log(`At ${event.time}ms: Play ${mappedNote}`);
    });
  });
  
  
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