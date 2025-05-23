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



addCubeToScene("9", 20, 0.05);
addCubeToScene("g", 300, 0.05);
addCubeToScene("t", 5250, 0.05);
addCubeToScene("g", 5430, 0.05);
addCubeToScene("]", 5670, 0.05);
addCubeToScene("o", 6180, 0.05);
addCubeToScene("=", 6710, 0.05);
addCubeToScene("g", 6870, 0.05);
addCubeToScene("o", 7830, 0.05);
addCubeToScene("]", 7960, 0.05);
addCubeToScene("i", 8500, 0.05);
addCubeToScene("d", 9100, 0.05);
addCubeToScene("]", 10050, 0.05);
addCubeToScene("d", 11120, 0.05);
addCubeToScene("]", 12070, 0.05);
addCubeToScene("d", 12210, 0.05);
addCubeToScene("k", 12380, 0.05);
addCubeToScene("d", 12520, 0.05);
addCubeToScene("g", 13310, 0.05);
addCubeToScene("k", 14370, 0.05);
addCubeToScene("o", 14930, 0.05);
addCubeToScene("o", 15280, 0.05);
addCubeToScene("=", 15460, 0.05);
addCubeToScene("g", 15630, 0.05);
addCubeToScene("o", 16530, 0.05);
addCubeToScene("k", 16740, 0.05);
addCubeToScene("i", 17210, 0.05);
addCubeToScene("=", 17650, 0.05);
addCubeToScene("d", 17790, 0.05);
addCubeToScene("]", 18760, 0.05);
addCubeToScene("d", 19830, 0.05);
addCubeToScene("]", 20740, 0.05);
addCubeToScene("=", 20920, 0.05);
addCubeToScene("k", 21200, 0.05);
addCubeToScene("]", 21390, 0.05);
addCubeToScene("o", 22010, 0.05);
addCubeToScene("g", 22150, 0.05);
addCubeToScene("l", 23170, 0.05);
addCubeToScene("i", 23610, 0.05);
addCubeToScene("d", 24170, 0.05);
addCubeToScene("j", 25290, 0.05);
addCubeToScene("o", 25800, 0.05);
addCubeToScene("g", 26350, 0.05);
addCubeToScene("u", 26700, 0.05);
addCubeToScene("k", 27450, 0.05);
addCubeToScene("k", 27630, 0.05);
addCubeToScene("]", 27840, 0.05);
addCubeToScene("g", 28540, 0.05);
addCubeToScene("k", 29720, 0.05);
addCubeToScene("k", 29910, 0.05);
addCubeToScene("i", 30160, 0.05);
addCubeToScene("g", 30860, 0.05);
addCubeToScene("q", 31810, 0.05);
addCubeToScene("=", 32300, 0.05);
addCubeToScene("d", 32930, 0.05);
addCubeToScene("j", 34110, 0.05);
addCubeToScene("i", 34530, 0.05);
addCubeToScene("g", 35110, 0.05);
addCubeToScene("]", 36180, 0.05);
addCubeToScene("g", 37290, 0.05);
addCubeToScene("]", 38200, 0.05);
addCubeToScene("k", 38450, 0.05);
addCubeToScene("a", 39520, 0.05);
addCubeToScene("a", 40750, 0.05);
addCubeToScene("k", 41010, 0.05);
addCubeToScene("a", 41310, 0.05);
addCubeToScene("c", 42240, 0.05);
addCubeToScene("c", 43310, 0.05);
addCubeToScene("d", 43560, 0.05);
addCubeToScene("g", 43860, 0.05);
addCubeToScene("b", 44090, 0.05);
addCubeToScene("k", 45160, 0.05);
addCubeToScene("m", 45740, 0.05);
addCubeToScene("g", 46020, 0.05);
addCubeToScene(",", 46670, 0.05);
addCubeToScene("e", 46830, 0.05);
addCubeToScene("k", 47140, 0.05);
addCubeToScene("k", 47280, 0.05);
addCubeToScene("i", 47740, 0.05);
addCubeToScene("l", 48000, 0.05);
addCubeToScene("a", 48160, 0.05);
addCubeToScene("a", 49670, 0.05);
addCubeToScene("a", 49850, 0.05);
addCubeToScene("e", 49990, 0.05);
addCubeToScene("d", 50360, 0.05);
addCubeToScene("m", 50710, 0.05);
addCubeToScene("j", 51500, 0.05);
addCubeToScene(",", 51870, 0.05);
addCubeToScene("l", 52240, 0.05);
addCubeToScene("g", 52590, 0.05);
addCubeToScene(",", 52830, 0.05);
addCubeToScene("m", 52960, 0.05);
addCubeToScene("=", 53080, 0.05);
addCubeToScene("b", 53290, 0.05);
addCubeToScene("b", 53450, 0.05);
addCubeToScene("]", 53750, 0.05);
addCubeToScene("b", 54100, 0.05);
addCubeToScene("b", 54310, 0.05);
addCubeToScene("]", 55910, 0.05);
addCubeToScene("]", 56220, 0.05);
addCubeToScene("]", 56400, 0.05);
addCubeToScene("b", 56680, 0.05);
addCubeToScene("a", 56980, 0.05);
addCubeToScene("q", 57490, 0.05);
addCubeToScene("e", 57700, 0.05);
addCubeToScene("k", 58070, 0.05);
addCubeToScene("=", 58510, 0.05);
addCubeToScene(",", 58980, 0.05);
addCubeToScene("o", 59120, 0.05);
addCubeToScene("l", 59330, 0.05);
addCubeToScene("j", 60230, 0.05);
addCubeToScene("j", 60700, 0.05);
addCubeToScene("t", 61020, 0.05);
addCubeToScene("l", 61140, 0.05);
addCubeToScene("g", 61280, 0.05);
addCubeToScene("/", 61530, 0.05);
addCubeToScene("]", 62420, 0.05);
addCubeToScene(",", 62740, 0.05);
addCubeToScene("m", 63090, 0.05);
addCubeToScene("g", 63460, 0.05);
addCubeToScene("b", 63650, 0.05);
addCubeToScene("g", 64480, 0.05);
addCubeToScene("k", 64640, 0.05);
addCubeToScene("k", 64810, 0.05);
addCubeToScene("i", 65160, 0.05);
addCubeToScene("a", 65710, 0.05);
addCubeToScene(",", 66110, 0.05);
addCubeToScene(",", 66690, 0.05);
addCubeToScene("m", 66970, 0.05);
addCubeToScene("b", 67360, 0.05);
addCubeToScene("g", 67500, 0.05);
addCubeToScene("m", 68060, 0.05);
addCubeToScene("m", 68570, 0.05);
addCubeToScene("j", 69010, 0.05);
addCubeToScene("d", 69240, 0.05);
addCubeToScene("g", 70240, 0.05);
addCubeToScene("b", 70380, 0.05);
addCubeToScene("]", 71100, 0.05);
addCubeToScene("b", 71350, 0.05);
addCubeToScene("b", 72310, 0.05);
addCubeToScene("]", 73400, 0.05);
addCubeToScene("b", 73910, 0.05);
addCubeToScene("g", 74400, 0.05);
addCubeToScene("g", 75050, 0.05);
addCubeToScene("i", 75230, 0.05);
addCubeToScene(",", 75350, 0.05);
addCubeToScene("]", 75630, 0.05);
addCubeToScene("o", 76020, 0.05);
addCubeToScene("=", 76560, 0.05);
addCubeToScene("b", 76900, 0.05);
addCubeToScene("b", 77930, 0.05);
addCubeToScene("i", 78200, 0.05);
addCubeToScene("b", 78320, 0.05);
addCubeToScene("=", 78740, 0.05);
addCubeToScene("d", 78900, 0.05);
addCubeToScene("d", 79300, 0.05);
addCubeToScene("e", 79460, 0.05);
addCubeToScene("]", 79850, 0.05);
addCubeToScene("e", 80220, 0.05);
addCubeToScene(",", 80810, 0.05);
addCubeToScene("d", 81060, 0.05);
addCubeToScene("a", 81250, 0.05);
addCubeToScene("q", 81830, 0.05);
addCubeToScene("a", 81990, 0.05);
addCubeToScene("]", 82180, 0.05);
addCubeToScene("=", 82520, 0.05);
addCubeToScene("]", 82710, 0.05);
addCubeToScene("]", 82870, 0.05);
addCubeToScene("]", 83010, 0.05);
addCubeToScene("g", 83170, 0.05);
addCubeToScene("b", 83520, 0.05);
addCubeToScene("]", 84220, 0.05);
addCubeToScene("o", 84710, 0.05);
addCubeToScene("b", 84940, 0.05);
addCubeToScene("g", 85360, 0.05);
addCubeToScene("b", 85660, 0.05);
addCubeToScene("o", 85820, 0.05);
addCubeToScene("b", 86030, 0.05);
addCubeToScene("]", 86470, 0.05);
addCubeToScene("b", 86770, 0.05);
addCubeToScene("i", 86960, 0.05);
addCubeToScene("m", 87190, 0.05);
addCubeToScene("=", 87470, 0.05);
addCubeToScene("d", 87660, 0.05);
addCubeToScene("e", 88030, 0.05);
addCubeToScene("e", 88280, 0.05);
addCubeToScene("k", 88610, 0.05);
addCubeToScene("]", 88890, 0.05);
addCubeToScene("]", 89210, 0.05);
addCubeToScene("e", 89330, 0.05);
addCubeToScene(",", 89580, 0.05);
addCubeToScene("a", 89860, 0.05);
addCubeToScene("a", 90700, 0.05);
addCubeToScene("/", 90930, 0.05);
addCubeToScene("g", 91830, 0.05);
addCubeToScene("l", 92110, 0.05);
addCubeToScene("t", 93230, 0.05);
addCubeToScene("=", 93410, 0.05);
addCubeToScene(",", 93950, 0.05);
addCubeToScene("u", 94090, 0.05);
addCubeToScene("m", 94410, 0.05);
addCubeToScene("j", 95090, 0.05);
addCubeToScene(",", 95550, 0.05);
addCubeToScene("i", 95850, 0.05);
addCubeToScene("l", 96040, 0.05);
addCubeToScene("g", 96180, 0.05);
addCubeToScene("b", 96550, 0.05);
addCubeToScene("b", 98500, 0.05);
addCubeToScene("k", 99470, 0.05);
addCubeToScene("b", 99870, 0.05);
addCubeToScene("o", 99990, 0.05);
addCubeToScene("b", 100100, 0.05);
addCubeToScene("g", 100680, 0.05);
addCubeToScene("a", 100890, 0.05);
addCubeToScene("a", 101400, 0.05);
addCubeToScene("l", 101820, 0.05);
addCubeToScene("t", 101940, 0.05);
addCubeToScene("u", 102140, 0.05);
addCubeToScene("u", 102730, 0.05);
addCubeToScene("m", 102980, 0.05);
addCubeToScene("j", 103840, 0.05);
addCubeToScene("b", 104070, 0.05);
addCubeToScene("d", 104420, 0.05);
addCubeToScene("b", 105190, 0.05);
addCubeToScene("]", 105490, 0.05);
addCubeToScene("b", 105720, 0.05);
addCubeToScene("]", 108740, 0.05);
addCubeToScene("]", 113410, 0.05);
addCubeToScene("k", 113710, 0.05);
addCubeToScene("]", 114500, 0.05);
addCubeToScene("]", 116290, 0.05);
addCubeToScene("k", 116400, 0.05);
addCubeToScene("]", 116680, 0.05);
addCubeToScene("k", 120300, 0.05);