import Soundfont from "soundfont-player";

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


// Carregar o piano e configurar o evento de teclado
Soundfont.instrument(audioContext, "acoustic_grand_piano", { gain: 4 }).then((piano) => {
  document.addEventListener("keydown", (e) => {
    let key = e.key;

    const note = keyMap[key];
    if (note) {
      piano.play(note);
    }
  });
});