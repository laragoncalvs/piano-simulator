// inputManager.js
// Gerencia input de desktop (keydown) e mobile (pointerdown) sem KeyboardEvent sintético.

import { garantirAudio, carregarPiano } from './audioManager.js';

let desktopHandler = null;

/**
 * Registra o handler de teclado para desktop.
 * @param {Function} callback - fn(key: string) chamada em cada tecla
 */
export function registrarDesktop(callback) {
    removerDesktop();
    desktopHandler = (e) => {
        // Ignora se o foco está em um input (para o ranking)
        if (document.activeElement?.tagName === 'INPUT') return;
        callback(e.key.toLowerCase());
    };
    document.addEventListener('keydown', desktopHandler);
}

export function removerDesktop() {
    if (desktopHandler) {
        document.removeEventListener('keydown', desktopHandler);
        desktopHandler = null;
    }
}

/**
 * Conecta um botão do piano virtual ao callback.
 * Usa pointerdown para máxima compatibilidade (iOS Safari + Android).
 * O AudioContext é desbloqueado aqui, dentro do gesto real.
 *
 * @param {HTMLElement} btn - o botão virtual
 * @param {string} key - a tecla que representa
 * @param {Function} callback - fn(key: string)
 */
export function conectarBotaoMobile(btn, key, callback) {
    btn.addEventListener('pointerdown', async (e) => {
        e.preventDefault();
        log('pointerdown: key=' + key);
        await garantirAudio();
        await carregarPiano();
        log('chamando callback para key=' + key);
        callback(key.toLowerCase());
    }, { passive: false });
}