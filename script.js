// Dados dos Elementos Químicos
const dadosElementos = {
    "H": { nome: "Hidrogênio", numero: 1, massa: 1.008, grupo: "Não metal", periodo: 1 },
    "He": { nome: "Hélio", numero: 2, massa: 4.0026, grupo: "Gás nobre", periodo: 1 },
    "Li": { nome: "Lítio", numero: 3, massa: 6.94, grupo: "Metal alcalino", periodo: 2 },
    "Be": { nome: "Berílio", numero: 4, massa: 9.0122, grupo: "Metal alcalino-terroso", periodo: 2 },
    "B": { nome: "Boro", numero: 5, massa: 10.81, grupo: "Semimetal", periodo: 2 },
    "C": { nome: "Carbono", numero: 6, massa: 12.011, grupo: "Não metal", periodo: 2 },
    "N": { nome: "Nitrogênio", numero: 7, massa: 14.007, grupo: "Não metal", periodo: 2 },
    "O": { nome: "Oxigênio", numero: 8, massa: 15.999, grupo: "Não metal", periodo: 2 },
    "F": { nome: "Flúor", numero: 9, massa: 18.998, grupo: "Halogênio", periodo: 2 },
    "Ne": { nome: "Neônio", numero: 10, massa: 20.180, grupo: "Gás nobre", periodo: 2 },
    "Na": { nome: "Sódio", numero: 11, massa: 22.990, grupo: "Metal alcalino", periodo: 3 },
    "Mg": { nome: "Magnésio", numero: 12, massa: 24.305, grupo: "Metal alcalino-terroso", periodo: 3 },
    "Al": { nome: "Alumínio", numero: 13, massa: 26.982, grupo: "Metal", periodo: 3 },
    "Si": { nome: "Silício", numero: 14, massa: 28.085, grupo: "Semimetal", periodo: 3 },
    "P": { nome: "Fósforo", numero: 15, massa: 30.974, grupo: "Não metal", periodo: 3 },
    "S": { nome: "Enxofre", numero: 16, massa: 32.06, grupo: "Não metal", periodo: 3 },
    "Cl": { nome: "Cloro", numero: 17, massa: 35.45, grupo: "Halogênio", periodo: 3 },
    "Ar": { nome: "Argônio", numero: 18, massa: 39.948, grupo: "Gás nobre", periodo: 3 },
    "K": { nome: "Potássio", numero: 19, massa: 39.098, grupo: "Metal alcalino", periodo: 4 },
    "Ca": { nome: "Cálcio", numero: 20, massa: 40.078, grupo: "Metal alcalino-terroso", periodo: 4 },
    "Sc": { nome: "Escândio", numero: 21, massa: 44.956, grupo: "Metal de transição", periodo: 4 },
    "Ti": { nome: "Titânio", numero: 22, massa: 47.867, grupo: "Metal de transição", periodo: 4 },
    "V": { nome: "Vanádio", numero: 23, massa: 50.941, grupo: "Metal de transição", periodo: 4 },
    "Cr": { nome: "Cromo", numero: 24, massa: 51.996, grupo: "Metal de transição", periodo: 4 },
    "Mn": { nome: "Manganês", numero: 25, massa: 54.938, grupo: "Metal de transição", periodo: 4 },
    "Fe": { nome: "Ferro", numero: 26, massa: 55.845, grupo: "Metal de transição", periodo: 4 },
    "Co": { nome: "Cobalto", numero: 27, massa: 58.933, grupo: "Metal de transição", periodo: 4 },
    "Ni": { nome: "Níquel", numero: 28, massa: 58.693, grupo: "Metal de transição", periodo: 4 },
    "Cu": { nome: "Cobre", numero: 29, massa: 63.546, grupo: "Metal de transição", periodo: 4 },
    "Zn": { nome: "Zinco", numero: 30, massa: 65.38, grupo: "Metal de transição", periodo: 4 },
    "Ga": { nome: "Gálio", numero: 31, massa: 69.723, grupo: "Metal", periodo: 4 },
    "Ge": { nome: "Germânio", numero: 32, massa: 72.630, grupo: "Semimetal", periodo: 4 },
    "As": { nome: "Arsênio", numero: 33, massa: 74.922, grupo: "Semimetal", periodo: 4 },
    "Se": { nome: "Selênio", numero: 34, massa: 78.971, grupo: "Não metal", periodo: 4 },
    "Br": { nome: "Bromo", numero: 35, massa: 79.904, grupo: "Halogênio", periodo: 4 },
    "Kr": { nome: "Criptônio", numero: 36, massa: 83.798, grupo: "Gás nobre", periodo: 4 },
    "Rb": { nome: "Rubídio", numero: 37, massa: 85.468, grupo: "Metal alcalino", periodo: 5 },
    "Sr": { nome: "Estrôncio", numero: 38, massa: 87.62, grupo: "Metal alcalino-terroso", periodo: 5 },
    "Y": { nome: "Ítrio", numero: 39, massa: 88.906, grupo: "Metal de transição", periodo: 5 },
    "Zr": { nome: "Zircônio", numero: 40, massa: 91.224, grupo: "Metal de transição", periodo: 5 },
    "Nb": { nome: "Nióbio", numero: 41, massa: 92.906, grupo: "Metal de transição", periodo: 5 },
    "Mo": { nome: "Molibdênio", numero: 42, massa: 95.95, grupo: "Metal de transição", periodo: 5 },
    "Tc": { nome: "Tecnécio", numero: 43, massa: 98, grupo: "Metal de transição", periodo: 5 },
    "Ru": { nome: "Rutênio", numero: 44, massa: 101.07, grupo: "Metal de transição", periodo: 5 },
    "Rh": { nome: "Ródio", numero: 45, massa: 102.91, grupo: "Metal de transição", periodo: 5 },
    "Pd": { nome: "Paládio", numero: 46, massa: 106.42, grupo: "Metal de transição", periodo: 5 },
    "Ag": { nome: "Prata", numero: 47, massa: 107.87, grupo: "Metal de transição", periodo: 5 },
    "Cd": { nome: "Cádmio", numero: 48, massa: 112.41, grupo: "Metal de transição", periodo: 5 },
    "In": { nome: "Índio", numero: 49, massa: 114.82, grupo: "Metal", periodo: 5 },
    "Sn": { nome: "Estanho", numero: 50, massa: 118.71, grupo: "Metal", periodo: 5 },
    "Sb": { nome: "Antimônio", numero: 51, massa: 121.76, grupo: "Semimetal", periodo: 5 },
    "Te": { nome: "Telúrio", numero: 52, massa: 127.60, grupo: "Semimetal", periodo: 5 },
    "I": { nome: "Iodo", numero: 53, massa: 126.90, grupo: "Halogênio", periodo: 5 },
    "Xe": { nome: "Xenônio", numero: 54, massa: 131.29, grupo: "Gás nobre", periodo: 5 },
    "Cs": { nome: "Césio", numero: 55, massa: 132.91, grupo: "Metal alcalino", periodo: 6 },
    "Ba": { nome: "Bário", numero: 56, massa: 137.33, grupo: "Metal alcalino-terroso", periodo: 6 },
    "La": { nome: "Lantânio", numero: 57, massa: 138.91, grupo: "Lantanídeo", periodo: 6 },
    "Ce": { nome: "Cério", numero: 58, massa: 140.12, grupo: "Lantanídeo", periodo: 6 },
    "Pr": { nome: "Praseodímio", numero: 59, massa: 140.91, grupo: "Lantanídeo", periodo: 6 },
    "Nd": { nome: "Neodímio", numero: 60, massa: 144.24, grupo: "Lantanídeo", periodo: 6 },
    "Pm": { nome: "Promécio", numero: 61, massa: 145, grupo: "Lantanídeo", periodo: 6 },
    "Sm": { nome: "Samário", numero: 62, massa: 150.36, grupo: "Lantanídeo", periodo: 6 },
    "Eu": { nome: "Európio", numero: 63, massa: 151.96, grupo: "Lantanídeo", periodo: 6 },
    "Gd": { nome: "Gadolínio", numero: 64, massa: 157.25, grupo: "Lantanídeo", periodo: 6 },
    "Tb": { nome: "Térbio", numero: 65, massa: 158.93, grupo: "Lantanídeo", periodo: 6 },
    "Dy": { nome: "Disprósio", numero: 66, massa: 162.50, grupo: "Lantanídeo", periodo: 6 },
    "Ho": { nome: "Hólmio", numero: 67, massa: 164.93, grupo: "Lantanídeo", periodo: 6 },
    "Er": { nome: "Érbio", numero: 68, massa: 167.26, grupo: "Lantanídeo", periodo: 6 },
    "Tm": { nome: "Túlio", numero: 69, massa: 168.93, grupo: "Lantanídeo", periodo: 6 },
    "Yb": { nome: "Itérbio", numero: 70, massa: 173.05, grupo: "Lantanídeo", periodo: 6 },
    "Lu": { nome: "Lutécio", numero: 71, massa: 174.97, grupo: "Lantanídeo", periodo: 6 },
    "Hf": { nome: "Háfnio", numero: 72, massa: 178.49, grupo: "Metal de transição", periodo: 6 },
    "Ta": { nome: "Tântalo", numero: 73, massa: 180.95, grupo: "Metal de transição", periodo: 6 },
    "W": { nome: "Tungstênio", numero: 74, massa: 183.84, grupo: "Metal de transição", periodo: 6 },
    "Re": { nome: "Rênio", numero: 75, massa: 186.21, grupo: "Metal de transição", periodo: 6 },
    "Os": { nome: "Ósmio", numero: 76, massa: 190.23, grupo: "Metal de transição", periodo: 6 },
    "Ir": { nome: "Irídio", numero: 77, massa: 192.22, grupo: "Metal de transição", periodo: 6 },
    "Pt": { nome: "Platina", numero: 78, massa: 195.08, grupo: "Metal de transição", periodo: 6 },
    "Au": { nome: "Ouro", numero: 79, massa: 196.97, grupo: "Metal de transição", periodo: 6 },
    "Hg": { nome: "Mercúrio", numero: 80, massa: 200.59, grupo: "Metal de transição", periodo: 6 },
    "Tl": { nome: "Tálio", numero: 81, massa: 204.38, grupo: "Metal", periodo: 6 },
    "Pb": { nome: "Chumbo", numero: 82, massa: 207.2, grupo: "Metal", periodo: 6 },
    "Bi": { nome: "Bismuto", numero: 83, massa: 208.98, grupo: "Metal", periodo: 6 },
    "Po": { nome: "Polônio", numero: 84, massa: 209, grupo: "Semimetal", periodo: 6 },
    "At": { nome: "Astato", numero: 85, massa: 210, grupo: "Halogênio", periodo: 6 },
    "Rn": { nome: "Radônio", numero: 86, massa: 222, grupo: "Gás nobre", periodo: 6 },
    "Fr": { nome: "Frâncio", numero: 87, massa: 223, grupo: "Metal alcalino", periodo: 7 },
    "Ra": { nome: "Rádio", numero: 88, massa: 226, grupo: "Metal alcalino-terroso", periodo: 7 },
    "Ac": { nome: "Actínio", numero: 89, massa: 227, grupo: "Actinídeo", periodo: 7 },
    "Th": { nome: "Tório", numero: 90, massa: 232.04, grupo: "Actinídeo", periodo: 7 },
    "Pa": { nome: "Protactínio", numero: 91, massa: 231.04, grupo: "Actinídeo", periodo: 7 },
    "U": { nome: "Urânio", numero: 92, massa: 238.03, grupo: "Actinídeo", periodo: 7 },
    "Np": { nome: "Neptúnio", numero: 93, massa: 237, grupo: "Actinídeo", periodo: 7 },
    "Pu": { nome: "Plutônio", numero: 94, massa: 244, grupo: "Actinídeo", periodo: 7 },
    "Am": { nome: "Amerício", numero: 95, massa: 243, grupo: "Actinídeo", periodo: 7 },
    "Cm": { nome: "Cúrio", numero: 96, massa: 247, grupo: "Actinídeo", periodo: 7 },
    "Bk": { nome: "Berquélio", numero: 97, massa: 247, grupo: "Actinídeo", periodo: 7 },
    "Cf": { nome: "Califórnio", numero: 98, massa: 251, grupo: "Actinídeo", periodo: 7 },
    "Es": { nome: "Einstênio", numero: 99, massa: 252, grupo: "Actinídeo", periodo: 7 },
    "Fm": { nome: "Férmio", numero: 100, massa: 257, grupo: "Actinídeo", periodo: 7 },
    "Md": { nome: "Mendelévio", numero: 101, massa: 258, grupo: "Actinídeo", periodo: 7 },
    "No": { nome: "Nobélio", numero: 102, massa: 259, grupo: "Actinídeo", periodo: 7 },
    "Lr": { nome: "Laurêncio", numero: 103, massa: 266, grupo: "Actinídeo", periodo: 7 },
    "Rf": { nome: "Rutherfórdio", numero: 104, massa: 267, grupo: "Metal de transição", periodo: 7 },
    "Db": { nome: "Dúbnio", numero: 105, massa: 270, grupo: "Metal de transição", periodo: 7 },
    "Sg": { nome: "Seabórgio", numero: 106, massa: 271, grupo: "Metal de transição", periodo: 7 },
    "Bh": { nome: "Bóhrio", numero: 107, massa: 270, grupo: "Metal de transição", periodo: 7 },
    "Hs": { nome: "Hássio", numero: 108, massa: 277, grupo: "Metal de transição", periodo: 7 },
    "Mt": { nome: "Meitnério", numero: 109, massa: 278, grupo: "Metal de transição", periodo: 7 },
    "Ds": { nome: "Darmstádtio", numero: 110, massa: 281, grupo: "Metal de transição", periodo: 7 },
    "Rg": { nome: "Roentgênio", numero: 111, massa: 282, grupo: "Metal de transição", periodo: 7 },
    "Cn": { nome: "Copernício", numero: 112, massa: 285, grupo: "Metal de transição", periodo: 7 },
    "Nh": { nome: "Nihônio", numero: 113, massa: 286, grupo: "Metal", periodo: 7 },
    "Fl": { nome: "Fleróvio", numero: 114, massa: 289, grupo: "Metal", periodo: 7 },
    "Mc": { nome: "Moscóvio", numero: 115, massa: 290, grupo: "Metal", periodo: 7 },
    "Lv": { nome: "Livermório", numero: 116, massa: 293, grupo: "Metal", periodo: 7 },
    "Ts": { nome: "Tenessino", numero: 117, massa: 294, grupo: "Halogênio", periodo: 7 },
    "Og": { nome: "Oganessônio", numero: 118, massa: 294, grupo: "Gás nobre", periodo: 7 }
}

// Mapa de Posição dos Elementos (coluna, linha)
const posicoesElementos = {
    H: { col: 1, row: 1 },    He: { col: 18, row: 1 },
    Li: { col: 1, row: 2 },   Be: { col: 2, row: 2 },   B: { col: 13, row: 2 },   C: { col: 14, row: 2 },   N: { col: 15, row: 2 },   O: { col: 16, row: 2 },   F: { col: 17, row: 2 },   Ne: { col: 18, row: 2 },
    Na: { col: 1, row: 3 },   Mg: { col: 2, row: 3 },  Al: { col: 13, row: 3 },  Si: { col: 14, row: 3 },   P: { col: 15, row: 3 },   S: { col: 16, row: 3 },  Cl: { col: 17, row: 3 },   Ar: { col: 18, row: 3 },
    K: { col: 1, row: 4 },    Ca: { col: 2, row: 4 },   Sc: { col: 3, row: 4 },   Ti: { col: 4, row: 4 },   V: { col: 5, row: 4 },    Cr: { col: 6, row: 4 },   Mn: { col: 7, row: 4 },   Fe: { col: 8, row: 4 },   Co: { col: 9, row: 4 },   Ni: { col: 10, row: 4 },  Cu: { col: 11, row: 4 },  Zn: { col: 12, row: 4 },  Ga: { col: 13, row: 4 },  Ge: { col: 14, row: 4 },  As: { col: 15, row: 4 },  Se: { col: 16, row: 4 },  Br: { col: 17, row: 4 },  Kr: { col: 18, row: 4 },
    Rb: { col: 1, row: 5 },   Sr: { col: 2, row: 5 },   Y: { col: 3, row: 5 },    Zr: { col: 4, row: 5 },   Nb: { col: 5, row: 5 },   Mo: { col: 6, row: 5 },   Tc: { col: 7, row: 5 },   Ru: { col: 8, row: 5 },   Rh: { col: 9, row: 5 },   Pd: { col: 10, row: 5 },  Ag: { col: 11, row: 5 },  Cd: { col: 12, row: 5 },  In: { col: 13, row: 5 },  Sn: { col: 14, row: 5 },  Sb: { col: 15, row: 5 },  Te: { col: 16, row: 5 },  I: { col: 17, row: 5 },   Xe: { col: 18, row: 5 },
    Cs: { col: 1, row: 6 },   Ba: { col: 2, row: 6 },   'La-ref': { col: 3, row: 6 }, Hf: { col: 4, row: 6 },   Ta: { col: 5, row: 6 },  W: { col: 6, row: 6 },    Re: { col: 7, row: 6 },   Os: { col: 8, row: 6 },   Ir: { col: 9, row: 6 },   Pt: { col: 10, row: 6 },  Au: { col: 11, row: 6 },  Hg: { col: 12, row: 6 },  Tl: { col: 13, row: 6 },  Pb: { col: 14, row: 6 },  Bi: { col: 15, row: 6 },  Po: { col: 16, row: 6 },  At: { col: 17, row: 6 },  Rn: { col: 18, row: 6 },
    Fr: { col: 1, row: 7 },   Ra: { col: 2, row: 7 },   'Ac-ref': { col: 3, row: 7 }, Rf: { col: 4, row: 7 },   Db: { col: 5, row: 7 },  Sg: { col: 6, row: 7 },   Bh: { col: 7, row: 7 },   Hs: { col: 8, row: 7 },   Mt: { col: 9, row: 7 },   Ds: { col: 10, row: 7 },  Rg: { col: 11, row: 7 },  Cn: { col: 12, row: 7 },  Nh: { col: 13, row: 7 },  Fl: { col: 14, row: 7 },  Mc: { col: 15, row: 7 },  Lv: { col: 16, row: 7 },  Ts: { col: 17, row: 7 },  Og: { col: 18, row: 7 },
    La: { col: 4, row: 9 },   Ce: { col: 5, row: 9 },   Pr: { col: 6, row: 9 },   Nd: { col: 7, row: 9 },   Pm: { col: 8, row: 9 },   Sm: { col: 9, row: 9 },   Eu: { col: 10, row: 9 },  Gd: { col: 11, row: 9 },  Tb: { col: 12, row: 9 },  Dy: { col: 13, row: 9 },  Ho: { col: 14, row: 9 },  Er: { col: 15, row: 9 },  Tm: { col: 16, row: 9 },  Yb: { col: 17, row: 9 },  Lu: { col: 18, row: 9 },
    Ac: { col: 4, row: 10 },  Th: { col: 5, row: 10 },  Pa: { col: 6, row: 10 },  U: { col: 7, row: 10 },   Np: { col: 8, row: 10 },  Pu: { col: 9, row: 10 },  Am: { col: 10, row: 10 }, Cm: { col: 11, row: 10 }, Bk: { col: 12, row: 10 }, Cf: { col: 13, row: 10 }, Es: { col: 14, row: 10 }, Fm: { col: 15, row: 10 }, Md: { col: 16, row: 10 }, No: { col: 17, row: 10 }, Lr: { col: 18, row: 10 }
};

document.addEventListener('DOMContentLoaded', () => {
    const elementosHTML = document.querySelectorAll('.elemento');
    elementosHTML.forEach(elemento => {
        const simbolo = elemento.dataset.simbolo;
        const posicao = posicoesElementos[simbolo];
        if (posicao) {
            elemento.style.gridColumn = posicao.col;
            elemento.style.gridRow = posicao.row;
        }
    });
});

const elementos = document.querySelectorAll('.elemento');
const infoBox = document.getElementById('info-box');

elementos.forEach(elemento => {
    elemento.addEventListener('mouseenter', (event) => {
        const simbolo = event.target.dataset.simbolo;
        if (!simbolo) return;

        const info = dadosElementos[simbolo];

        if (info) {
            infoBox.innerHTML = `
                <h3>${info.nome} (${simbolo})</h3>
                <p><strong>N° Atômico:</strong> ${info.numero}
                <p><strong>Massa Atômica:</strong> ${info.massa}
                <p><strong>Família:</strong> ${info.grupo}
                <p><strong>Período:</strong> ${info.periodo}
            `;
            infoBox.style.display = 'block';
        }
    });

    elemento.addEventListener('mousemove', (event) => {
        infoBox.style.left = (event.pageX + 15) + 'px';
        infoBox.style.top = (event.pageY + 15) + 'px';
    });
    elemento.addEventListener('mouseleave', () => {
        infoBox.style.display = 'none';
        infoBox.innerHTML = '';
    });
});