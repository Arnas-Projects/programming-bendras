



function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Sudėtingesnė užduotis : sukurti masyvą iš 10 atsitiktinių skaičiu (programiškai) intervale nuo 0 iki 100. 
// Mažiausią skaičių pakeisti į -5, didžiausią į 120. Paskaičiuoti visų skaičių vidurkį

// const skaiciai = [rand(0)];

// console.log(skaiciai);

// Task #1 ----------------------------------------------------------------------------------------------------
console.log('\nTask #1');
// 1. Sukurkite objektą apie žmogų 
// Sukurkite objektą zmogus su savybėmis: vardas, amzius, miestas.
// Atspausdinkite visus laukus konsolėje.

const zmogus = {
    vardas: 'Belekas',
    amzius: 30,
    miestas: 'Klaipeda',
}
console.log(zmogus);



// Task #2 ----------------------------------------------------------------------------------------------------
console.log('\nTask #2');
// 2. Pakeiskite objekto savybę 
// Turite objektą:
// let masina = { marke: 'Audi', metai: 2010 };
// Pakeiskite metai į 2020 ir pridėkite naują savybę spalva.
// Atspausdinkite atnaujintą objektą.

const masina = {
    marke: 'Audi',
    metai: 2010,
}
masina.metai = 2020;
masina.spalva = 'Juoda';
console.log(masina);


// Task #3 ----------------------------------------------------------------------------------------------------
console.log('\nTask #3');
// 3. Objekte esantis masyvas
// Sukurkite objektą studentas su savybėmis:
// vardas
// pazymiai (masyvas su 5 skaičiais)
// Atspausdinkite pirmą pažymį ir paskutinį pažymį.

const studentas = {
    vardas: 'Saulius',
    pazymiai: [5, 10, 8, 9, 2],
};

console.log(studentas.vardas, studentas.pazymiai[0], studentas.pazymiai.length-1);



// Task #4 ----------------------------------------------------------------------------------------------------
console.log('\nTask #4');
// 4. Patikrinkite, ar savybė egzistuoja
// Turite objektą:
// let knyga = { pavadinimas: 'Harris Poteris', puslapiai: 500 };
// Patikrinkite, ar egzistuoja savybė autorius.
// Jei nėra — pridėkite su reikšme 'Nežinomas'.

let knyga = {
    pavadinimas: 'Harris Poteris',
    puslapiai: 500,
}

// console.log(knyga.autorius);
// knyga.autorius = 'Nežinomas';
// console.log(knyga.autorius);

console.log(knyga);



if (knyga.autorius == undefined) {
    knyga.autorius = 'J. K. Rowling';
}
console.log(knyga.autorius);



// Task #5 ----------------------------------------------------------------------------------------------------
console.log('\nTask #5');
// Masyvo elementų atvirkštinis išvedimas
// Turite masyvą:
// let gyvunai = ["šuo", "katė", "bebras"];
// Užduotis:
// Atspausdinkite masyvo elementus atvirkštine tvarka (bebras, katė, šuo).

let gyvunai = ['šuo', 'katė', 'Strina', 'bebras'];

console.log(gyvunai);
console.log(gyvunai.reverse());

for(let i = 0; i < gyvunai.length; i++) {
    console.log(gyvunai[i]);
}

console.log('Atvirkščiai');

for (let i = gyvunai.length-1; i >= 0; i--) {
    console.log(gyvunai[i]);
}



// Task #6 ----------------------------------------------------------------------------------------------------
console.log('\nTask #6');














// Task #7 ----------------------------------------------------------------------------------------------------
console.log('\nTask #7');













