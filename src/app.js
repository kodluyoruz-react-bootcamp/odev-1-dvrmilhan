// import { getData } from '';

const service = require('./lib/service');

const getUserData = service.getData(1);

getUserData.then(function(result) {
    console.log(result);
});