import Soundfont from 'soundfont-player';

let audioContext = null;
let piano = null;
let pianoLoaded = false;
let pianoLoadingPromise = null;

function log(msg) {
    console.log(msg);
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;font-size:11px;z-index:9999;padding:4px;word-break:break-all;';
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 5000);
}

export async function garantirAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        log('ctx criado state=' + audioContext.state);
    }

    if (audioContext.state !== 'running') {
        await audioContext.resume();
        log('após resume state=' + audioContext.state);
    }

    // Toca silêncio para desbloquear Safari
    const buffer = audioContext.createBuffer(1, 1, 22050);
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);

    return audioContext;
}

// Testa se o áudio funciona tocando um beep puro via OscillatorNode
// sem depender do soundfont — se isso funcionar, o contexto está ok
export function testarBeep() {
    if (!audioContext) { log('sem contexto pra beep'); return; }
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.frequency.value = 440;
    gain.gain.value = 0.3;
    osc.start();
    osc.stop(audioContext.currentTime + 0.3);
    log('beep tocado');
}

export async function carregarPiano() {
    if (pianoLoaded && piano) return piano;
    if (pianoLoadingPromise) return pianoLoadingPromise;

    pianoLoadingPromise = (async () => {
        const ctx = await garantirAudio();
        log('carregando soundfont...');
        piano = await Soundfont.instrument(ctx, 'acoustic_grand_piano', {
            gain: 4,
            format: 'mp3',
            soundfont: 'MusyngKite',
        });
        pianoLoaded = true;
        log('soundfont pronto');
        return piano;
    })();

    return pianoLoadingPromise;
}

export function getPiano() {
    return piano;
}