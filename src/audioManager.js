import Soundfont from 'soundfont-player';

let audioContext = null;
let piano = null;
let pianoLoaded = false;
let pianoLoadingPromise = null;
window.log = function(msg) {
    console.log(msg);
    const div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;font-size:12px;z-index:9999;padding:4px;word-break:break-all;';
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 4000);
}
export async function garantirAudio() {
    log('garantirAudio chamado');
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        log('AudioContext criado: ' + audioContext.state);
    }
    if (audioContext.state === 'suspended' || audioContext.state === 'interrupted') {
        log('tentando resume...');
        await audioContext.resume();
        log('após resume: ' + audioContext.state);
    }
    return audioContext;
}

export async function carregarPiano() {
    if (pianoLoaded && piano) { log('piano já carregado'); return piano; }
    if (pianoLoadingPromise) { log('piano carregando...'); return pianoLoadingPromise; }

    log('iniciando carga do piano');
    pianoLoadingPromise = (async () => {
        try {
            const ctx = await garantirAudio();
            log('Soundfont carregando...');
            piano = await Soundfont.instrument(ctx, 'acoustic_grand_piano', { gain: 4 });
            pianoLoaded = true;
            log('piano pronto!');
            return piano;
        } catch(err) {
            log('ERRO: ' + err.message);
            throw err;
        }
    })();

    return pianoLoadingPromise;
}
export function getPiano() {
    return piano;
}