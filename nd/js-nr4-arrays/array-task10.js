

// rand() funkcija:
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};


//random spalvos funkcija:
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
};


// Task 10 -----------------------------------------------------------------------------------------------------
// Uždavinį atlikite atskirame html faile. 
// Visame ekrane atsitiktine tvarka “išmėtykite“ iš 
// masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, 
// tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų 
// raidžių dydis - atsitiktinis nuo 10px iki 100px. 
// Gyvūnų pavadinimų raidžių spalva atsitiktinė. 
// Pavadinimai turi tolygiai (pagal funkciją rand()) 
// dengti visą ekraną (funkcijos duotos 03. DOM ir Cycles (one & four edition)).#fun

console.log('Task 10');
console.log('\n');

// 1 ETAPAS
// Apsirašau masyvą su reikšmėmis

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


// 2 ETAPAS
// Susirandu HTML'o (JS'e dar vadinamo DOM'u) tagą, į kurį aš norėsiu dėti tas masyvo reikšmes

const bodyTag = document.querySelector('body');
// bodyTag.style.position = 'relative';  // kadangi masyvo reikšmes norėsiu dėti į random taškus HTML'e, artimiausiam (tėviniam) elementui priskiriu relative poziciją


// 3 ETAPAS
// Pasirašau ciklą ciklę. Ciklas cikle reikalingas, nes pirmu - FOR ciklu nurodau, kiek kartų norėsiu nuskaityti masyvą, o antru ciklu jau išmėtau tiek tagų su vardais, kiek nuskaičiau pirmam cikle.

// for (let i = 0; i < 10; i++) {
C.forEach( _ => {                   // Pasirašau forEach (FOR atitikmuo) ciklo sąlygą --- šiuo atveju nurodau, kd ciklą suksiu 10 kartų. 
                                    // ^ Kitaip tariant - lenkiam pirštukus: lenkiam 1-ą pirštuką - prasukom 1-ą ciklą,
                                    // lenkiam 2-ą pirštuką - prasukom 2-ą ciklą,
                                    // lenkiam 3-ą pirštuką - prasukom 3-ą ciklą,
                                    // ir t.t. iki kol prasukam ciklą 10 kartų.

    C.forEach(zveris => {                                               // pasirašau kitą ciklą cikle - forEach. forEach, kaip žinia, apsirašo kaip funkcija, todėl darau "arrow" funkciją
        const AnimalNameTag = document.createElement('div');            // susikuriu naują elementą, į kurį įrašysiu žvėriuko (iš C masyvo) vardą
        AnimalNameTag.innerText = zveris;                               // su innerText nurodau, kad reikšmė bus įrašytą iš C masyvo - žvėriuko vardas (kiekvieną kartą vis kitas vardas, nes ciklas sukasi 10 kartų)
        AnimalNameTag.style.position = 'absolute';                      // kadangi HTML tagą (su žvėriuko vardu tame tage) noriu išmėtyti po visą puslapį, priskiriu absolute poziciją
        AnimalNameTag.style.top = rand(0, window.innerHeight) + 'px';   // su random funkcija nurodau, kad atsitiktine tvarka HTML'e tagas su vardu bus išmėtytas nuo 1px iki 1080px - pagal ekrano aukštį
        AnimalNameTag.style.left = rand(1, window.innerWidth) + 'px';   // su random funkcija nurodau, kad atsitiktine tvarka HTML'e tagas su vardu bus išmėtytas nuo 1px iki 1920px - pagal ekrano plotį
        AnimalNameTag.style.fontSize = rand(10, 100) + 'px';            // su random funkcija nurodau, HTML'e tagas su vardu bus išmėtytas atsitiktiniu šrifto dydžiu - nuo 10px iki 100px
        AnimalNameTag.style.color = randomColor();                      // su randomColor() funkcija nurodau, kad HTML tage esančio vardo spalva bus random (atsitiktinė)
        bodyTag.appendChild(AnimalNameTag);                             // appendinu - HTML'o <body> tagui priskiriu savo sukurtą <div> tagą. Vadinasi, su kiekvienu ciklo prasukimu <body> TAGE atsiras tiek <div> TAGŲ, kiek aš ciklo sąlygoj nurodžiau, kad tų tagų atsirastų
    });
});



// elementas div ar span
// elemente irasyti animal varda
// absolute pozicija
// top ir left random px
// random color
// appendinti












