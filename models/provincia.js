const mongoose = require('mongoose');
const {Schema} = mongoose;

const Provincia = new Schema({
    codigo: {type: Number, require: true },
    valor: {type: String, require: true }
});

module.exports =mongoose.model('Provincia', Provincia);