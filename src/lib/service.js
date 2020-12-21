const axios = require('axios').default;

const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

async function getData(idOfData) {
    const { data } = await axios.get(`${ENDPOINT}/${idOfData}`);
    console.log(data);
}