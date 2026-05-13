// audioManager.js
// Lazy initialization do AudioContext — nunca criado fora de gesto do usuário.

let audioContext = null;
let piano = null;
let pianoLoaded = false;
let pianoLoadingPromise = null;

/**
 * Garante que o AudioContext existe e está rodando.
 * Deve ser chamado dentro de touchstart / pointerdown / click.
 */
export async function garantirAudio() {
    // Cria o AudioContext apenas na primeira interação real
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Safari iOS às vezes coloca o contexto como 'interrupted' além de 'suspended'
    if (audioContext.state === 'suspended' || audioContext.state === 'interrupted') {
        await audioContext.resume();
    }

    return audioContext;
}

/**
 * Carrega o Soundfont. Chama garantirAudio() primeiro.
 * Retorna o piano carregado (ou o já carregado se chamado novamente).
 */
export async function carregarPiano() {
    if (pianoLoaded && piano) return piano;

    // Evita múltiplos loads paralelos
    if (pianoLoadingPromise) return pianoLoadingPromise;

    pianoLoadingPromise = (async () => {
        const ctx = await garantirAudio();
        const { default: Soundfont } = await import('soundfont-player');
        piano = await Soundfont.instrument(ctx, 'acoustic_grand_piano', { gain: 4 });
        pianoLoaded = true;
        return piano;
    })();

    return pianoLoadingPromise;
}

/**
 * Toca uma nota MIDI (ex: "A4", "C5").
 * Garante o contexto antes de tocar — seguro para chamar em qualquer gesto.
 */
export async function tocarNota(note) {
    if (!note) return;
    const ctx = await garantirAudio();
    if (!piano) return;
    piano.play(note);
}

export function getPiano() {
    return piano;
}

export function isPianoLoaded() {
    return pianoLoaded;
}