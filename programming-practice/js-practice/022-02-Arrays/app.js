


const numbersArray = [45, 5, 87, 96, -1, 51, 0, 36];


// rasti 96 indeksą

let FoundNumberIndex = -1;


// forEach pavyzdžiui šitos const funkcijos nebereik

// const FoundNumberFunction = (number, i) => {
//     if (number == 96) {
//         FoundNumberIndex = i;
//     }
// };


// for (let i = 0; i < numbersArray.length; i++) {
//     FoundNumberFunction(numbersArray[i], i);
// };

// for analogija
// numbersArray.forEach(FoundNumberFunction);

// Teisingas forEach variantas
numbersArray.forEach((number, i) => {
    if (number == 96) {
        FoundNumberIndex = i;
    }
});

console.log(FoundNumberIndex);


const animals = [
    {
        name: 'Briedis',
        age: 54,
    },
    {
        name: 'Lapė',
        age: 12,
    },
    {
        name: 'Vilkas',
        age: 8,
    },
    {
        name: 'Kiškis',
        age: 4,
    },
    {
        name: 'Erelis',
        age: 16,
    },
    {
        name: 'Voverė',
        age: 3,
    },
];

console.log('\n');
console.log(animals);


// Kiek Vilkui metų - spręsti naudojant forEach
console.log('\nTask - Vilko metai');

let VilkoMetai;  // undefined
let VilkoIndex = -1;

// Apie kintamųjų reikšmės priskyrimu
// ----------------------------------------------------------------------------------
// 1. undefined --->  nepriskiriam undefined, kai turim primityvų tipą: number, string
// 2. -1 --->  priskiriam -1, kai skaičiuojam indeksus
// 3. null --- >  priskiriam null, kai turim objektą, nes 'null' yra objektas, kuris neegzistuoja
// 4. let bla bla = 0; ---> priskiriam pradinę reikšmę, dažniausiai 0, jei darome agregacijas (skaičiavimus);


animals.forEach((zveris, i) => {
    if (zveris.name == 'Vilkas') {
        VilkoMetai = zveris.age;
        VilkoIndex = i;
    }
});

console.log('Vilko amžius:', VilkoMetai, 'Vilko indeksas +1:', VilkoIndex + 1);


// Koks visų gyvūnų bendras amžius? Susumuoti visus metus

let GyvunuAmzius = 0;

// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].age) {
//         GyvunuAmzius += animals[i].age;
//     }
// }

// console.log(GyvunuAmzius);

animals.forEach(zveriukas => {
    GyvunuAmzius += zveriukas.age;
});

console.log(GyvunuAmzius);


// Koks visų gyvūnų amžius vidurkis? 

let vidurkis = GyvunuAmzius / animals.length;

console.log(Number(vidurkis.toFixed(2)));

console.log('Gyvūnų amžiaus vidurkis:',
    Number((GyvunuAmzius / animals.length).toFixed(2)),
    typeof Number((GyvunuAmzius / animals.length).toFixed(2)));



// 'find' dalykas masyvuose

const KiskisFound = animals.find(beast => {
    let ArTas;
    if (beast.name == 'Kiškis') {
        ArTas = true;
    } else {
        ArTas = false;
    }
    return ArTas;
});

console.log(KiskisFound);


const LapeFound = animals.find(gyvunas => gyvunas.name == 'Lapė');

console.log(LapeFound);


// OBJEKTO DESTRUKTURIZACIJA
// Pasirenkame objekto (šiuo atveju Lapės objekto, iš animals masyvo), kokią nors savybę

// 1-as variantas
const LapesMetai1 = animals.find(gyvunas => gyvunas.name == 'Lapė').age;

console.log(LapesMetai1);


// 2-as variantas ---> naudos dėstytojas
const { age: LapesMetai2, name } = animals.find(gyvunas => gyvunas.name == 'Lapė');

console.log(LapesMetai2, name);



// 'map' metodas masyvuose
// atkreipti dėmesį, kad tokiu atveju po 'map' visada susikuria naujas masyvas. Nes 'map' grąžina - return !!

// 1-as variantas
const animalsAged1Year = animals.map(zveriukas => {

    const PasenesZveris = {};
    PasenesZveris.name = zveriukas.name;
    PasenesZveris.age = zveriukas.age + 1;
    return PasenesZveris;
});

console.log(animalsAged1Year);

console.log('\n');

// 2-as variantas - su 'spread ...'
const animalsAged1YearA = animals.map(zveriukas => ({ ...zveriukas, age: zveriukas.age + 1 }));

console.log(animalsAged1YearA);

console.log('\n');
// panagrinėkime 'spread'

const ufo1 = {
    speed: 500,
    size: 'Big',
    power: 2000
};

const ufo2 = ufo1;  // priskyrimas by reference. T.y. naujo mes nesukuriam. Pakeisim vienam obj savybę - pakeisim ir kitam

const ufo3 = { ...ufo1 }; // naujas objektas - sukurta kopija. Atitinka ---> {speed: 500, size: 'Big', power: 200}

const ufo4 = {...ufo1, size: 'Small' }; // size: 'Small', overwritina prieš tai buvusią savybės reikšmę 'Big'

ufo2.power = 3000;


console.log(ufo1, ufo2, ufo3, ufo4);

















































