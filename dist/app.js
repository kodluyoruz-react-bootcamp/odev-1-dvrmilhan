"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _service = require('./lib/service'); var _service2 = _interopRequireDefault(_service);

const getUserData = _service2.default.call(void 0, 4);

getUserData.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
})