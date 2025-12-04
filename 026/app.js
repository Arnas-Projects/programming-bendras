


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



console.log('Refleksija');
console.log('\n');


const namas = {
    kaminas: 'yra didelis',
    durys: 'metalinės',
}


console.log(structuredClone(namas));  // gilus kopijavimas
console.log({ ...namas });  // seklus kovijavimas

namas.langai = 5;

console.log(namas);


const unshuffled = ['hello', 'a', 't', 'q', 1, 2, 3, { cats: true }];

const shuffled = unshuffled.sort(() => Math.random() - 0.5); // atsitiktinis išdėstymas paremtas rūšiavimu
console.log(shuffled);



//---------------------------------------------------------------------------------------------------------------

const flat1 = {
    number: 45,
    completion: "euroremontas",
    balcony: false,
    rooms: [
        { name: 'virtuvė', m2: 10 },
        { name: 'miegamasis', m2: 15 },
        { name: 'svetainė', m2: 18 },
    ],
    price: 75500,
};

const flat2 = {
    number: 12,
    completion: "uncompleted",
    balcony: true,
    rooms: [
        { name: 'virtuvė', m2: 9 },
        { name: 'miegamasis', m2: 12 },
        { name: 'svetainė', m2: 20 },
        { name: 'vaikų kambarys', m2: 14 },
    ],
    price: 92500,
};


if (flat1.rooms.length > flat2.rooms.length) {
    console.log(flat1.number, 'Butas 1 turi daugiau kambarių');
} else {
    console.log(flat2.number, 'Butas 2 turi daugiau kambarių');
}


const oneSqPrice = flat => {

    const size = flat.rooms.reduce((counter, room) => {
        return counter + room.m2;
    }, 0);

    return flat.price / size;
}

if (oneSqPrice(flat1) > oneSqPrice(flat2)) {
    console.log(flat1.number);
} else {
    console.log(flat2.number);
}


//---------------------------------------------------------------------------------------------------------------
console.log('\nKartojimas');
console.log('\n');


const skaiciusA = rand(1, 45);
const skaiciusB = rand(1, 45);

console.log('A', skaiciusA, 'B', skaiciusB);

if (skaiciusA > skaiciusB) {
    console.log('Didesnis A');  // taip
} else {
    console.log('Didesnis B');  // ne
};


// Duoti random (nuo 1 iki 25) skaičiai A1 A2 ir B1 B2
// Išrinkti didesnį iš A ir didesnį iš B ir pasakyti kuris mažesnis// 8 ir 7 - 9 ir 4 ==> 8 9 ==> 8
// pateikti skaičių


const A1 = rand(1, 25);
const A2 = rand(1, 25);
const B1 = rand(1, 25);
const B2 = rand(1, 25);

console.log('A1', A1, 'A2', A2, 'B1', B1, 'B2', B2);

let aBig;
let bBig;

if (A1 > A2) {
    aBig = A1;
    if (B1 > B2) {
        bBig = B1;
    } else {
        bBig = B2;
    }
} else {
    aBig = A2;
    if (B1 > B2) {
        bBig = B1;
    } else {
        bBig = B2;
    }
}

// console.log('\n','A1', A1, 'A2', A2, 'B1', B1, 'B2', B2);
// console.log('\n','A mazesnis', aBig, 'B mazesnis', bBig);

if (aBig < bBig) {
    console.log('\n', 'A', aBig, 'B', bBig, 'A mažesnis');
} else {
    console.log('\n', 'A', aBig, 'B', bBig, 'B mažesnis');
}

// ALTERNATIVE ROUTE
console.log('ALTERNATIVE ROUTE');

if ((A1 > A2 ? A1 : A2) > (B1 > B2 ? B1 : B2)) {
    console.log('B yra mažesnis')
} else {
    console.log('A yra mažesnis')
}


// ALTERNATIVE ROUTE 2
console.log('ALTERNATIVE ROUTE 2');

const A = A1 > A2 ? A1 : A2;

const B = B1 > B2 ? B1 : B2;

const rez = A < B ? A : B;

console.log('A', A, 'B', B, 'Rezultatas:', rez);



// ALTERNATIVE ROUTE 3
console.log('ALTERNATIVE ROUTE 3');
const rez2 = Math.min(Math.max(A1, A2), Math.max(B1, B2));

console.log(rez, rez2);


// ALTERNATIVE ROUTE 4
console.log('ALTERNATIVE ROUTE 4');


let biggerA;
let biggerB;
let small;

if (A1 > A2) {
    biggerA = A1;
} else {
    biggerA = A2;
}

if (B1 > B2) {
    biggerB = B1;
} else {
    biggerB = B2;
}

if (biggerA < biggerB) {
    small = biggerA;
} else {
    small = biggerB;
}


console.log(rez, rez2, small);


console.log('\nTask || &&');

const random1 = rand(1, 17);
const random2 = rand(1, 17);

console.log(random1, random2);

if (random1 > 11 && random2 > 11) {
    console.log(random1, random2, 'TAIP');
} else {
    console.log(random1, random2, 'NE');
};


if (random1 > 14 || random2 > 14) {
    console.log(random1, random2, 'TAIP');
} else {
    console.log(random1, random2, 'NE');
};


// CIKLAI -----------------------------------------------------------------------------------------------------------
console.log('\nCIKLAI');

let zodis = "Karakumai";
let word2 = '';
let word3 = '';

for (let i = 0; i < zodis.length; i = i + 2) { // arba i = i + 2 ;  einam kas du
    word2 = word2 + zodis[i];
}

for (let i = 0; i < zodis.length; i++) {
    if (i % 2) {
        continue;
    }
    word3 = word3 + zodis[i];
};

console.log(word2, word3);





































































