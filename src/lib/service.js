const axios = require('axios');

const ENDPOINT = "https://jsonplaceholder.typicode.com";


//export default
async function getData(idOfData) {

    const { data: users } = await axios.get(`${ENDPOINT}/users/${idOfData}`);
    const { data: posts } = await axios.get(`${ENDPOINT}/posts/${idOfData}`);
    console.log(users, posts);

}


// module.exports = {
//     getData,
// };