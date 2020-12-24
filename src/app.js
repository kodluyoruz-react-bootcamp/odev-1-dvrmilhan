import getData from './lib/service';

const getUserData = getData(4);

getUserData.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
})