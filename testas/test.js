



const btn = document.querySelector('#mygtukas');

const colors = ['red', 'blue', 'green', 'orange', 'purple'];


// const colors = [
//     'linear-gradient(145deg, #026265, #06c0ca)',
//     'linear-gradient(145deg, #eee716ff, #ca6106ff)',
//     'linear-gradient(145deg, #2acc38ff, #139a2eff)',
//     'linear-gradient(145deg, #d527c1ff, #9a17a6ff)',
//     'linear-gradient(145deg, #1c4fb5ff, #1911a2ff)',
//     'linear-gradient(145deg, #d8d5d8ff, #5a575aff)',
//     'linear-gradient(145deg, #494849ff, #1a191aff)' 
// ];

btn.addEventListener('click', e => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * colors.length);
        e.target.style.background = colors[random];
    });
});