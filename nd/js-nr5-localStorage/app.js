


/*

    Yra trys mygtukai: žalias, mėlynas ir raudonas. Paspaudus vieną iš mygtukų jo spalva įsirašo
    į localStorage. Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai

*/
console.log('Task 1');


// 1 etapas

const greenColorSq = document.createElement('div');
greenColorSq.classList.add('.green-div');


// 2 etapas
const renderSqColor = _ => {
    const olTag = document.querySelector('ol.color-list')
    olTag.innerHTML = '';

    colorButton1.forEach(color => {
        const liTag = document.createElement('li');
        liTag.innerText = color;
        olTag.appendChild(liTag);
    });
};


// 3 etapas
let colorButton1;

colorButton1 = localStorage.getItem('colors_storage');

console.log(colorButton1);


// 4 etapas
if (null === colorButton1) {
    colorButton1 = [];
} else {
    colorButton1 = JSON.parse(colorButton1);
};

console.log(colorButton1);


// 5 etapas
const button1Tag = document.querySelector('#btn1');

button1Tag.addEventListener('click', _ => {

    colorButton1.push(greenColorSq);
    const changingColorsToString = JSON.stringify(colorButton1);
    localStorage.setItem('colors_storage', changingColorsToString);
    renderSqColor();
});

console.log(colorButton1);

renderSqColor();


// const renderList = _ => {

//     const olTag = document.querySelector('ol');
//     olTag.innerHTML = '';  // išvalau ol elementą

//     daugSkaiciu.forEach(skaicius => {

//         const liTag = document.createElement('li');
//         liTag.innerText = skaicius;
//         olTag.appendChild(liTag);
//     });
// };


// let daugSkaiciu;

// daugSkaiciu = localStorage.getItem('mano_skaiciai');

// console.log(daugSkaiciu);

// if (null === daugSkaiciu) {
//     // jeigu local storage neturi tokio įrašo (pradžia)
//     daugSkaiciu = [];
// } else {
//     daugSkaiciu = JSON.parse(daugSkaiciu);  // tai ką radau, paverčiu į objektą
// }

// console.log(daugSkaiciu);

// const nr2 = document.querySelector('#nr2');

// nr2.addEventListener('click', _ => {

//     daugSkaiciu.push(manoSkaicius);  // pridedu į sąrašą
//     const daugSkaiciuStringas = JSON.stringify(daugSkaiciu);
//     localStorage.setItem('mano_skaiciai', daugSkaiciuStringas);
//     renderList();  // šitas renderina kiekvieną kartą paspaudus mygtuką
// });

// console.log(daugSkaiciu);

// renderList();




