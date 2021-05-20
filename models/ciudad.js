const mongoose = require('mongoose');
const {Schema} = mongoose;

const Ciudad = new Schema({
    codigo: {type: Number, require: true },
    valor: {type: String, require: true },
    provincia:{type: Number, require: true }
});

module.exports =mongoose.model('Ciudade',Ciudad);