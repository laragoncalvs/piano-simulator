import Soundfont from 'soundfont-player';

let audioContext = null;
let piano = null;
let pianoLoaded = false;
let pianoLoadingPromise = null;

export async function garantirAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended' || audioContext.state === 'interrupted') {
        await audioContext.resume();
    }
    return audioContext;
}

export async function carregarPiano() {
    if (pianoLoaded && piano) return piano;
    if (pianoLoadingPromise) return pianoLoadingPromise;

    pianoLoadingPromise = (async () => {
        const ctx = await garantirAudio();
        piano = await Soundfont.instrument(ctx, 'acoustic_grand_piano', { gain: 4 });
        pianoLoaded = true;
        return piano;
    })();

    return pianoLoadingPromise;
}

export function getPiano() {
    return piano;
}