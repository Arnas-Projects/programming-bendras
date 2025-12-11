


/*

    Yra trys mygtukai: žalias, mėlynas ir raudonas. Paspaudus vieną iš mygtukų jo spalva įsirašo
    į localStorage. Kiekvienas mygtuko paspaudimas prideda savo spalvą prie sąrašo.
    Sąrašo spalvos atvaizduojamos html spalvotų (atitinkamai išsaugotai spalvai) kvadratukų pavidale.
    Sąrašas atsinaujina dinamiškai

*/
console.log('Task 1');




// const greenColorSq = rand(5, 20);
// const greenColorSq = document.createElement('div');
// greenColorSq.classList.add('.green-div');

// const greenColorSqString = JSON.stringify(greenColorSq);

// localStorage.setItem('greenDiv', greenColorSqString);

// const greenColorSqGautas = localStorage.getItem('greenDiv');

// 1 etapas
const renderColor = _ => {
    const olTag = document.querySelector('ol.color-list')
    olTag.innerHTML = '';

    colorsList.forEach(color => {

        const liTag = document.createElement('li');
        liTag.style.width = '40px';
        liTag.style.height = '40px';
        liTag.style.color = ' white';
        liTag.style.margin = '5px';
        liTag.style.fontSize = '14px';
        // liTag.style.display = 'flex';
        // liTag.style.justifyContent = 'center';
        // liTag.style.alignItems = 'center';
        liTag.style.listStyle = 'none';
        liTag.style.backgroundColor = color;
        // liTag.innerHTML = color;
        olTag.appendChild(liTag);
    });
};


// 2 etapas
let colorsList;

colorsList = localStorage.getItem('colors_storage');



// 3 etapas
if (null === colorsList) {
    colorsList = [];
} else {
    colorsList = JSON.parse(colorsList);
};



// 4 etapas
const GreenButton = document.querySelector('#green-btn');
const BlueButton = document.querySelector('#blue-btn');
const RedButton = document.querySelector('#red-btn');


// 5.1 etapas
GreenButton.addEventListener('click', _ => {

    colorsList.push('green');
    const colorListToString = JSON.stringify(colorsList);
    localStorage.setItem('colors_storage', colorListToString);
    renderColor();
});


// 5.2 etapas
BlueButton.addEventListener('click', _ => {

    colorsList.push('blue');
    const colorListToString = JSON.stringify(colorsList);
    localStorage.setItem('colors_storage', colorListToString);
    renderColor();
});


// 5.3 etapas
RedButton.addEventListener('click', _ => {
    
    colorsList.push('crimson');
    const changingColorsToString = JSON.stringify(colorsList);
    localStorage.setItem('colors_storage', changingColorsToString);
    renderColor();
});

console.log(colorsList);

// 6 etapas
renderColor();

// ---------------------------------------------------------------------------------

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




