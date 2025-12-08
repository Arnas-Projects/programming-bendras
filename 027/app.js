


// 1. "Bebras nori banano" kiek yra 'a' raidžių?
console.log('Task 1');

const zodis = "Bebras nori banano";

let LettersA = 0;

for (let i = 0; i < zodis.length; i++) {
    if (zodis[i] == 'a') {
        LettersA++;
    }
};

console.log(LettersA);



// 2. "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai
console.log('\nTask 2');

const BebroArray = [];

for (let i = 0; i < zodis.length; i++) {
    BebroArray.push(zodis[i]);
}

console.log(BebroArray);



// 3. "Bebras nori banano" sukurti masyvą, kurio elementai sakinio raidės ir tarpai, a raidžių nedėti
console.log('\nTask 3');

const BebroArray2 = [];

// 1-as variantas
for (let i = 0; i < zodis.length; i++) {
    if (zodis[i] == 'a') {
        continue
    } else {
        BebroArray2.push(zodis[i]);
    }
}

console.log(BebroArray2);

/* 

TRUE || nesvarbu kas čia =====> visada bus TRUE 

FALSE && nesvarbu kas čia =====> visada bus FALSE

*/


// 2-as variantas
// for (let i = 0; i < zodis.length; i++) {
//     if (zodis[i] != 'a') {
//         BebroArray2.push(zodis[i]);
//     }
// }

// console.log(BebroArray2);



// 3-ias variantas

// const lettersArrayWOA = [];
// for (let i = 0; i < where.length; i++) {

//     where[i] == 'a' || lettersArrayWOA.push(where[i]);

//     where[i] == 'a' ==> true
//     po || operatoriaus push nedaromas

//     where[i] == 'a' ==> false
//     po || operatoriaus push daromas


//     if (where[i] == 'a') {
//         continue
//     }

//     lettersArrayWOA.push(where[i]);
// }

// console.log(lettersArrayWOA);







// 
console.log('\nTask 4');




const masyvas = [
    45,
    87,
    'a',
    32,
    74,
    53
];

// let suma = 0;
// console.log(typeof suma == 'number');


// 1-as variantas - blogas, nes yra hardcodinamas kintamasis masyvas[i] == 'a'
// for (let i = 0; i < masyvas.length; i++) {
//     if (masyvas[i] == 'a') {
//         continue
//     } else {
//         suma += masyvas[i]
//     }
// }

// console.log(suma);


let sumOfNumbers = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (typeof masyvas[i] == 'number') {
        sumOfNumbers += masyvas[i];
    }
}

console.log(sumOfNumbers);




// suskaičiuoti skaičių sumą (visų)
console.log('\nTask 5');


const masyvas2 = [
    '45',
    87,
    32,
    '74',
    53
];



let suma2 = 0;

for (let i = 0; i < masyvas2.length; i++) {
    if (typeof masyvas2[i] == 'number') {
        suma2 += masyvas2[i];  // jeigu skaičius, tai paprastai sumuojam
    } else {
        const asNumber = parseInt(masyvas2[i]);  // jei ne skaičius, padaro skaičiumi
        suma2 += asNumber;  // ir sumuoja
    }
}

console.log(suma2);



// suskaičiuoti skaičių sumą (visų) ---------------------------------------------------------------------
console.log('\nTask 6');

const allH2 = document.querySelectorAll('h2');

const h2FirstNum = parseInt(allH2[0].innerText);
const h2SecondNum = parseInt(allH2[1].innerText);

allH2[2].innerText = h2FirstNum + h2SecondNum;


console.log(allH2[2].innerText);



// HTML'o X pakeisti atitinkamu skaičiumi ---------------------------------------------------------------------
console.log('\nTask 7');


const allH3 = document.querySelectorAll('h3');

const h3FirstNum = parseInt(allH3[0].innerText);
const h3LastNum = parseInt(allH3[2].innerText);

allH3[1].innerText = h3LastNum - h3FirstNum;

console.log(allH3[1].innerText);


// HTML'o X pakeisti atitinkamu skaičiumi ---------------------------------------------------------------------
console.log('\nTask 8');

// 1-as variantas
const mygtukas1 = document.querySelector('#nr1');

// const clickButton = _ => {
//     console.log(mygtukas1.innerText);
// };+

// mygtukas1.addEventListener('click', clickButton);



// 2-as variantas
// mygtukas1.addEventListener('click', _ => {
//     console.log(mygtukas1.innerText);
// });


// 3-ias variantas
mygtukas1.addEventListener('click', eventas => {
    // event ===> event objektas (ataskaita apie įvykį)
    console.log(eventas.target);
    console.log(eventas.target.innerText);
});


































