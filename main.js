import Soundfont from "soundfont-player";
import * as THREE from 'three';
import { keyMap } from "./keyMap";
import { cubes } from './cubes.js';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 6);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const planeGeometry = new THREE.PlaneGeometry(10, 20);
const planeGeometry2 = new THREE.PlaneGeometry(10, 2);
const lineGeometry = new THREE.PlaneGeometry(0.04, 20);
const lineMaterial = new THREE.MeshStandardMaterial({ color: 0x606060, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x606060, side: THREE.DoubleSide, transparent: true, opacity: 0.2 });
const planeMaterial2 = new THREE.MeshStandardMaterial({ color: 0x47BC8D, side: THREE.DoubleSide, transparent: true, opacity: 1 });

const plane = new THREE.Mesh(planeGeometry, planeMaterial);
const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);

const lines = Array.from({ length: 8 }, (_, i) => new THREE.Mesh(lineGeometry, lineMaterial));
lines.forEach((line, i) => {
    line.rotation.x = -Math.PI / 2;
    line.position.x = [0.6, -0.6, 1.6, -1.6, 2.7, -2.7, 3.8, -3.8][i];
    line.position.z = -10;
    scene.add(line);
});

plane.rotation.x = -Math.PI / 2;
plane2.rotation.x = -Math.PI / 2;
scene.add(plane, plane2);
plane.position.z = -10;
plane2.position.z = 1;
scene.background = new THREE.Color(0x0B0912);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xF5F591, 2.7);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const activeCubes = [];
const startTime = performance.now();
const spawnDelays = Object.keys(cubes).map((_, i) => i * 1000);

function spawnCube(letter) {
    const cube = cubes[letter];
    if (!cube) return;
    if (Array.isArray(cube.material)) {
        cube.material.forEach(material => (material.opacity = 0));
    } else {
        cube.material.opacity = 0;
    }

    scene.add(cube);
    activeCubes.push(cube);
}
function disappear(cube) {
  if (cube.position.z > 1.5) {
      let fullyTransparent = true; 

      if (Array.isArray(cube.material)) {
          cube.material.forEach(material => {
              material.transparent = true; 
              material.opacity = Math.max(0, material.opacity - 0.05);

              if (material.opacity > 0) {
                  fullyTransparent = false; 
              }
          });
      } else {
          cube.material.transparent = true;
          cube.material.opacity = Math.max(0, cube.material.opacity - 0.05);
          fullyTransparent = cube.material.opacity === 0;
      }

      if (fullyTransparent) {
          scene.remove(cube); 
          activeCubes.splice(activeCubes.indexOf(cube), 1); 
      }
  }
}


function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = performance.now() - startTime;

    Object.keys(cubes).forEach((letter, index) => {
        if (elapsedTime > spawnDelays[index] && !activeCubes.includes(cubes[letter])) {
            spawnCube(letter);
        }
    });

    activeCubes.forEach(cube => {
        cube.position.z += 0.04;

        if (Array.isArray(cube.material)) {
            cube.material.forEach(material => material.opacity = Math.min(1, material.opacity + 0.02));
        } else {
            cube.material.opacity = Math.min(1, cube.material.opacity + 0.02);
        }

        disappear(cube);
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
