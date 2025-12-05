


const animal = {
    name: 'zuikis',
    eat: 'morkas',
    tail: 'trumpa',
};

const colorPensObj = {
    one: 'Raudonas',
    two: 'Žalias',
    three: 'Geltonas',
};

console.log(colorPensObj.two);

// Masyvas yra objektas, skirtas saugoti vienodiems*, iš eilės sudėliotiems kintamiesiems
// * nebūtinai vienodi
const colorPens = [
    'Raudonas',
    'Žalias',
    'Geltonas',
];

console.log(colorPens);

console.log(colorPens[1]);

colorPens[1] = 85;
colorPens[7] = 'Juodas';

// 1, 7 vadinami indeksais


console.log(colorPens);
console.log(colorPens[3], colorPens.length);

const animals = [];

animals[0] = 'Bebras';
animals[1] = 'Barsukas';

console.log(animals);

animals.push('Briedis'); // dedam sekantį iš eilės elementą
animals.push('Vilkas');
animals.push('Zuikis', 'Kiškis', 'Zuikis'); // dedam kelis (arba daug) iškart
// animals.push(50, 87);
console.log(animals);


const word = 'rabarbaras';

let found = [];

for (let i = 0; i < word.length; i++) {
    if (word[i] == 'r') {
        found.push(i); // dedam "r" raidės vietą
    }
}

console.log(found);


//1. padaryti masyvą iš skaičių 55, 77, 2 (naudojant push)

const numbers = [];

numbers.push(55, 77, 2);

console.log(numbers);


// 2. padaryti masyvą iš skaičių 1, 2, 3... 99, 100 naudojant for ciklą


let numbers2 = [];

for (let i = 1; i <= 100; i++) {
    numbers2.push(i);
};

console.log(numbers2);


const h2First = document.querySelector('h2');
const h2Second = document.querySelector('h2 + h2');

console.log(h2First.innerText);
console.log(h2Second.innerText);


console.log('\nquerySelectorAll:');

const h2All = document.querySelectorAll('h2');  // node list - kuris yra masyvas
console.log(h2All[2].innerText);

console.log('\n');


for (let i = 0; i < h2All.length; i++) {
    console.log(h2All[i], h2All[i].innerText);
}

h2Second.style.color = 'crimson';

// h2All[0].style.color = 'skyblue';

for (let i = 0; i < h2All.length; i++) {
    h2All[i].style.color = 'skyblue';
}


// 3. Elemente section sukurti 3 h3 tagus su skaičiais 1, 2, 3

const section3 = document.querySelector('section');
// const hash3 = document.querySelectorAll('h3');


// for (let i = 0; i < 3; i++) {
//     hash3[i].innerText = i+1;
// }


for (let i = 1; i <= 3; i++) {

    const hash3 = document.createElement('h3');
    hash3.innerText = i;
    section3.appendChild(hash3);
}



console.log('\nGrįžtam prie "push"');

const colors = [];

colors.push('Red');
colors.push('Blue');
colors.push('Green');

console.log(colors);

colors.unshift('Black');  // prideda į pradžią

console.log(colors);































































