const mongoose = require('mongoose');
const {Schema} = mongoose;

const Persona = new Schema({
    nombres: {type: String, require: true },
    apellidos: {type: String, require: true },
    identificacion: { type: String, require: true },
    fechaNacimiento: {type: Date, require: true },
    provincia: {type: Number, require: true },
    ciudad: {type: Number, require: true },
    tipoVacuna: {type: Number, require: true },
    lugarVacunacion:{type: String, require: true }
});

module.exports =mongoose.model('Persona',Persona);