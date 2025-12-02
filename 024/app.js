


// fetch('https://in3.dev/inv/') // siunčia užklausa
//     .then(res => res.json()) // laukiam tada JSON gautą rezultatą
//     .then(inv => console.log(inv)); // kai yra JSON tada loginam



const invoiceJson = `{
    "number": "AB-53736408",
    "date": "2025-11-27",
    "due_date": "2025-12-08",
    "company": {
        "buyer": {
            "name": "UAB Kazlauskas ir Urbonas",
            "address": "Laisvės gatvė 79-73, Telšiai",
            "code": "19271836",
            "vat": "LT601046378",
            "phone": "863848197",
            "email": "nina68@gedminas.lt"
        },
        "seller": {
            "name": "UAB Jankauskas ir Kavaliauskas",
            "address": "Žalgirio g. 44, Jonava LT-43157",
            "code": "96103682",
            "vat": "LT711569442",
            "phone": "+37066376540",
            "email": "vasiliauskiene.sigita@osmundas.lt"
        }
    },
    "items": [
        {
            "description": "Komoda su papildoma lentyna",
            "quantity": 1,
            "price": 330,
            "discount": []
        },
        {
            "description": "Kampinė odinė sofa Ganykla su patalynės dėže",
            "quantity": 2,
            "price": 660,
            "discount": []
        },
        {
            "description": "Sulakstoma ąžuolinė kėdė Barbaras su uždengimu",
            "quantity": 1,
            "price": 90.5,
            "discount": []
        },
        {
            "description": "Komoda žalia su 4 stalčiais",
            "quantity": 6,
            "price": 240,
            "discount": []
        },
        {
            "description": "Kėdė Violeta su uždengimu",
            "quantity": 2,
            "price": 60.97,
            "discount": []
        }
    ],
    "shippingPrice": 48.5
}`;


const invoice = JSON.parse(invoiceJson);

console.log(invoice);


// Arrays ----------------------------------------------------------------------------------------------------

const animals = [
    {
        name: 'Briedis',
        age: 54
    },
    {
        name: 'Lapė',
        age: 12
    },
    {
        name: 'Vilkas',
        age: 8
    },
    {
        name: 'Kiškis',
        age: 4
    },
    {
        name: 'Erelis',
        age: 16
    },
    {
        name: 'Voverė',
        age: 3
    }
];

// 1. Pačiupinėjam visus elementus iš eilės

animals.forEach(animal => {
    console.log(animal.name);
});


// 2. Sukuriam patobulintą masyvą iš seno masyvo

const animalsPlus1Age = animals.map(animal => {
    return { ...animals, age: animal.age + 1 } // ...animal kopija seno objekto, age: užrašom ant viršaus naują age
});

console.log(animalsPlus1Age);

// 3. Surandame masyve tai kas mus domina ===> find

const wolf = animals.find(animal => {
    if (animal.name == 'Vilkas') {
        return true; // paieška nutraukta, objektas su vilku rastas
    }
    return false; // paieška eina prie sekančio objekto
});

console.log(wolf);

// 4. Suskaičiuojame kažką masyve ===> reduce

const allAges = animals.reduce((sum, animal) => {
    return sum + animal.age; //
}, 0); // 0 - pradinė sum reikšmė

console.log(allAges);

// 5. Naujo išfiltruoto masyvo sudarymas ===> filter

const youngAnimals = animals.filter(animal => {
    if (animal.age <= 10) {
        return true; // tinka pridedam prie išfiltruoto masyvo
    }
    return false; // netinka, nededam
});

console.log(youngAnimals);

// 6. Naujo surūšiuoto masyvo sudarymas ===> toSorted

const byAge = animals.toSorted((a, b) => {
    return b.age - a.age; // jeigu a > b grąžins teigiamą skaičių, jeigu a < b grąžins neigiamą
});

const byAge2 = animals.toSorted((a, b) => {
    if (a.age > b.age) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
});

console.log(byAge);

console.log(byAge, byAge2);

animals.push(
    {
        name: 'Žąsis',
        age: 2
    },
    {
        name: 'Zebras',
        age: 12
    },
        {
        name: 'Šarka',
        age: 6
    },
    {
        name: 'Silkė',
        age: 12
    }
);
 

const byName = animals.toSorted((a, b) => {
    return a.name.localeCompare(b.name, 'lt');
});

const byName2 = animals.toSorted((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

console.log(byName);

console.log(byName2);


// susortins patį animals masyvą
animals.sort((a, b) => {
    return a.name.localeCompare(b.name, 'lt');
});

console.log(animals);

console.clear();

const pack = 'XL' // S, M, L, XL
 
 
if (pack == 'S') {
    console.log('S');
}
if (pack == 'S' || pack == 'M') {
    console.log('M');
}
if (pack == 'S' || pack == 'M'|| pack == 'L') {
    console.log('L');
}
console.log('XL');
console.log('-----------------');

switch(pack) {
    case 'S' : console.log('S');
    case 'M' : console.log('M');
    case 'L' : console.log('L');
    default : console.log('XL');
}

if (pack == 'S') {
    console.log('mažas');
} else if (pack == 'M') {
    console.log('Vidutinis');
} else if (pack =='L') {
    console.log('Didelis');
} else if (pack == 'XL') {
    console.log('Labai didelis');
}

console.log('-----------------');

switch(pack) {
    case 'S' : 
        console.log('Mažas');
        break;
    case 'M' :
        console.log('Vidutinis');
        break;
    case 'L' :
        console.log('Didelis');
        break;
    case 'XL' :
        console.log('Labai didelis');
};



















