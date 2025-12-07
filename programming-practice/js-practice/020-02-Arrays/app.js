


const animals = [];

animals.push('Zuikis', ' Bebras', 'Barsukas');

animals.unshift('Briedis', 'Mamutas'); // indeksai persiskaičiuoja, kai pridedam, išmetam elementą

console.log(animals);

animals.pop();  // išmeta paskutinį, vieną elementą

console.log(animals);

animals.shift();  // išmeta pirmą, vieną elementą

console.log(animals);

const pushResult = animals.push('Vilkas'); // 'push', 'unshift' grąžina masyvo dydį su pridėtais elementais

console.log(animals);
console.log(pushResult);

const popResult = animals.pop();

console.log(animals);
console.log(popResult);  // 'pop' grąžina išmestą elementą


// Su masyvu galima atlikti:

/*
Paieška
Agregacija
Filtracija
Rūšiavimas
*/


console.log('\nNr.1 - PAIEŠKA');
// PAIEŠKA
const numbers = [54, 85, 31, -4, 57, 131, -78, 54, 54, 798, 0, 3, 74];

let findWhat = 54;
let foundRow = 3;  // kelinto rezultato mums reikia

let foundResultIndex = -1;  // rasto skaičiaus indeksas -1 reiškia, kad indekso dar neradom
let foundResultRow = 0;

for (let i = 0; i < numbers.length; i++) {
    if (findWhat == numbers[i]) {

        foundResultRow++;  // skaičiuojam kelintas rezultatas

        if (foundRow == foundResultRow) {
            foundResultIndex = i + 1;
            break;
        }
    }
}

console.log(foundResultIndex);


// 1. Koks meškos numeris - numerį atspausdinti konsolėje

const visiGyvunai = document.querySelectorAll('li');




console.log(visiGyvunai);

console.log(Array.from(visiGyvunai).map(el => el.innerText));


let foundMeska = -1;

for (let i = 0; i < visiGyvunai.length; i++) {

    // visiGyvunai -> visi elementai
    // visiGyvunai[i] -> konkretus vienas elementas
    // visiGyvunai[i].innerText -> konkretaus vieno elemento tekstas

    if (visiGyvunai[i].innerText == 'Meška') {
        foundMeska = i + 1;
        break;
    }
}

console.log('Meška:', foundMeska);


// 2. Sąraše varną nuspalvinti raudonai;


let foundVarna = -1;

for (let i = 0; i < visiGyvunai.length; i++) {
    if (visiGyvunai[i].innerText == 'Varna') {
        foundVarna = i + 1;
        visiGyvunai[i].style.color = 'crimson';
        break;
    }
}

console.log('Varna:', foundVarna);


//3. Sąraše Pelėdą ir Gaidį nuspalvinti žaliai ir oranžiškai


for (let i = 0; i < visiGyvunai.length; i++) {
    if (visiGyvunai[i].innerText == 'Pelėda') {
        visiGyvunai[i].style.color = 'green';
    }

    if (visiGyvunai[i].innerText == 'Gaidys') {
        visiGyvunai[i].style.color = 'skyblue';
        break;
    }
}



// 4. Sąraše visus išskyrus Pelėdą ir Gaidį nuspalvinti žaliai


// su ifu - nesamonė nes atvirkštinė logika

// for (let i = 0; i < visiGyvunai.length; i++) {

//     if (visiGyvunai[i].innerText != 'Pelėda' && visiGyvunai[i].innerText != 'Gaidys') {
//         visiGyvunai[i].style.color = 'orange';
//     }
// }



// su continue - labai gerai, nes tiesioginė logika

for (let i = 0; i < visiGyvunai.length; i++) {

    if (visiGyvunai[i].innerText == 'Pelėda' || visiGyvunai[i].innerText == 'Gaidys') {
        continue;  // pradeda naują ciklo iteraciją. Toliau +1
    }

    visiGyvunai[i].style.color = 'orange';
}



























































































































