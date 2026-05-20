import Soundfont from "soundfont-player";
import * as THREE from "three";
import { createClient } from "@supabase/supabase-js";
import { keyMap } from "./keyMap.js";
import { allCubes } from "./cubes.js";
import { loadedTexturesAlt } from "./cubes.js";
import notasJson from "./partituras/furelise.json";
import lagoJson from "./partituras/lago.json";
import littlestar from "./partituras/littlestar.json";
import jinglebell from "./partituras/jinglebell.json";
import odeToJoy from "./partituras/ode.json";

let audioContext = null;
function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

let piano = null;
let pianoLoaded = false;
let modoAtual = null;
let modoMusica = null;
let multiplicadorTempo = 1;
let teclaListener = null;
let animationId = null;
let startTime = null;
let fimTimeout = null;
let musica = null;
let pontuation = 0;
let totalNotas = 0;
let pontosParaAcerto = 0;
const PONTUACAO_MAXIMA = 1000;
let duracaoTotal = 0;

function createAlphaGradientTexture(colorHex, direction = "bottom-to-top") {
  const size = 256;
  const canvas = document.createElement("canvas");
  if (["left-to-right", "right-to-left"].includes(direction)) {
    canvas.width = size;
    canvas.height = 1;
  } else {
    canvas.width = 1;
    canvas.height = size;
  }
  const context = canvas.getContext("2d");
  let x0 = 0,
    y0 = 0,
    x1 = 0,
    y1 = 0;
  switch (direction) {
    case "top-to-bottom":
      x0 = 0;
      y0 = 0;
      x1 = 0;
      y1 = size;
      break;
    case "bottom-to-top":
      x0 = 0;
      y0 = size;
      x1 = 0;
      y1 = 0;
      break;
    case "left-to-right":
      x0 = 0;
      y0 = 0;
      x1 = size;
      y1 = 0;
      break;
    case "right-to-left":
      x0 = size;
      y0 = 0;
      x1 = 0;
      y1 = 0;
      break;
    default:
      x0 = 0;
      y0 = size;
      x1 = 0;
      y1 = 0;
  }
  const gradient = context.createLinearGradient(x0, y0, x1, y1);
  gradient.addColorStop(0, hexToRgba(colorHex, 0.0));
  gradient.addColorStop(0.7, hexToRgba(colorHex, 0.7));
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

const gradientTexture = createAlphaGradientTexture("#E323CA", "top-to-bottom");
const gradientTexture2 = createAlphaGradientTexture("#E323CA", "bottom-to-top");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0912);

const camera = new THREE.PerspectiveCamera(
  85,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 6, 3);
camera.lookAt(0, 1, 0);

const isMobile =
  /Mobi|Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
if (isMobile) {
  camera.position.set(0, 4.5, 4);
  camera.fov = 110;
  camera.updateProjectionMatrix();
}

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scaleMultiplier = isMobile ? 0.45 : 1;
const planeGeometry2 = new THREE.PlaneGeometry(13.5 * scaleMultiplier, 2);
const planeMaterial2 = new THREE.MeshStandardMaterial({
  color: 0xe323ca,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.5,
});
const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
plane2.rotation.x = -Math.PI / 2;
plane2.position.z = 3;
scene.add(plane2);

const lineGeometry = new THREE.PlaneGeometry(0.04, 9 * scaleMultiplier);
const lineMaterial = new THREE.MeshStandardMaterial({
  color: 0xe323ca,
  map: gradientTexture,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.5,
  depthWrite: false,
});
const lines = Array.from(
  { length: 13 },
  (_, i) => new THREE.Mesh(lineGeometry, lineMaterial),
);
lines.forEach((line, i) => {
  line.rotation.x = -Math.PI / 2;
  line.position.x =
    [0, 1.1, -1.1, 2.2, -2.2, 3.3, -3.3, 4.4, -4.4, 5.5, -5.5, 6.7, -6.7][i] *
    scaleMultiplier;
  line.position.z = -2.5;
  scene.add(line);
});

if (isMobile) {
  plane2.position.z = 1.75;
  plane2.scale.set(1, 0.6, 1);
  lines.forEach((line) => {
    line.scale.set(1, 1.8);
  });
}
scene.add(new THREE.AmbientLight(0xffffff, 2));
const directionalLight = new THREE.DirectionalLight(0xf5f591, 4);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
mostrarBotaoUnlockIOS();

function mostrarBotaoUnlockIOS() {
  if (!isMobile) return;

  const btn = document.createElement("button");
  btn.id = "iosUnlock";
  btn.textContent = "🔊 Toque para começar";
  btn.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #E323CA;
    color: white;
    padding: 18px 32px;
    border-radius: 16px;
    border: none;
    font-size: 18px;
    font-weight: 600;
    z-index: 99999;
    cursor: pointer;
  `;

  btn.ontouchstart = (e) => {
    e.preventDefault();
    const ctx = getAudioContext();
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
    ctx.resume().then(() => {
      if (!pianoLoaded) {
        Soundfont.instrument(ctx, "acoustic_grand_piano", { gain: 4 }).then((p) => {
          piano = p;
          pianoLoaded = true;
        });
      }
      btn.remove();
    });
  };

  document.body.appendChild(btn);
}

const activeCubes = [];
const spawnEvents = [];

function addCubeToScene(letter, delay, speed) {
  spawnEvents.push({ letter, delay, speed, spawned: false });
}

function aplicarMultiplicadorTempo() {
  spawnEvents.forEach((event) => {
    event.delay *= multiplicadorTempo;
    event.speed /= multiplicadorTempo;
  });
}

function spawnCube(letter, speed) {
  const baseCube = allCubes[letter];
  if (!baseCube) return;
  const geometry = baseCube.geometry.clone();
  let newMaterials;
  if (Array.isArray(baseCube.material)) {
    newMaterials = baseCube.material.map((mat) => mat.clone());
  } else {
    newMaterials = baseCube.material.clone();
  }
  const cube = new THREE.Mesh(geometry, newMaterials);
  cube.position.copy(baseCube.position);
  cube.position.x *= scaleMultiplier - 0.03;
  cube.userData = { speed, letter, hit: false, opacity: 1.0 };
  if (isMobile) cube.scale.set(0.5, 0.5, 0.5);
  scene.add(cube);
  activeCubes.push(cube);
}

// ─── PROCESSARTECLA — lógica central, chamada pelo mobile E pelo desktop ───

function processarTecla(key) {
  const note = keyMap[key];
  if (!note || !piano) return;
  const ctx = getAudioContext();
  if (ctx.state === "suspended" || ctx.state === "interrupted") ctx.resume();

  piano.play(note);

  if (modoAtual !== "jogar") return;

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
    if (Array.isArray(cuboMaisProximoNaArea.material)) {
      cuboMaisProximoNaArea.material.forEach((mat, idx) => {
        if (mat instanceof THREE.MeshStandardMaterial && mat.color) {
          mat.color.set(0x51b79f);
        }
        if (idx === 2 && mat instanceof THREE.MeshBasicMaterial) {
          const novaTextura = loadedTexturesAlt[letra];
          if (novaTextura) {
            mat.map = novaTextura;
            mat.needsUpdate = true;
          }
        }
      });
    }
    setTimeout(() => {
      pontuation = Math.min(PONTUACAO_MAXIMA, pontuation + pontosParaAcerto);
      showPointsAnimation(pontosParaAcerto);
      atualizarPontuacao();
      scene.remove(cuboMaisProximoNaArea);
      const index = activeCubes.indexOf(cuboMaisProximoNaArea);
      if (index !== -1) activeCubes.splice(index, 1);
    }, 400);
  }

  if (!acertou) {
    let cuboMaisProximo = null;
    let menorDistancia = Infinity;
    for (let i = 0; i < activeCubes.length; i++) {
      const cube = activeCubes[i];
      if (!cube.userData.hit && keyMap[cube.userData.letter] === note) {
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
      const penalidade = pontosParaAcerto * 0.1;
      pontuation = Math.max(0, pontuation - penalidade);
      showPointsAnimation(-penalidade);
      atualizarPontuacao();
    }
  }
}

function animate() {
  animationId = requestAnimationFrame(animate);
  const elapsedTime = performance.now() - startTime;

  spawnEvents.forEach((event) => {
    if (elapsedTime > event.delay && !event.spawned) {
      spawnCube(event.letter, event.speed);
      event.spawned = true;
    }
  });

  if (startTime && duracaoTotal > 0) {
    const tempoAtual = performance.now() - startTime;
    const progresso = Math.min(tempoAtual / duracaoTotal, 1);
    progressBar.style.width = progresso * 100 + "%";
    if (progresso >= 1) progressContainer.style.display = "none";
  }

  for (let i = activeCubes.length - 1; i >= 0; i--) {
    const cube = activeCubes[i];
    cube.position.z += cube.userData.speed;
    const zAlvo = plane2.position.z;
    const offset = 0.8;

    if (!cube.userData.hit && cube.position.z >= zAlvo - offset) {
      if (modoAtual === "autoplay") {
        cube.userData.hit = true;
        const letra = cube.userData.letter;
        if (Array.isArray(cube.material)) {
          cube.material.forEach((mat, idx) => {
            if (mat instanceof THREE.MeshStandardMaterial && mat.color) {
              mat.color.set(0x51b79f);
            }
            if (idx === 2 && mat instanceof THREE.MeshBasicMaterial) {
              const novaTextura = loadedTexturesAlt[letra];
              if (novaTextura) {
                mat.map = novaTextura;
                mat.needsUpdate = true;
              } else {
                console.warn(
                  `Textura alternativa não encontrada para: ${letra}`,
                );
              }
            }
          });
        }
        const note = keyMap[cube.userData.letter];
        if (piano && note) piano.play(note);
        setTimeout(() => {
          if (scene.children.includes(cube)) scene.remove(cube);
          const index = activeCubes.indexOf(cube);
          if (index !== -1) activeCubes.splice(index, 1);
        }, 400);
      }
    }

    if (
      modoAtual === "jogar" &&
      !cube.userData.hit &&
      cube.position.z > zAlvo + 1.5
    ) {
      cube.userData.hit = true;
      const penalidade = pontosParaAcerto * 0.05;
      pontuation = Math.max(0, pontuation - penalidade);
      showPointsAnimation(-penalidade);
      atualizarPontuacao();
      scene.remove(cube);
      activeCubes.splice(i, 1);
    }
  }

  renderer.render(scene, camera);

  if (activeCubes.length === 0 && spawnEvents.every((e) => e.spawned)) {
    if (!fimTimeout) {
      fimTimeout = setTimeout(() => {
        desabilitarTeclado();

        cancelAnimationFrame(animationId);
        const canvas = renderer.domElement;
        canvas.style.display = "none";
        const fimDiv = document.getElementById("fimDaCena");
        const pontuacaoFinal = document.getElementById("pontuacaoFinal");
        if (fimDiv) {
          fimDiv.style.display = "flex";
          atualizarEstrelas();
          if (modoAtual === "jogar") {
            pontuacaoFinal.style.display = "block";
            animarPontuacaoFinal();
            setTimeout(() => {
              verificarEAdicionarAoRanking().catch(console.error);
            }, 2200);
          } else {
            pontuacaoFinal.style.display = "none";
          }
        }
        document.getElementById("botoesMusica").style.display = "none";
        document.getElementById("pontuacaoContainer").style.display = "none";
        document.getElementById("pontuacaoTitle").style.display = "none";
        document.getElementById("pontuacao").style.display = "none";
        document.getElementById("gameMenu").style.display = "none";
      }, 1000);
    }
  }
}

function resetarCena() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  for (let cube of activeCubes) scene.remove(cube);
  activeCubes.length = 0;
  spawnEvents.length = 0;
  startTime = null;
  fimTimeout = null;
  const rankingEntry = document.getElementById("rankingEntry");
  if (rankingEntry) rankingEntry.remove();
  const fimDiv = document.getElementById("fimDaCena");
  if (fimDiv) fimDiv.style.display = "none";
}

// ─── PIANO VIRTUAL — mobile, sem KeyboardEvent sintético ───
function desabilitarTeclado() {
  const teclado = document.getElementById("pianoVirtual");
  if (teclado) {
    teclado.style.display = "none";
  }
}

function criarPianoVirtual() {
  if (!isMobile) return;

  const linhas = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  document.getElementById("pianoVirtual")?.remove();

  const pianoDiv = document.createElement("div");
  pianoDiv.id = "pianoVirtual";
  pianoDiv.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 6px 4px 14px;
        background: #1a1a1c;
        border-top: 1px solid rgba(227,35,202,0.35);
        z-index: 100;
        touch-action: none;
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;

  linhas.forEach((linha) => {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; justify-content: center; gap: 5px;";

    linha.forEach((key) => {
      const btn = document.createElement("button");
      btn.textContent = key.toUpperCase();
      btn.dataset.key = key.toLowerCase();
      btn.style.cssText = `
                flex: 1;
                max-width: 38px;
                height: 42px;
                border-radius: 8px;
                border: none;
                background: #3a3a3e;
                color: #ffffff;
                font-size: 16px;
                font-weight: 500;
                font-family: -apple-system, 'SF Pro Text', Helvetica, sans-serif;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 1px 0 0 #000;
                touch-action: manipulation;
                user-select: none;
                -webkit-user-select: none;
                letter-spacing: 0.5px;
            `;

      btn.addEventListener(
        "pointerdown",
        (e) => {
          e.preventDefault();

          const ctx = getAudioContext();
          if (ctx.state !== "running") ctx.resume();

          // Feedback visual
          btn.style.background = "#E323CA";
          btn.style.transform = "scale(0.94)";
          setTimeout(() => {
            btn.style.background = "#3a3a3e";
            btn.style.transform = "scale(1)";
          }, 120);

          processarTecla(key.toLowerCase());
        },
        { passive: false },
      );

      row.appendChild(btn);
    });

    pianoDiv.appendChild(row);
  });

  document.body.appendChild(pianoDiv);

  const alturaEstimada = 4 * 47 + 20;
  renderer.domElement.style.paddingBottom = `${alturaEstimada}px`;
}

function atualizarPontuacao() {
  if (pontuacao) {
    pontuacao.textContent = `000${Math.floor(pontuation)}`;
  }
  const pontuacaoBar = document.getElementById("pontuacaoBar");
  if (pontuacaoBar) {
    const percentual = (pontuation / PONTUACAO_MAXIMA) * 100;
    pontuacaoBar.style.width = percentual + "%";
  }
}

function animarPontuacaoFinal() {
  desabilitarTeclado();

  const pontuacaoFinal = document.getElementById("pontuacaoFinal");
  const pontuacaoMaxima = Math.floor(pontuation);
  const duracao = 2000;
  const inicio = performance.now();
  function animar(agora) {
    const decorrido = agora - inicio;
    const progresso = Math.min(decorrido / duracao, 1);
    pontuacaoFinal.textContent = Math.floor(progresso * pontuacaoMaxima);
    if (progresso < 1) requestAnimationFrame(animar);
  }
  requestAnimationFrame(animar);
}

function atualizarEstrelas() {
  const estrelas = document.querySelector(".estrelas");
  const fraseMotivacao = document.getElementById("fraseMotivacao");
  if (modoAtual === "autoplay") {
    if (estrelas) estrelas.style.display = "none";
    if (fraseMotivacao) fraseMotivacao.style.display = "none";
    return;
  }
  if (estrelas) estrelas.style.display = "block";
  if (fraseMotivacao) fraseMotivacao.style.display = "block";
  const estrelasSpans = document.querySelectorAll(".estrelas span");
  const pontuacaoAtual = Math.floor(pontuation);
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
  estrelasSpans.forEach((estrela, index) => {
    estrela.textContent = index < quantidadeEstrelas ? "★" : "☆";
  });
  if (fraseMotivacao) fraseMotivacao.textContent = frase;
}

function showPointsAnimation(points) {
  const roundedPoints = Math.round(points);
  if (roundedPoints === 0) return;
  const pontosDiv = document.createElement("div");
  pontosDiv.className = `floating-points ${roundedPoints >= 0 ? "positive" : "negative"}`;
  pontosDiv.textContent =
    roundedPoints >= 0 ? `+${roundedPoints}` : `${roundedPoints}`;
  pontosDiv.style.left = Math.random() * (window.innerWidth - 200) + 100 + "px";
  pontosDiv.style.top = window.innerHeight * 0.3 + Math.random() * 200 + "px";
  document.body.appendChild(pontosDiv);
  setTimeout(() => pontosDiv.remove(), 2000);
}

function atualizarOpacidadeCubo(cube) {
  if (Array.isArray(cube.material)) {
    cube.material.forEach((mat) => {
      if (
        mat instanceof THREE.MeshStandardMaterial ||
        mat instanceof THREE.MeshBasicMaterial
      ) {
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

const nomesDasMusicas = {
  littlestar: "Twinkle, Twinkle, Little Star - Mozart",
  jinglebell: "Jingle Bells - James Lord Pierpont",
  elvis: "Beethoven - Für Elise",
  bethoven: "Bethoven - Ode á Alegria",
  tchai: "Tchaikovsky - Lago dos Cisnes",
};

function obterNomeDaMusica(musicaKey) {
  return nomesDasMusicas[musicaKey] || "Música";
}

const musicaArmazenada = localStorage.getItem("musica") || "elvis";
const modoArmazenado = localStorage.getItem("modo") || "autoplay";
modoMusica = localStorage.getItem("modoMusica") || "jogador";
musica = musicaArmazenada;
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
  desabilitarTeclado();

  progressBar.style.width = "0%";
  progressContainer.style.display = "flex";
  pontuacao.style.display = "none";
  document.getElementById("pontuacaoContainer").style.display = "none";
  document.getElementById("pontuacaoTitle").style.display = "none";
  document.getElementById("gameMenu").style.display = "flex";
  document.getElementById("nomeDaMusica").textContent =
    obterNomeDaMusica(musica);
  document.getElementById("nomeDaMusica").style.display = "block";
  document.getElementById("botoesMusica").style.display = "flex";
  document.getElementById("botoesAutoplay").classList.add("ativo");
  document.getElementById("botoesJogar").classList.remove("ativo");
  canvas.style.display = "inline";

  modoAtual = "autoplay";
  pontuation = 0;
  atualizarPontuacao();
  resetarCena();
  carregarPartituraAtual();
  startTime = performance.now();

  if (teclaListener) {
    document.removeEventListener("keydown", teclaListener);
    teclaListener = null;
  }
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (!pianoLoaded) {
    const ctx = getAudioContext();
    ctx
      .resume()
      .then(() =>
        Soundfont.instrument(ctx, "acoustic_grand_piano", { gain: 4 }),
      )
      .then((loadedPiano) => {
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
  criarPianoVirtual();

  document.getElementById("gameMenu").style.display = "flex";
  pontuacao.style.display = "block";
  document.getElementById("nomeDaMusica").textContent =
    obterNomeDaMusica(musica);
  document.getElementById("nomeDaMusica").style.display = "block";
  canvas.style.display = "inline";
  progressBar.style.width = "0%";
  progressContainer.style.display = "flex";
  document.getElementById("pontuacaoContainer").style.display = "block";
  document.getElementById("pontuacaoTitle").style.display = "block";
  document.getElementById("botoesMusica").style.display = "flex";
  document.getElementById("botoesJogar").classList.add("ativo");
  document.getElementById("botoesAutoplay").classList.remove("ativo");

  modoAtual = "jogar";
  pontuation = 0;
  atualizarPontuacao();
  resetarCena();
  carregarPartituraAtual();
  startTime = performance.now();

  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (teclaListener) document.removeEventListener("keydown", teclaListener);

  // Desktop: keydown → processarTecla
  teclaListener = (e) => {
    if (document.activeElement?.tagName === "INPUT") return;
    processarTecla(e.key.toLowerCase());
  };
  document.addEventListener("keydown", teclaListener);
  if (!pianoLoaded) {
    const ctx = getAudioContext();
    ctx
      .resume()
      .then(() =>
        Soundfont.instrument(ctx, "acoustic_grand_piano", { gain: 4 }),
      )
      .then((loadedPiano) => {
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

  carregarPartituraAtual();
  startTime = performance.now();

  if (modoAtual === "jogar") {
    teclaListener = (e) => {
      if (document.activeElement?.tagName === "INPUT") return;
      processarTecla(e.key.toLowerCase());
    };
    document.addEventListener("keydown", teclaListener);
  }

  if (!pianoLoaded) {
    const ctx = getAudioContext();
    ctx
      .resume()
      .then(() =>
        Soundfont.instrument(ctx, "acoustic_grand_piano", { gain: 4 }),
      )
      .then((loadedPiano) => {
        piano = loadedPiano;
        pianoLoaded = true;
        animate();
      });
  } else {
    animate();
  }
});
// ─── Helper partitura ───────────────────────────────────────

function carregarPartituraAtual() {
  if (musica === "bethoven") carregarPartituraOdeToJoy();
  else if (musica === "tchai") carregarPartituraCisne();
  else if (musica === "littlestar") carregarPartituraTwinkle();
  else if (musica === "jinglebell") carregarPartituraJingleBell();
  else carregarPartituraFurElise();
}

const pitchToKey = {};
for (const [key, pitch] of Object.entries(keyMap)) pitchToKey[pitch] = key;

function carregarNotas(notes) {
  for (const note of notes) {
    const key = pitchToKey[note.pitch];
    if (!key) {
      console.warn(`⚠️ Sem mapeamento: ${note.pitch}`);
      continue;
    }
    addCubeToScene(key, note.start_ms, 0.05);
  }
  aplicarMultiplicadorTempo();
  totalNotas = spawnEvents.length;
  pontosParaAcerto = PONTUACAO_MAXIMA / totalNotas;
  duracaoTotal = Math.max(...spawnEvents.map((e) => e.delay)) + 5000;
}

function carregarPartituraFurElise() {
  carregarNotas(notasJson);
}
function carregarPartituraCisne() {
  carregarNotas(lagoJson);
}
function carregarPartituraTwinkle() {
  carregarNotas(littlestar);
}
function carregarPartituraOdeToJoy() {
  carregarNotas(odeToJoy);
}
function carregarPartituraJingleBell() {
  carregarNotas(jinglebell);
}

// ─── Ranking ─────────────────────────────────────────────────

const MAX_USUARIO_LENGTH = 15;
const MAX_RANKING = 10;

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("[Supabase] Variáveis de ambiente faltando.");
}
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let rankingCache = null;

function getRankingKey(musicaKey, modoMusica) {
  return `${musicaKey}_jogar_${modoMusica}`;
}

async function carregarRankingGlobal() {
  if (rankingCache) return rankingCache;
  try {
    const { data, error } = await supabase.from("rankings").select("*");
    if (error) {
      console.error("Erro ao carregar ranking:", error);
      return {};
    }
    rankingCache = {};
    if (data) {
      data.forEach((row) => {
        const key = getRankingKey(row.musica, row.modo);
        if (!rankingCache[key]) rankingCache[key] = [];
        rankingCache[key].push({
          id: row.id,
          nome: row.nome,
          pontuacao: row.pontuacao,
          data: row.data,
        });
      });
      Object.keys(rankingCache).forEach((key) => {
        rankingCache[key].sort((a, b) => b.pontuacao - a.pontuacao);
      });
    }
    return rankingCache;
  } catch (err) {
    console.error(err);
    return {};
  }
}

async function salvarRankingGlobal(dados) {
  rankingCache = dados;
  try {
    const registros = [];
    Object.entries(dados).forEach(([key, lista]) => {
      const [mus, , modo] = key.split("_");
      lista.forEach((item) => {
        const r = {
          musica: mus,
          modo,
          nome: item.nome,
          pontuacao: item.pontuacao,
          data: item.data,
        };
        if (item.id != null) r.id = item.id;
        registros.push(r);
      });
    });
    const inserir = registros.filter((r) => r.id == null);
    const atualizar = registros.filter((r) => r.id != null);
    if (atualizar.length)
      await supabase.from("rankings").upsert(atualizar, { onConflict: ["id"] });
    if (inserir.length) await supabase.from("rankings").insert(inserir);
  } catch (err) {
    console.error(err);
  }
}

async function carregarRanking(musicaKey, modoMusica) {
  const dados = await carregarRankingGlobal();
  return dados[getRankingKey(musicaKey, modoMusica)] || [];
}

async function inserirNoRanking(nome, pontuacaoAtual, musicaKey, modoMusica) {
  const dados = await carregarRankingGlobal();
  const key = getRankingKey(musicaKey, modoMusica);
  const lista = dados[key] || [];
  const nomeLower = nome.toLowerCase();
  const indexExistente = lista.findIndex(
    (e) => e.nome.toLowerCase() === nomeLower,
  );
  if (indexExistente !== -1) {
    if (pontuacaoAtual > lista[indexExistente].pontuacao) {
      lista[indexExistente].pontuacao = Math.floor(pontuacaoAtual);
      lista[indexExistente].data = new Date().toLocaleDateString("pt-BR");
    }
  } else {
    lista.push({
      nome: nome.slice(0, MAX_USUARIO_LENGTH).trim(),
      pontuacao: Math.floor(pontuacaoAtual),
      data: new Date().toLocaleDateString("pt-BR"),
    });
  }
  lista.sort((a, b) => b.pontuacao - a.pontuacao);
  dados[key] = lista.slice(0, MAX_RANKING);
  rankingCache = dados;
  await salvarRankingGlobal(dados);
  return dados[key].findIndex((e) => e.nome.toLowerCase() === nomeLower) + 1;
}

async function exibirListaRanking(nomeDestaque, listaJaCarregada = null) {
  const modo = localStorage.getItem("modoMusica") || "jogador";
  const lista = listaJaCarregada || (await carregarRanking(musica, modo));
  const listaDiv = document.getElementById("rankingLista");
  if (!listaDiv) return;
  if (lista.length === 0) {
    listaDiv.innerHTML =
      '<p style="color:rgba(255,255,255,0.3);font-size:0.5rem;text-align:center;">Nenhuma pontuação ainda.</p>';
    return;
  }
  let html = '<ol id="rankingOl">';
  lista.forEach((entry, i) => {
    const destaque =
      entry.nome.toLowerCase() === nomeDestaque.toLowerCase()
        ? " ranking-destaque"
        : "";
    html += `<li class="ranking-item${destaque}">
            <span class="ranking-pos">${i + 1}º</span>
            <span class="ranking-nome">${entry.nome}</span>
            <span class="ranking-pts">${entry.pontuacao}</span>
            <span class="ranking-data">${entry.data}</span>
        </li>`;
  });
  html += "</ol>";
  listaDiv.innerHTML = html;
}

function criarContainerRanking(msgHtml, incluirFormulario) {
  if (document.getElementById("rankingEntry")) return false;
  const fimDiv = document.getElementById("fimDaCena");
  const botoesDiv = document.getElementById("fimDaCena-buttons");
  if (!fimDiv || !botoesDiv) return false;
  const rankingDiv = document.createElement("div");
  rankingDiv.id = "rankingEntry";
  rankingDiv.innerHTML = `
        <p id="rankingMsg">${msgHtml}</p>
        ${
          incluirFormulario
            ? `<div id="rankingInputWrapper">
            <input type="text" id="rankingNomeInput" maxlength="${MAX_USUARIO_LENGTH}"
                placeholder="Seu nome" autocomplete="off" />
            <button id="rankingConfirmarBtn">Confirmar</button>
        </div>`
            : ""
        }
        <div id="rankingLista"><p style="color:rgba(255,255,255,0.3);font-size:0.5rem;text-align:center;">Carregando...</p></div>
    `;
  fimDiv.insertBefore(rankingDiv, botoesDiv);
  return true;
}

function exibirFormularioRanking(posicao, nomePreenchido = null) {
  const titulo = nomePreenchido
    ? "✏️ Editar seu nome"
    : "🏆 Você entrou no ranking!";
  if (!criarContainerRanking(titulo, true)) return;
  const input = document.getElementById("rankingNomeInput");
  const btn = document.getElementById("rankingConfirmarBtn");
  if (nomePreenchido) {
    input.value = nomePreenchido;
  }
  input.focus();
  input.select();

  input.addEventListener("focus", () => {
    if (teclaListener) document.removeEventListener("keydown", teclaListener);
  });
  input.addEventListener("blur", () => {
    if (teclaListener) document.addEventListener("keydown", teclaListener);
  });

  async function confirmarNome() {
    const nome = input.value.trim();
    if (!nome) {
      input.style.borderColor = "red";
      return;
    }
    btn.disabled = true;
    btn.textContent = "...";
    localStorage.setItem("rankingNomeUsuario", nome);
    const modo = localStorage.getItem("modoMusica") || "jogador";
    const pos = await inserirNoRanking(nome, pontuation, musica, modo);
    rankingCache = null;
    document.getElementById("rankingInputWrapper").style.display = "none";
    document.getElementById("rankingMsg").textContent =
      `🏆 Você ficou em ${pos}º lugar!`;
    const listaNova = await carregarRanking(musica, modo);
    await exibirListaRanking(nome, listaNova);
  }

  btn.addEventListener("click", confirmarNome);
  input.addEventListener("keydown", (e) => {
    e.stopPropagation();
    if (e.key === "Enter") confirmarNome();
  });
}

async function verificarEAdicionarAoRanking() {
  if (modoAtual !== "jogar") return;
  const pontuacaoAtual = Math.floor(pontuation);
  if (pontuacaoAtual <= 0) return;
  rankingCache = null;
  const modo = localStorage.getItem("modoMusica") || "jogador";
  const nome = localStorage.getItem("rankingNomeUsuario");
  try {
    const lista = await carregarRanking(musica, modo);
    const cabe =
      lista.length < MAX_RANKING ||
      pontuacaoAtual > lista[lista.length - 1].pontuacao;
    if (!cabe) return;
    const posProvisoria =
      lista.length < MAX_RANKING ? lista.length + 1 : MAX_RANKING;
    exibirFormularioRanking(posProvisoria, nome);
  } catch (err) {
    console.error(err);
  }
}
