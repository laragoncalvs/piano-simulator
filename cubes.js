import * as THREE from 'three';

import aImg from './assets/letras/a.png';
import bImg from './assets/letras/b.png';
import cImg from './assets/letras/c.png';
import dImg from './assets/letras/d.png';
import eImg from './assets/letras/e.png';
import fImg from './assets/letras/f.png';
import gImg from './assets/letras/g.png';
import hImg from './assets/letras/h.png';
import iImg from './assets/letras/i.png';
import jImg from './assets/letras/j.png';
import kImg from './assets/letras/k.png';
import lImg from './assets/letras/l.png';
import mImg from './assets/letras/m.png';
import nImg from './assets/letras/n.png';
import oImg from './assets/letras/o.png';
import pImg from './assets/letras/p.png';
import qImg from './assets/letras/q.png';
import rImg from './assets/letras/r.png';
import sImg from './assets/letras/s.png';
import tImg from './assets/letras/t.png';
import uImg from './assets/letras/u.png';
import vImg from './assets/letras/v.png';
import wImg from './assets/letras/w.png';
import xImg from './assets/letras/x.png';
import yImg from './assets/letras/y.png';
import zImg from './assets/letras/z.png';
import çImg from './assets/letras/ç.png';
import zeroImg from './assets/letras/0.png';
import umImg from './assets/letras/1.png';
import doisImg from './assets/letras/2.png';
import tresImg from './assets/letras/3.png';
import quatroImg from './assets/letras/4.png';
import cincoImg from './assets/letras/5.png';
import seisImg from './assets/letras/6.png';
import seteImg from './assets/letras/7.png';
import oitoImg from './assets/letras/8.png';
import noveImg from './assets/letras/9.png';
import agudoImg from './assets/letras/agudo.png';
import aspaImg from './assets/letras/aspa.png';
import chaveDirImg from './assets/letras/chave dir.png';
import chaveEsqImg from './assets/letras/chave esq.png';
import hifenImg from './assets/letras/hifen.png';
import igualImg from './assets/letras/igual.png';
import pontoVirgulaImg from './assets/letras/pontoVirgula.png';
import tilImg from './assets/letras/til.png';
import virgulaImg from './assets/letras/virgula.png';

const textureLoader = new THREE.TextureLoader();
const baseColor = 0x5C2569;

const letterTextures = {
    a: aImg, b: bImg, c: cImg, d: dImg, e: eImg, f: fImg, g: gImg, h: hImg, i: iImg,
    j: jImg, k: kImg, l: lImg, m: mImg, n: nImg, o: oImg, p: pImg, q: qImg, r: rImg,
    s: sImg, t: tImg, u: uImg, v: vImg, w: wImg, x: xImg, y: yImg, z: zImg, ç: çImg,
    "0": zeroImg, "1": umImg, "2": doisImg, "3": tresImg, "4": quatroImg,
    "5": cincoImg, "6": seisImg, "7": seteImg, "8": oitoImg, "9": noveImg,
    agudo: agudoImg, aspa: aspaImg, chave_direita: chaveDirImg, chave_esquerda: chaveEsqImg,
    hifen: hifenImg, igual: igualImg, ponto_virgula: pontoVirgulaImg,
    til: tilImg, virgula: virgulaImg
};

const createCube = (key) => {
    const texture = textureLoader.load(letterTextures[key]);
    texture.colorSpace = THREE.SRGBColorSpace;
    
    const materials = Array(6).fill(new THREE.MeshStandardMaterial({ color: baseColor, transparent: true, opacity: 1 }));
    materials[2] = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    const cube = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.8), materials);
    return cube;
};

const allCubes = {};
Object.keys(letterTextures).forEach((key) => {
    allCubes[key] = createCube(key);
});

// Define posições iniciais
const linhas = [-6, -4.9, -3.8, -2.7, -1.6, -0.55, 0.55, 1.6, 2.7, 3.8, 4.9, 6];
const initz = -20;
const inity = 0.4;

const posicoes = [
    ["a", "q", "z", "1", "aspa"], ["s", "w", "x", "2"], ["c", "d", "e", "3"], ["r", "f", "v", "4" ], ["g", "t", "b", "5"],
    ["h", "y", "n", "6"], ["u", "j", "m", "7"], ["k", "i", "8"], ["o", "l", "9", "virgula"], ["p", "ç", "0"], ["hifen", "agudo", "til", "ponto_virgula"], 
    ["igual", "chave_esquerda", "chave_direita"]
];

posicoes.forEach((grupo, index) => {
    grupo.forEach(letra => {
        if (allCubes[letra]) {
            allCubes[letra].position.x = linhas[index];
        }
    });
});
Object.values(allCubes).forEach((cube) => {
    cube.position.y = inity;
    cube.position.z = initz;
});

export { allCubes };
