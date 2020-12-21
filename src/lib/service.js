import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

async function getData(idOfData) {
    const { data: users } = await axios.get(`${ENDPOINT}/users/${idOfData}`);
    console.log(data);
}