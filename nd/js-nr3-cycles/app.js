

// random funkcija
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// atsitiktinės spalvos funkcija
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}




// Task # 1 ---------------------------------------------------------------------------------------------------------
console.log('Task #1');

const divasH1Task1 = document.querySelector('section.task1-section > div.h1-div');
// const divasH4Task1 = document.querySelector('section.task1-section > div.h4-div');

divasH1Task1.style.display = 'flex';
// divasH4Task1.style.display = 'flex';

for (let i = 0; i < 14; i++) {

    const h1Task1 = document.createElement('h1');
    h1Task1.innerText = 4;
    divasH1Task1.appendChild(h1Task1);

    const h4Task1 = document.createElement('h4');
    h4Task1.innerText = 1;
    divasH1Task1.appendChild(h4Task1);
    
}















































