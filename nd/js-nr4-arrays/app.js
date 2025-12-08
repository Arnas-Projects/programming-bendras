


// Task 1 -----------------------------------------------------------------------------------------------------
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

console.log('Task 1');

const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const UlTask1 = document.querySelector('ul.task1-ul');

// 1-as variantas ---> naudojant for ciklą

// for (let i = 0; i < 9; i++) {

//     const list = document.createElement('li');
//     list.innerText = A[i];
//     UlTask1.appendChild(list);
// }


// 2-as variantas ---> naudojant forEach metodą

A.forEach(gyvuliukas => {
    const list = document.createElement('li');
    list.innerText = gyvuliukas;
    UlTask1.appendChild(list);
});


// Task 2 -----------------------------------------------------------------------------------------------------

// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais 
// gyvūnais išdėliotais abėcėline tvarka.

console.log('\nTask 2');

// 1 etapas -----------------
const UlTask2 = document.querySelector('ul.task2-ul');

const SortedArrayAByABC = A.toSorted((a, b) => {
    return a.localeCompare(b, "lt");
});


// 2 etapas -----------------
SortedArrayAByABC.forEach(gyvunas => {

    const listukas = document.createElement('li');
    listukas.innerText = gyvunas;
    UlTask2.appendChild(listukas);
});



// Task 3 -----------------------------------------------------------------------------------------------------

// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B 
// nuskaitytais gyvūnais išdėliotais abėcėline tvarka 
// (Rūšiavimas turi būti bendras tarp abiejų masyvų, 
// NE kiekvieno atskirai).#pamastykKaip

console.log('\nTask 3');

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];


// 1 etapas -----------------
const CombinedAB = [...A, ...B];

console.log(CombinedAB);


// 2 etapas -----------------
const UlTask3 = document.querySelector('ul.task3-ul');

const CombinedABsorted = CombinedAB.toSorted((a, b) => {
    return a.localeCompare(b, "lt");
});

console.log(CombinedABsorted);


// 3 etapas -----------------
CombinedABsorted.forEach(zveriukas => {

    const listukas = document.createElement('li');
    listukas.innerText = zveriukas;
    UlTask3.appendChild(listukas);
});


// Task 4 -----------------------------------------------------------------------------------------------------

// Html faile sukurkite section tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite div tagus, 
// kurie yra mėlyni apskritimai su centre užrašytais 
// iš masyvo A nuskaitytais gyvūnais.

console.log('\nTask 4');

const section4 = document.querySelector('section.task4-sect');


A.forEach(zveriukas => {

    const divas = document.createElement('div');
    divas.innerText = zveriukas;
    divas.classList.add('task4-div')
    section4.appendChild(divas);
});


// Task 5 -----------------------------------------------------------------------------------------------------
// Html faile sukurkite section tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite div tagus, 
// kurie yra raudoni apskritimai su centre užrašytais 
// iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.

console.log('\nTask 5');

const section5 = document.querySelector('section.task5-sect');

B.forEach(gyvunas => {

    const divas = document.createElement('div');
    divas.innerText = gyvunas + '\n' + gyvunas.length;  // Atkreipti dėmesį kai užrašytas innerText - supliusuojant reikšmes
    divas.classList.add('task5-div');
    section5.appendChild(divas);
});



// Task 6 -----------------------------------------------------------------------------------------------------
// Html faile sukurkite section tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite div tagus, 
// kurie yra žali apskritimai su centre užrašytais gyvūnais, 
// nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, 
// kurie savo pavadinime turi tik vieną žodį.

console.log('\nTask 6');

const section6 = document.querySelector('section.task6-sect');

// 1 etapas
const SingleWordArrayA = A.filter(zveriukas => {
    if (!zveriukas.includes(' ')) {
        return true;
    } else {
        return false;
    }
});

// alternatyvus būdas
// const SingleWordArrayA = A.filter(zveriukas => !zveriukas.includes(' '));


console.log(SingleWordArrayA);

// 2 etapas
SingleWordArrayA.forEach(zveriukas => {
    const divas = document.createElement('div');
    divas.classList.add('task6-div');
    divas.innerText = zveriukas;
    section6.appendChild(divas);
});



// Task 7 -----------------------------------------------------------------------------------------------------
// Html faile sukurkite section tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite span tagus, 
// kurie yra geltoni apskritimai su centre užrašytais 
// iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. 
// Kiekvienas span tagas - atskira raidė. 
// (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

console.log('\nTask 7');






// Task 8 -----------------------------------------------------------------------------------------------------
// Html faile sukurkite du ul tagus (tiesiogiai).
// Į  vieną sukurtą tagą, su JS, sudėkite li tagus 
// su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas 
// ne ilgesnis kaip 6 raidės, į kitą likusius.

console.log('\nTask 8');

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];

const ul1 = document.querySelector('ul.task8-ul-1');
const ul2 = document.querySelector('ul.task8-ul-2');

// 1 etapas
const Max6LettersC = C.filter(zveris => zveris.length <= 6);

console.log(Max6LettersC);


// 2 etapas
Max6LettersC.forEach(zveris => {

    const shortWordList = document.createElement('li');
    shortWordList.innerText = zveris;
    ul1.appendChild(shortWordList);
});

// 3 etapas
const LongerC = C.filter(zveris => zveris.length > 6);
console.log(LongerC);


// 4 etapas
LongerC.forEach(zveris2 => {

    const LongWordList = document.createElement('li');
    LongWordList.innerText = zveris2;
    ul2.appendChild(LongWordList);
});



// Task 9 -----------------------------------------------------------------------------------------------------
//Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus 
// su iš masyvo B nuskaitytais gyvūnais. 
// Išfiltruokite ir nedėkite šunų.

console.log('\nTask 9');

const ulTask9 = document.querySelector('ul.task9-ul');

// 1 etapas
const NoDogsC = C.filter(gyvunas => !gyvunas.includes('Šuo'));

// 2 etapas

NoDogsC.forEach(gyvunas => {

    const NoDogsList = document.createElement('li');
    NoDogsList.innerText = gyvunas;
    ulTask9.appendChild(NoDogsList);
});

















