import * as THREE from 'three';

const loader = new THREE.TextureLoader();
const baseColor = 0x5C2569;
const baseMaterial = new THREE.MeshStandardMaterial({ color: baseColor, transparent: true, opacity: 1 });

const createCube = (letter) => {
    const texture = loader.load(`assets/letras/${letter}.png`);
    texture.colorSpace = THREE.SRGBColorSpace;
    
    const texturedMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 1 });

    const materials = [
        new THREE.MeshStandardMaterial({ color: baseColor, transparent: true, opacity: 1 }), 
        new THREE.MeshStandardMaterial({ color: baseColor, transparent: true, opacity: 1 }), 
        new THREE.MeshStandardMaterial({ color: baseColor, transparent: true, opacity: 1 }), 
        new THREE.MeshStandardMaterial({ color: baseColor, transparent: true, opacity: 1 }), 
        texturedMaterial, 
        new THREE.MeshStandardMaterial({ color: baseColor, transparent: true, opacity: 1 }) 
    ];
    
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    return new THREE.Mesh(cubeGeometry, materials);
};


const cubes = {};
const alphabet = 'acmwxyzçnstopqrudefghijbklv';

for (const letter of alphabet) {
    cubes[letter] = createCube(letter);
}


export { cubes };

const linha1 = -4.5;
const linha2 = -3.3;
const linha3 = -2.2;
const linha4 = -1.1;
const linha5 = 0;
const linha6 = 1.1;
const linha7 = 2.2;
const linha8 = 3.3;
const linha9 = 4.5;
const initz = -20;
const inity = 0.4;

cubes.a.position.x = linha1;
cubes.q.position.x = linha1;
cubes.z.position.x = linha1;

cubes.s.position.x = linha2;
cubes.w.position.x = linha2;
cubes.x.position.x = linha2;

cubes.c.position.x = linha3;
cubes.d.position.x = linha3;
cubes.e.position.x = linha3;

cubes.r.position.x = linha4;
cubes.f.position.x = linha4;
cubes.v.position.x = linha4;
cubes.g.position.x = linha4;
cubes.t.position.x = linha4;

cubes.h.position.x = linha5;
cubes.y.position.x = linha5;
cubes.b.position.x = linha5;
cubes.u.position.x = linha5;
cubes.n.position.x = linha5;
cubes.j.position.x = linha5;

cubes.m.position.x = linha6;
cubes.k.position.x = linha6;
cubes.i.position.x = linha6;

cubes.o.position.x = linha7;
cubes.l.position.x = linha7;

cubes.p.position.x = linha8;
cubes.ç.position.x = linha8;




Object.values(cubes).forEach((cube, index) => {
    cube.position.y = inity;
    cube.position.z = initz;
});

