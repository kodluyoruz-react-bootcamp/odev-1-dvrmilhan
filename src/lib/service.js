const axios = require('axios').default;


const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
    const { data: users } = await axios.get(`${ENDPOINT}/users/${userId}`);
    const { data: posts } = await axios.get(`${ENDPOINT}/posts/${userId}`);

    console.log(users, posts);

}
export default getData;