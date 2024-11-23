import Soundfont from "soundfont-player";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const keyMap = {
  a: "C4",
  s: "D4",
  d: 'E4',
  f: 'F4',
  g: 'G4',
  h: 'A4',
  j: 'B4',
  k: 'C5',
  l: 'A3',
  q: 'C3',
  w: 'D3',
  e: 'E3',
  r: 'F3',
  t: 'G3',
  y: 'A3',
  u: 'B3',
  i: 'B2',
  o: 'C2',
  p: 'D2',
  z: 'C5',
  x: 'D5',
  c: 'E5',
  v: 'F5',
  b: 'G5',
  n: 'A5',
  m: 'B5',
  1: 'C2',
  2: 'D2',
  3: 'E2',
  4: 'F2',
  5: 'G2',
  6: 'A2',
  7: 'B2',

};


// Carregar o piano e configurar o evento de teclado
Soundfont.instrument(audioContext, "acoustic_grand_piano" , { gain: 4 }).then((piano) => {
  document.addEventListener("keydown", (e) => {
    const note = keyMap[e.key];
    if (note) {
      piano.play(note);
    }
  });
});
