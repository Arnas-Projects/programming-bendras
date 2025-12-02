


fetch('https://jsonplaceholder.typicode.com/todos/1') // siunčia užklausą (į serverį)
    .then(response => response.json()) // laukiam, tada JSON gautą rezultatą
    .then(json => console.log(json)); // kai duoda atsakymą, tada loginam konsolėje


// Turiu objektą

const namas = {
    kaminas: true,
    kambariai: 5,
    adresas: 'Pievos g. 15',
};

console.log(namas);

// Reikia perduoti per internetą, todėl versti į stringą (tekstą)

const objektasKaipStringas = JSON.stringify(namas);

console.log(objektasKaipStringas);

// Perduodam

//Reikia vėl atversti į objektą


const velNamas = JSON.parse(objektasKaipStringas);

console.log(velNamas);




const usersUl = document.querySelector('#data-container');

const printUserlist = users => {

    users.forEach(user => {
        const li = document.createElement('li'); // tuščias li elementas
        const userName = user.name; // paimu iš struktūros name
        const phrase = user.company.catchPhrase // paimu frazę
        const id = user.id;
        const idVat = id * 21 / 100;
        li.innerText = userName + ': ' + phrase; // į li dedu paimtą name ir frazę
        li.classList.add('user');
        usersUl.appendChild(li);
        const liVat = document.createElement('li'); // tuščias li elementas
        liVat.innerText = idVat;
        li.classList.add('vated');
        usersUl. appendChild(liVat);
    });
};

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        console.log(users);
        printUserlist(users);
    }); // kai yra JSON tada loginam






















































