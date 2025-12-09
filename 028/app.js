


// ciklas cikle. "Kotleto valgymas"

const kasniu = 7;
const kramtymo = 4;

for (let i = 1; i <= kasniu; i++) {  // i skaičiuoja kąsnius

    for (let j = 1; j <= kramtymo; j++) {  // j skaičiuoja kramtymus

        console.log('kasnis nr', i, 'kramtom', j, 'kartą');
    }

};

console.clear();

console.log('\n cicklas cikle - masyvai');
console.log('\n');


const masyvas = [
    [5, 9],
    [8, 0, 9, 7],
    [1, 6, 3]
];

// console.log(masyvas);

for (let i = 0; i < masyvas.length; i++) {

    for (let j = 0; j < masyvas[i].length; j++) {

        console.log(masyvas[i][j]);
    }

}

console.clear();


//

const masyvasB = [
    [5, 9],
    ['C', 'B', 3],
    [8, 0, 9, 7],
    [1, '', 3]
];
// kokia skaičių suma?

let suma = 0;

for (let i = 0; i < masyvasB.length; i++) {

    for (let j = 0; j < masyvasB[i].length; j++) {

        if (typeof masyvasB[i][j] == 'number') {
            suma += masyvasB[i][j];
        }
    }
}


masyvasB.forEach(masyvoEile => {

    masyvoEile.forEach(number => {

        if (typeof number == 'number') {
            suma += number;
        }
    });
});


console.log(suma);


const sq1 = document.querySelector('.sq1');
const sq2 = document.querySelector('.sq2');


sq1.addEventListener('click', e => {
    setTimeout(_ => {
        e.target.style.backgroundColor = 'orange';
    }, 1000);
});


sq2.addEventListener('click', e => {
    e.stopPropagation();  // stabdo evento plitimą į tėvinius elementus
    e.target.style.backgroundColor = 'crimson';
});


const aTag = document.querySelector('a');

aTag.addEventListener('click', e => {
    e.preventDefault();  // stabdo default'inį tago evento veikimą
    e.target.innerText = 'Gal neik';
    setTimeout(_ => {
        window.location.href = e.target.href;  // atidaro puslapį e.target.href (tago 'a' linkas)
    }, 2000);
});

const fun = _ => {
    document.querySelector('body').style.backgroundColor = 'gray';
}

setTimeout(fun, 3000);  // fun ===> funkcija, 3000 ===> laikas ms


// inline variantas
// setTimeout(_ => {
//     document.querySelector('body').style.backgroundColor = 'white'
// }, 3000);



const h1Tag = document.querySelector('h1');
const h2Tag = document.querySelector('h2');

let count = 0;
let count2 = 0;

const add1 = _ => {
    count++;
    h1Tag.innerText = count;
};

const add2 = _ => {
    count2++;
    h2Tag.innerText = count2;
};

// setInterval(add1, 1);
// setInterval(add2, 1000);

const intId1 = setInterval(add1, 1);
const intId2 = setInterval(add2, 1000);

setTimeout(_=> {
    // nutraukia veikimą
    clearInterval(intId1);
    clearInterval(intId2);
}, 10000);















