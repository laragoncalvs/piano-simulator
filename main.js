import Soundfont from "soundfont-player";
import * as THREE from 'three';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const keyMap = {
  a: "C4",
  s: "C#4",
  d: "D4",
  f: "D#4",
  g: 'E4',
  h: 'F4',
  j: 'F#4',
  k: 'G4',
  l: 'A4',
  ç: 'A#4',
  "]": 'B4',
  "Enter": 'B#4',
  q: "C5",
  w: "C#5",
  e: "D5",
  r: "D#5",
  t: 'E5',
  y: 'F5',
  u: 'F#5',
  i: 'G5',
  o: 'A5',
  p: 'A#5',
  "=": 'B5',
  "[": 'B#5',
  z: "C3",
  x: "C#3",
  c: "D3",
  v: "D#3",
  b: 'E3',
  n: 'F3',
  m: 'F#3',
  ",": 'G3',
  ".": 'A3',
  ";": 'A#3',
  "/": 'B3',
  "Shift": 'B#3',
  "'": "C2",
  1: "C#2",
  2: "D2",
  3: "D#2",
  4: 'E2',
  5: 'F2',
  6: 'F#2',
  7: 'G2',
  8: 'A2',
  9: 'A#2',
  0: 'B2',
  "-": 'B#2',
  
};


const scene = new THREE.Scene();

// Configuração da câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 7);
camera.lookAt(0, 0, 0);

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criar o plano (chão)
const planeGeometry = new THREE.PlaneGeometry(10, 20);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x606060, side: THREE.DoubleSide, transparent: true,  // Permite que a opacidade funcione
  opacity: 0.2    });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;  // Deixar o plano horizontal
scene.add(plane);


// Criar o cubo
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x800080 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = 0.5;  // Posicionar acima do plano
scene.add(cube);

// Luzes
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// Animação para deslizar o cubo
let direction = 1;
function animate() {
    requestAnimationFrame(animate);

    // Movimentação do cubo de um lado para o outro
    cube.position.z += 0.03 * direction;

    
    renderer.render(scene, camera);
}

animate();

// Ajustar tela quando redimensionada

Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((piano) => {
  document.addEventListener("keydown", (e) => {
    let key = e.key;

    const note = keyMap[key];
    if (note) {
      piano.play(note);
    }
  });
});
