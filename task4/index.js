const fetch = require("cross-fetch") //membuat variabel fetch, kemudian import dari npm module
const url = "https://jsonplaceholder.typicode.com/users" //membuat variabel dengan API

async function getName() { //membuat fungsi dengan getName
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((el, idx) => {
        const name = el.name;
        console.log(`${idx+1}. ${name}`);
    });
}

getName();