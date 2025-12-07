// 1. Suskaičiuoti kiek masyve yra lyginiu skaičių
// let numbers2 = [2, 7, 4, 9, 12, 15, 18];
// Parašyti funkciją, kuri gauna masyvą kaip argumentą ir grąžina kiek masyve yra lyginių skaičių.
// Rezultatas: 4

let numbers2 = [2, 7, 4, 9, 12, 15, 18];

function countEven(numbers2) {
  let count = 0;

  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEven(numbers2)); // 4


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

let pirkiniuKrepselis = [
  { name: "Milk", price: 2.50, count: 2 },
  { name: "Bread", price: 1.20, count: 3},
  { name: "Eggs", price: 3.00, count: 1 },
  { name: "Bacon", price: 3.50, count: 2 }
];


function finalPrice(cart) {
  let sum = 0;

  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].count;
  }

  if (sum > 10) {
    sum = sum * 0.9;
  }

  return sum.toFixed(2);
}

let gruodzio5dPirkiniai = finalPrice(pirkiniuKrepselis); // 10.53 
let gruodzio6dPirkiniai = finalPrice(pirkiniuKrepselis); // 16.74


console.log(finalPrice(pirkiniuKrepselis)); // 10.53

// 3. Teigiamų skaičių suma
// Duotas masyvas:
// let numbers = [4, -2, 7, -1, 0, 5];
// Užduotis:
// Parašyti funkciją, kuri suskaičiuoja tik teigiamų skaičių sumą.
// Rezultatas: 4 + 7 + 5 = 16

let numbers = [4, -2, 7, -1, 0, 5];

function sumPositive(skaiciai) {
  let teigiamuSuma = 0;

  for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] > 0) {
      teigiamuSuma += skaiciai[i];
    }
  }
  
  return teigiamuSuma;
}

console.log(sumPositive(numbers)); // 16


// 4. Atrinkti masyvo elementus, kurie ilgesni nei 4 raidės:
//let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];
//Atspausdinti konsolėje ilgų žodžių masyvą

let zodziai = ["labas", "rytas", "tu", "as", "programavimas", "trys"];

let ilgiZodziai = [];

for (let i = 0; i < zodziai.length; i++) {
    if (zodziai[i].length > 4) {
        ilgiZodziai.push(zodziai[i]);
    }
}

console.log(ilgiZodziai); // ["labas", "rytas", "programavimas"]


// 5. Sugeneruoti (atspausdinti konsolėje) tekstą: 15-14-12-11-10-9-8
// (atkrepkit dėmesį kad nėra '13')

let stringas = '';

for(i=15; i>=8; i--) {
    if (i == 13) {
        continue
    }

    // if (i>8) {
    //         stringas += i + '-';
    //     } else {
    //             stringas += i;
    //         }

    stringas += (i > 8 ) ? (i + '-') : i;
}

console.log(stringas); // 15-14-12-11-10-9-8


//6.  Parašykite kodą, kuris suskaičiuos kiek kartų raidė 'a' arba 'A' pasikartoja duotame tekste.
// let tekstas  = 'Ar norėtum arbatos ar dar kavos.'


let tekstas  = 'Ar norėtum arbatos ar dar kavos.';
let pasikartojoRaideA = 0; 
for (let i = 0; i < tekstas.length; i++) {
  // if (tekstas[i] == 'a' || tekstas[i] == 'A') {
  if (tekstas[i].toLocaleLowerCase() === "a") {
    pasikartojoRaideA ++;
  }
}

console.log(pasikartojoRaideA ); // 6


