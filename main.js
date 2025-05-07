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

// Seu keyMap (certifique-se de que esteja acessível neste escopo)

  // Sua função addCubeToScene (para o visual)
  // function addCubeToScene(letter, delay, speed) {
  //    spawnEvents.push({ letter, delay, speed, spawned: false });
  // }
  // Certifique-se de que ela esteja definida e funcionando no seu projeto.
  
  const cityOfStarsSequence = [
    {
      "key": "t",
      "time": 0,
      "duration": 0.05
    },
    {
      "key": "r",
      "time": 400,
      "duration": 0.05
    },
    {
      "key": "t",
      "time": 600,
      "duration": 0.05
    },
    {
      "key": "r",
      "time": 1000,
      "duration": 0.05
    },
    {
      "key": "t",
      "time": 1200,
      "duration": 0.05
    },
    {
      "key": "]",
      "time": 1600,
      "duration": 0.05
    },
    {
      "key": "e",
      "time": 1800,
      "duration": 0.05
    },
    {
      "key": "q",
      "time": 2200,
      "duration": 0.05
    },
    {
      "key": "8",
      "time": 600,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 800,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 1000,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 1200,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 1400,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 1600,
      "duration": 0.05
    },
    {
      "key": "l",
      "time": 2400,
      "duration": 0.05
    },
    {
      "key": "4",
      "time": 2400,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 2600,
      "duration": 0.05
    },
    {
      "key": "0",
      "time": 2800,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 3000,
      "duration": 0.05
    },
    {
      "key": "0",
      "time": 3200,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 3400,
      "duration": 0.05
    },
    {
      "key": "a",
      "time": 3600,
      "duration": 0.05
    },
    {
      "key": "g",
      "time": 4000,
      "duration": 0.05
    },
    {
      "key": "l",
      "time": 4200,
      "duration": 0.05
    },
    {
      "key": "]",
      "time": 4600,
      "duration": 0.05
    },
    {
      "key": "8",
      "time": 3600,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 3800,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 4000,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 4200,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 4400,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 4600,
      "duration": 0.05
    },
    {
      "key": "g",
      "time": 4800,
      "duration": 0.05
    },
    {
      "key": "z",
      "time": 4800,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 5000,
      "duration": 0.05
    },
    {
      "key": ",",
      "time": 5200,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 5400,
      "duration": 0.05
    },
    {
      "key": ",",
      "time": 5600,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 5800,
      "duration": 0.05
    },
    {
      "key": "l",
      "time": 6000,
      "duration": 0.05
    },
    {
      "key": "t",
      "time": 6200,
      "duration": 0.05
    },
    {
      "key": "r",
      "time": 6600,
      "duration": 0.05
    },
    {
      "key": "t",
      "time": 6800,
      "duration": 0.05
    },
    {
      "key": "]",
      "time": 7200,
      "duration": 0.05
    },
    {
      "key": "e",
      "time": 7400,
      "duration": 0.05
    },
    {
      "key": "q",
      "time": 7800,
      "duration": 0.05
    },
    {
      "key": "8",
      "time": 6200,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 6400,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 6600,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 6800,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 7000,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 7200,
      "duration": 0.05
    },
    {
      "key": "l",
      "time": 8000,
      "duration": 0.05
    },
    {
      "key": "4",
      "time": 8000,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 8200,
      "duration": 0.05
    },
    {
      "key": "0",
      "time": 8400,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 8600,
      "duration": 0.05
    },
    {
      "key": "0",
      "time": 8800,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 9000,
      "duration": 0.05
    },
    {
      "key": "a",
      "time": 9200,
      "duration": 0.05
    },
    {
      "key": "g",
      "time": 9600,
      "duration": 0.05
    },
    {
      "key": "l",
      "time": 9800,
      "duration": 0.05
    },
    {
      "key": "]",
      "time": 10200,
      "duration": 0.05
    },
    {
      "key": "8",
      "time": 9200,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 9400,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 9600,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 9800,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 10000,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 10200,
      "duration": 0.05
    },
    {
      "key": "g",
      "time": 10400,
      "duration": 0.05
    },
    {
      "key": "k",
      "time": 10800,
      "duration": 0.05
    },
    {
      "key": "]",
      "time": 11000,
      "duration": 0.05
    },
    {
      "key": "q",
      "time": 11400,
      "duration": 0.05
    },
    {
      "key": "4",
      "time": 10400,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 10600,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 10800,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 11000,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 11200,
      "duration": 0.05
    },
    {
      "key": "7",
      "time": 11400,
      "duration": 0.05
    },
    {
      "key": "e",
      "time": 11600,
      "duration": 0.05
    },
    {
      "key": "t",
      "time": 11800,
      "duration": 0.05
    },
    {
      "key": "r",
      "time": 12400,
      "duration": 0.05
    },
    {
      "key": "t",
      "time": 12600,
      "duration": 0.05
    },
    {
      "key": "8",
      "time": 11800,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 12000,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 12200,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 12400,
      "duration": 0.05
    },
    {
      "key": ".",
      "time": 12600,
      "duration": 0.05
    },
    {
      "key": "b",
      "time": 12800,
      "duration": 0.05
    }
  ];  
  
  // Supondo que 'audioContext' já esteja definido no seu projeto
  // e Soundfont já esteja carregado/importado.
  Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((piano) => {
      // O código do keydown original para referência (não é usado pelo autoplay)
      /*
      document.addEventListener("keydown", (e) => {
          const note = keyMap[e.key];
          if (note) {
              piano.play(note);
          }
      });
      */
  
      const autoplayButton = document.getElementById("autoplayButton");
  
      if (autoplayButton) {
          autoplayButton.addEventListener("click", function() {
              console.log("Botão Autoplay clicado");
              this.disabled = true;
              let accumulatedTime = 0;
  
              cityOfStarsSequence.forEach(noteInSequence => {
                  setTimeout(() => {
                      // Para o visual (sua função)
                      addCubeToScene(noteInSequence.key, noteInSequence.time, noteInSequence.duration);
                      
                      // Para o som
                      const notaMusicalParaTocar = keyMap[noteInSequence.key];
                      if (notaMusicalParaTocar) {
                          piano.play(notaMusicalParaTocar);
                          console.log(`Tocando som: ${notaMusicalParaTocar} para tecla ${noteInSequence.key} no tempo ${noteInSequence.time}`);
                      } else {
                          console.warn(`Tecla ${noteInSequence.key} não encontrada no keyMap para tocar som.`);
                      }
  
                  }, noteInSequence.time);
                  
                  if (noteInSequence.time > accumulatedTime) {
                      accumulatedTime = noteInSequence.time;
                  }
              });
  
              setTimeout(() => {
                  this.disabled = false;
                  console.log("Reprodução concluída, botão reabilitado.");
              }, accumulatedTime + 500);
          });
      } else {
          console.error("Botão com id 'autoplayButton' não encontrado no DOM.");
      }
  }).catch(function(err){
      console.error("Erro ao carregar o instrumento Soundfont:", err);
  });
  
  