import Soundfont from "soundfont-player";

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const keyMap4 = {
  a: "C4",
  w: "C#4",
  s: "D4",
  e: "D#4",
  d: 'E4',
  f: 'F4',
  t: 'F#4',
  g: 'G4',
  y: 'G#4',
  h: 'A4',
  u: 'A#4',
  j: 'B4',
  
};
let keyMap = keyMap4;
const keyMap1 = {
  a: "C1",
  w: "C#1",
  s: "D1",
  e: "D#1",
  d: 'E1',
  f: 'F1',
  t: 'F#1',
  g: 'G1',
  y: 'G#1',
  h: 'A1',
  u: 'A#1',
  j: 'B1',

}
const keyMap2 = {
  a: "C2",
  w: "C#2",
  s: "D2",
  e: "D#2",
  d: 'E2',
  f: 'F2',
  t: 'F#2',
  g: 'G2',
  y: 'G#2',
  h: 'A2',
  u: 'A#2',
  j: 'B2',

}
const keyMap3 = {
  a: "C3",
  w: "C#3",
  s: "D3",
  e: "D#3",
  d: 'E3',
  f: 'F3',
  t: 'F#3',
  g: 'G3',
  y: 'G#3',
  h: 'A3',
  u: 'A#3',
  j: 'B3',

}
const keyMap5 = {
  a: "C5",
  w: "C#5",
  s: "D5",
  e: "D#5",
  d: 'E5',
  f: 'F5',
  t: 'F#5',
  g: 'G5',
  y: 'G#5',
  h: 'A5',
  u: 'A#5',
  j: 'B5',

}
const keyMap6 = {
  a: "C6",
  w: "C#6",
  s: "D6",
  e: "D#6",
  d: 'E6',
  f: 'F6',
  t: 'F#6',
  g: 'G6',
  y: 'G#6',
  h: 'A6',
  u: 'A#6',
  j: 'B6',

}
const keyMap7 = {
  a: "C7",
  w: "C#7",
  s: "D7",
  e: "D#7",
  d: 'E7',
  f: 'F7',
  t: 'F#7',
  g: 'G7',
  y: 'G#7',
  h: 'A7',
  u: 'A#7',
  j: 'B7',

}
document.addEventListener("keydown", (e) => {
  if (e.key === '4') {
    keyMap = keyMap4; 
   } else if (e.key === '1') {
      keyMap = keyMap1
    }
    else if (e.key === '2') {
      keyMap = keyMap2
    }
    else if (e.key === '3') {
      keyMap = keyMap3
    }
    else if (e.key === '5') {
      keyMap = keyMap5
    }
   else if (e.key === '6') {
    keyMap = keyMap6
  }
   else if (e.key === '7') {
    keyMap = keyMap7
  }
});


// Carregar o piano e configurar o evento de teclado
Soundfont.instrument(audioContext, "acoustic_grand_piano" , { gain: 4 }).then((piano) => {
  document.addEventListener("keydown", (e) => {
    const note = keyMap[e.key];
    if (note) {
      piano.play(note);
    }
  });
});
