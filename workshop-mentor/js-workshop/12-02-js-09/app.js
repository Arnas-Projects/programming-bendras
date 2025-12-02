


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}











for (let i = 0; i < 5; i++) {
    console.log('Labas rytas');
}

// 1. Spausdinti skaičius nuo 1 iki 5
// // Išveskite: 1 2 3 4 5
console.log('\nTask #1');

for (let i = 1;  i <= 5; i++) {
    console.log(i);
};


// 2. Spausdinti skaičius nuo 5 iki 1
// // Išveskite: 5 4 3 2 1
console.log('\nTask #2');

for (let i = 5; i > 0; i--) {
    console.log(i);
}

//2. sudėtingesnis - // 3 kartus iš eilės išmesti tą patį skaičių (kauliukas)
console.log('\n Task #2.1')

let kartai = 0;

do {

    kauliukas = rand(1, 3);
    console.log(kauliukas);
    if (kauliukas == 1) {
        kartai++;
    }

} while (kartai < 3);


// 3. Spausdinti visus lyginius skaičius nuo 2 iki 10
// // Išveskite: 2 4 6 8 10
console.log('\nTask #3');

for (i = 2; i <= 10; i+=2) {
    console.log(i);
}


// 4. Spausdinti skaičių kvadratus nuo 1 iki 5
// // Išveskite: 1 4 9 16 25
console.log('\nTask #4');

for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}
 

// 5. Sudėti skaičius nuo 1 iki 10
// // Išveskite sumą: 55
console.log('\nTask #5');

let sum = 0;

for (i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);


// 6. Kartoti tekstą kelis kartus
// // Spausdinti "Labas!" 5 kartus
console.log('\n Task #6')

for (i = 0; i < 5; i++) {
    console.log('Labas!');
}


// 7. Atspausdinti skaičius nuo 1 iki 10, bet tik jei jie didesni už 5
// // Išveskite: 6 7 8 9 10
console.log('\nTask #7');

for (i = 1; i <= 10; i++) {
    if (i > 5) {
        console.log(i);
    }
};


// 8. Atvirkštinis kvadratų spausdinimas
// // Išveskite: 25 16 9 4 1
console.log('\nTask #8');

for (let i = 5; i > 1; i--) {
    console.log(i * i);
    // arba console.log (i ** 2);
}

// 9. Sudėti tik lyginius skaičius nuo 1 iki 10
// // Išveskite sumą: 30
console.log('\nTask #9');

let sum2 = 0;

for (let i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(sum2 += i);
    }
}

// console.log(sum2);


// 10. Spausdinti skaičių su žodžiu
// // Išveskite: "Skaičius 1", "Skaičius 2", ... iki 5
console.log('\nTask #10');

for (let i = 0; i <= 5; i++) {
    (i != 0 && i <= 5) ? console.log('Skaicius', i) : '';
}
































