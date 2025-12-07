





// Task #1 ----------------------------------------------------------------------------------------------------
console.log('\nTask #1');
// 1. Suskaičiuoti kiek masyve yra lyginiu skaičių
// let numbers2 = [2, 7, 4, 9, 12, 15, 18];
// Parašyti funkciją, kuri gauna masyvą kaip argumentą ir grąžina kiek masyve yra lyginių skaičių.
// Rezultatas: 4

// let numbers2 = [2, 7, 4, 9, 12, 15, 18];
// let lyginis = 0;

// for (i = 2; i < numbers2.length; i++) {
//     if (i % 2 == 0) {
//         lyginis++
//     }
// }

// console.log(lyginis);

let numbers2 = [2, 7, 4, 9, 12, 15, 18];
 
 
const newNumbers2Array = numbers2.filter((number) => {
  if (number % 2 == 0) {
    return true; // tinka, pridedam prie išfiltruoto masyvo
  }
  return false; // netinka, nededam
});
 
console.log(newNumbers2Array);
console.log(newNumbers2Array.length);




// Task #2 ----------------------------------------------------------------------------------------------------
console.log('\nTask #2');
// 2. Pirkinių krepšelis
// Sukurkite funkciją, kuri priima masyvą (kaip argumentą) su prekių objektais:

// let pirkiniuKrepselis = [
//   { name: "Milk", price: 2.00, count: 2 },
//   { name: "Bread", price: 1.20, count: 1 },
//   { name: "Eggs", price: 3.00, count: 1 },
//   { name: "Bacon", price: 3.50, count: 1 }
// ]

// Apskaičiuoti bendrą krepšelio kainą.
// Jeigu bendra suma > 10 €, taikyti 10% nuolaidą.
// Grąžinti galutinę sumą, suapvalintą iki 2 skaičių po kablelio


let sum = 0;

let pirkiniuKrepselis = [
  { name: "Milk", 
    price: 2.00, 
    count: 2 },
  { name: "Bread", 
    price: 1.20, 
    count: 1 },
  { name: "Eggs", 
    price: 3.00, 
    count: 1 },
  { name: "Bacon", 
    price: 3.50, 
    count: 1 },
];


const krepselioKaina = pirkiniuKrepselis.reduce((sum, krepselis) => {
  return sum + krepselis.price * krepselis.count; // įrašo naują sum reikšmę
}, 0); // 0 - pradinė sum reikšmė

console.log(krepselioKaina);

let nuolaida;

if (krepselioKaina > 10) {
    nuolaida = krepselioKaina * 0.9;
}

console.log(nuolaida.toFixed(2), typeof nuolaida);



// Task #3 ----------------------------------------------------------------------------------------------------
console.log('\nTask #3');
// 3. Teigiamų skaičių suma
// Duotas masyvas:
// let numbers = [4, -2, 7, -1, 0, 5];
// Užduotis:
// Parašyti funkciją, kuri suskaičiuoja tik teigiamų skaičių sumą.
// Rezultatas: 4 + 7 + 5 = 16

let numbers = [4, -2, 7, -1, 0, 5];

const positiveNumbers = (number) => {
    if (number > 0) {
        return true;
    }
}

console.log(positiveNumbers());

const masyvoSuma = numbers.reduce((sum, teigiamas) => {
    return sum + teigiamas;
}, 0);

console.log(masyvoSuma);



// const newNumbersArray = numbers.filter((number) => {
//   if (number > 0) {
//     return true; // tinka, pridedam prie išfiltruoto masyvo
//   }
//   return false; // netinka, nededam
// });
 
// console.log(newNumbersArray);
 
 
// const numbersSum = newNumbersArray.reduce((sum, teigiamas) => {
//   return sum + teigiamas; // įrašo naują sum reikšmę
// }, 0); // 0 - pradinė sum reikšmė
 
// console.log(numbersSum);
 




// Task #4 ----------------------------------------------------------------------------------------------------
console.log('\nTask #4');
// 4. Atrinkti masyvo elementus, kurie ilgesni nei 4 raidės:
//let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];
//Atspausdinti konsolėje ilgų žodžių masyvą

let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];

const newZodziaiArray = zodziai.filter((zodis) => {
  if (zodis.length > 4) {
    return true; // tinka, pridedam prie išfiltruoto masyvo
  }
  return false; // netinka, nededam
});
 
console.log(newZodziaiArray);





// Task #5 ----------------------------------------------------------------------------------------------------
console.log('\nTask #5');
// 5. Sugeneruoti (atspausdinti konsolėje) tekstą: 15-14-12-11-10-9-8
// (atkrepkit dėmesį kad nėra '13')

// let digitsArray = [];

// for (i = 15; i >= 8; i--) {
//     digitsArray.push(i);
//     if (i == 13) {
//         digitsArray.pop();
//         // continue;
//     }
// }

// console.log(digitsArray);


const digitsArray = [];
for (let i = 15; i >= 8; i--) {
    if (i == 13) {
        continue;
    }
    digitsArray.push(i);
}
 
console.log(digitsArray.join('-'));

// let skEiga = '15-14-12-11-10-9-8';
 
// for (let i = 8; i < skEiga.length; i++) {
 
//     if (allAnimalsLi[i].innerText == 'Pelėda' || allAnimalsLi[i].innerText == 'Gaidys') {
//         continue; // pradeda naują iteraciją (ciklo prasukimą) toliau +1
//     }
 
//     allAnimalsLi[i].style.color = 'orange';
// }



// let numbers2 = [];

// for (let i = 1; i <= 100; i++) {
//     numbers2.push(i);
// };

// console.log(numbers2);










// Task #6 ----------------------------------------------------------------------------------------------------
console.log('\nTask #6');
//6.  Parašykite kodą, kuris suskaičiuos kiek kartų raidė 'a' arba 'A' pasikartoja duotame tekste.
// let tekstas  = 'Ar norėtum arbatos ar dar kavos.'

let tekstas = 'Ar norėtum arbatos ar dar kavos.';

let raides = [];

for (let i = 0; i < tekstas.length; i++) {
    if (tekstas[i] == 'a' || tekstas[i] == 'A'){
        raides.push(i);
    }
}

console.log(raides.length);





// Task #7 ----------------------------------------------------------------------------------------------------
console.log('\nTask #7');














// Task #8 ----------------------------------------------------------------------------------------------------
console.log('\nTask #8');
























