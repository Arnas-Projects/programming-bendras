


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}



// for (deklaruojam i; sąlyga; didinam/mažinam i) {
//     kodas kurį vykdome
// } // kai žinom kiek kartų turim kartoti tą patį veiksmą
 
// while (sąlyga) {kodas, kurį vykdome kol neišsipildo sąlyga}
// kai nežinom kiek kartu turim kartoti tą patį veiksmą, bet žinom kokio rezultato mums reikia


// BOSO LEVEL
// Gabija nori važiuoti į kelionę už 2150 eur. Šiam momentui turi 320 eur
// Per mėn planuoja atidėti 120-180 eur (atsitiktinis skaičius).
// Paskaičiuoti per kiek mėn Gabija sutaupys kelionei.


let saugiklis = 5000;


// Task #1 ----------------------------------------------------------------------------------------------------
console.log('\nTask #1');

// 1. Prie skaičiaus x pridėti po 5, kol skaičius pasieks bent 200
// Pradėkite nuo:
// let x = 0;

let x = 0;

while (x < 200) {
    x += 5;
    console.log(x);
}


// Task #2 ----------------------------------------------------------------------------------------------------
console.log('\nTask #2');

// 2. Trigubinti skaičių, kol jis taps didesnis nei 5000
// Pradėkite nuo:
// let x = 3;

let x2 = 3;

while (x2 < 5000) {
    x2 = x2 * 3;
    console.log(x2);
}


// Task #3 ----------------------------------------------------------------------------------------------------
console.log('\nTask #3');

// 3. Iš skaičiaus x atimti po 7, kol skaičius taps neigiamas
// Pradėkite nuo:
// let x = 50;

let x3 = 50;

while (x3 > 0) {
    x3= x3 - 7;
    console.log(x3);
}



// Task #4 ----------------------------------------------------------------------------------------------------
console.log('\nTask #4');

// 4. Didinti skaičių 30%, kol jis viršys 1000
// Pradėkite nuo:
// let x = 100;

let x4 = 100;

while (x4 <= 1000) {
    x4 = x4 * 1.3;
    console.log(x4.toFixed(2));
}











// Task #5 ----------------------------------------------------------------------------------------------------
console.log('\nTask #5');

// 5. Dalinti skaičių x iš 2, kol jis taps mažesnis nei 1
// Pradėkite nuo:
// let x = 200;
 
let x5 = 200;

while (x5 > 1) {

    x5 /= 2;
    console.log(x5.toFixed(2));
}


// Task #7 ----------------------------------------------------------------------------------------------------
console.log('\nTask #7');

// Emilija planuoja atostogas po 1 metų (12mėn). Šiam momentui kelionei pinigų neturi. 
// Kiekvieną mėn planuoja atsidėti (atsitiktinis skaičius) po 120 - 180 eur. 
// Paskaičiuoti kiek pinigų Emilija sutaupys po metų.

let EmilijosPinigai = 0;

for(let i = 1; i <= 12; i++) {
    let sutaupyta = rand(120, 180);
    EmilijosPinigai += sutaupyta;
    console.log(`Sutaupyta ${i} mėn - ${sutaupyta}. Sutaupyta iš viso - ${EmilijosPinigai}`);
}




// Task #8 ----------------------------------------------------------------------------------------------------
console.log('\nTask #8');

// Gabija nori važiuoti į kelionę už 2150 eur. Šiam momentui turi 320 eur
// Per mėn planuoja atidėti 120-180 eur (atsitiktinis skaičius).
// Paskaičiuoti per kiek mėn Gabija sutaupys kelionei.

let GabijosPinigai = 320;
let menSkaicius = 0;

while (GabijosPinigai < 2150) {
    let sutaupyta = rand(120, 180);
    GabijosPinigai += sutaupyta;
    menSkaicius++;
    console.log(`Sutaupyta ${menSkaicius} mėn - ${sutaupyta}. Sutaupyta iš viso - ${GabijosPinigai}`);
}

console.log(menSkaicius);



// Task #9 ----------------------------------------------------------------------------------------------------
console.log('\nTask #9');

// 3 kartus iš eilės išmesti tą patį skaičių (kauliukas)

let dabarRidenam;
let paskutinisRidenimas = 0;
let pasikartojimai = 0;
let ridenimai = 0;

while (pasikartojimai < 2) {

    dabarRidenam = rand(1, 6);
    console.log(dabarRidenam);
    ridenimai++;

    if (dabarRidenam == paskutinisRidenimas) {
        pasikartojimai++;
    } else {
        pasikartojimai = 0;
    }

    paskutinisRidenimas = dabarRidenam;
};

console.log(`Prireikė ${ridenimai} ridenimų.`);


// ---------------------------------------------------------------------------------------------------------------

















