


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}







// 1. Duotas žodis "Bebras". Atspausdinti konsolėje po vieną raidę, visas raides

const word = 'Bebras';
let out = '';

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    out += word[i] + '\n';
}

console.log(out);


// 2. Duotas žodis "Baravykas". Reikia HTML žodį atspausdinti stulpeliu

const h2Cycle = document.querySelector('h2');
const word2 = 'Baravykas';

// 1as sprendimo būdas
for (let i = 0; i < word2.length; i++) {
    h2Cycle.innerText += word2[i] + '\n';
}

// 2as sprendimo būdas
const word3 = 'Akvaparkas';

for (let i = 0; i < word3.length; i++) {
    const divas = document.createElement('div'); // sukuriam kiekvienai raidei divą
    divas.innerText = word3[i]; // pridedam į tą divą raidę
    h2Cycle.appendChild(divas); // divą su raide įkeliam į h2 tagą
}


// do, while ciklas
console.log('\ndo, while ciklas');
console.log('\n');

let number1;

do {

    number1 = rand(0, 10);
    console.log(number1);

} while (number1 > 5);


// 3.
console.log('\n#3');

let coin;

do {

    coin = rand(0, 1) ? 'H' : 'S';
    console.log(coin);

} while (coin != 'H');

/*

    == <---> !=
    > <---> <=
    < <---> >=
    || <---> &&

*/

// 4.
console.log('\n#4');

let times = 0;
let coin2;

let saugiklis = 100;


do {

    coin2 = rand(0, 1) ? 'H' : 'S';
    console.log(coin2);
    if (coin2 == 'H') {
        times++;
    }

    saugiklis--;
    if (!saugiklis) {
        console.log('Suveikė saugiklis');
        break;
    }

} while (times < 3);

console.log('\nCIKLAI for');


for (let i = 0; i < 10; i++) {
    console.log('Labas', i);

    saugiklis--;
    if (!saugiklis) {
        console.log('Saugiklis activated');
        break;
    }

}


























