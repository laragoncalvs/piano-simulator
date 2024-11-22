import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

const keyMap = {
  a: 'C4',
  s: 'D4',
  d: 'E4',
  f: 'F4',
  g: 'G4',
  h: 'A4',
  j: 'B4',
  k: 'C5',
  l: 'A3',
  q: 'B3',
  w: 'C3',
  e: 'D3',
  r: 'E3',
  t: 'F3',
  y: 'G3',
  u: 'A2',
  i: 'B2',
  o: 'C2',
  p: 'D2',
  z: 'A5',
  x: 'B5',
  c: 'C5',
  v: 'D5',
  b: 'E5',
  n: 'F5',
  m: 'G5',
};

document.addEventListener('keydown', (e) => {
  if (keyMap[e.key]) {
    synth.triggerAttackRelease(keyMap[e.key], '8n');
  }
});

document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    if (note) {
      synth.triggerAttackRelease(note, '8n');
    }
  });
});

