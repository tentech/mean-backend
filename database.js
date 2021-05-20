const mongoose = require('mongoose');
const url = 'mongodb://localhost/person-covid';
mongoose.connect(url)
    .then(db=> console.log('conectado'))
    .catch(err=> console.log('error:'+err));

module.exports = mongoose;