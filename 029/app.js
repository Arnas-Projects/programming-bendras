


function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let times = 0;

let dice = rand(1, 5);
let name;

do {

    console.log(dice);
    if (dice == 1) {
        console.log(name = 'Simona');
        times++;

    } else if (dice == 2) {
        console.log(name = 'Arnas');
        times++;

    } else if (dice == 3) {
        console.log(name = 'Gintaras');
        times++;
    } else if (dice == 4) {
        console.log(name = 'Gerda');
        times++;
    } else {
        console.log(name = 'Birutė');
        times++;
    }

} while (times < 3);



// let times2 = 0;
// let coin2;

// let saugiklis = 100;


// do {

//     coin2 = rand(0, 1) ? 'H' : 'S';
//     console.log(coin2);
//     if (coin2 == 'H') {
//         times++;
//     }

//     saugiklis--;
//     if (!saugiklis) {
//         console.log('Suveikė saugiklis');
//         break;
//     }

// } while (times < 3);
