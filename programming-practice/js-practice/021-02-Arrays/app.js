


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

console.log(animals);

// ieškome vilko

let VilkasFound = -1;

for (let i = 0; i < animals.length; i++) {

    // animals visi žvėrys
    // animals[i] konkretus 'itasis' žvėris, kol ciklas sukasi 1, 2, 3... ir t.t.
    // animals[i].name konkretaus 'itojo' žvėries vardas

    if (animals[i].name == 'Vilkas') {
        VilkasFound = i+1;
        break;
    }
};

console.log('Vilko nr.:', VilkasFound);


const pencils = [
    {
        color: 'Raudonas',
        size: 12
    },
    {
        color: 'Mėlynas',
        size: 8
    },
    {
        color: 'Žalias',
        size: 15
    },
    {
        color: 'Geltonas',
        size: 7
    },
    {
        color: 'Juodas',
        size: 10
    },
    {
        color: 'Violetinis',
        size: 9
    },
    {
        color: 'Oranžinis',
        size: 11
    }
];


// Marytė paišė paišė ir supaišė. Kuris Marytės pieštukas mėgstamiausias?


let ShortestPencilSize = pencils[0].size;
let ShortestPencilName = pencils[0].color;

for (let i = 0; i < pencils.length; i++) {
    if (pencils[i].size < ShortestPencilSize) {
        ShortestPencilSize = pencils[i].size;
        ShortestPencilName = pencils[i].color;
    }
}

console.log(ShortestPencilName ,ShortestPencilSize);



// ALTERNATIVE SOLUTION

let favorite = null;  // dar nežinom, koks pieštukas, todėl joks (null) pieštukas

for (let i = 0; i < pencils.length; i++) {
    if (favorite === null) {                    // jeigu dar neturime favorito,
        favorite = pencils[i];                  // tai favoritu padarom pirmą pasitaikiusį pieštuką
    } else {                                    // jeigu turime favoritą, tai su kita ciklo iteracija
        if (favorite.size > pencils[i].size) {  // lyginam favoritą su sekančiu pieštuku 
            favorite = pencils[i];              // jei sekantis pieštukas geresnis nei favoritas - tą sekantį padarom favoritu
        }
    }
}

console.log(favorite.color);



// Alternative solution 2

let trumpiausias = pencils[0];
 
for (let i = 1; i < pencils.length; i++) {
    if (pencils[i].size < trumpiausias.size) {
        trumpiausias = pencils[i];
    }
}

console.log(trumpiausias.color, trumpiausias.size);


// Marytė sudėliojo savo pieštukus į vieną liniją. Kokio ilgumo linija gavosi?

let line = 0;

for (let i = 0; i < pencils.length; i++) {
    // line = line + pencils[i].size;
    line += pencils[i].size;
}

console.log(line);


// Marytė geltoną pieštuką išmetė per balkoną. Likusius pieštukus sudėliojo į vieną liniją. Kokio ilgumo linija?


// Sprendimas veikia, bet tai nėra gera praktika, kadangi tai modifikuoja masyvą ir padaro vieną iš objektų false

// let line2 = 0;

// for (let i = 0; i < pencils.length; i++) {

//     if (pencils[i].color == 'Geltonas') {
//         pencils[i] = false;
//     } else {
//         line2 += pencils[i].size;
//     }
// }

// console.log(line2);


// let line3 = 0;

// for (let i = 0; i < pencils.length; i++) {

//     if (pencils[i].color != 'Geltonas') {
//         line3 += pencils[i].size;
//     }
// }
// console.log(line3);



let line4 = 0;

for (let i = 0; i < pencils.length; i++) {

    if (pencils[i].color == 'Geltonas') {
        continue;
    }
    line4 += pencils[i].size;
}

console.log(line4);


// Bloka praktika, nes nėra skliaustų, bet sintaksė teisinga
// jeigu viena eilutė, galima praleisti riestinius skliaustus

if (true) console.log('Taip');
else console.log('Ne');



// ------------------------------------------------------------------------------------------------------------------------
// FILTRAVIMAS

const OldAnimals = [];  // tiems kas vyresni nei 10 metų

for (let i = 0; i < animals.length; i++) {
    if (animals[i].age > 10) {
        OldAnimals.push(animals[i]);
    }
}

console.log(OldAnimals);



console.log('\nTask - Marytės pieštukai');

// Marytė susirinko pieštukus, ilgesnius nei 10 ir išėjo. Kokie pieštukai liko kambaryje? (filtravimas)

const LeftPencils = [];

for (let i = 0; i < pencils.length; i++) {
    if (pencils[i].size <= 10) {
        LeftPencils.push(pencils[i]);
    }
};

console.log(LeftPencils);



// RŪŠIAVIMAS

// Bubble sort pencils by size

for (let i = 0; i < pencils.length - 1; i++) {

    for (let j = 0; j < pencils.length - 1 - i; j++) {

        if (pencils[j].size > pencils[j + 1].size) {
            const temp = pencils[j];
            pencils[j] = pencils[j + 1];
            pencils[j + 1] = temp;
        }
    }
}

 

console.log(pencils);

























































































































