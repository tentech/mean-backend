const personaController = {};
const Persona = require("../models/persona");


personaController.obtenerPersonas = async (req, res) => {
    const personas = await Persona.find();
    personas.forEach(element => {
        console.log(element);
      });
    res.json(personas);
};

personaController.crearPersona = async (req, res) => {
    delete req.body._id;
    const persona =  new Persona(req.body);
    console.log(persona);
    await persona.save();
    res.json({
        'status':'200 ok'
    });
};

personaController.eliminarPersona = async (req, res) => {
    await Persona.findByIdAndDelete(req.params.id);
    res.json({
        'status':'200 ok'
    });
};

personaController.consultarPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
};

personaController.modificarPersona = async (req, res) => {
      
    const person = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        identificacion: req.body.identificacion,
        fechaNacimiento:req.body.fechaNacimiento,
        provincia: req.body.provincia,
        ciudad: req.body.ciudad,
        tipoVacuna: req.body.tipoVacuna,
        lugarVacunacion:req.body.lugarVacunacion
    };
    console.log(person);
    await Persona.findByIdAndUpdate( req.params.id,{$set:person},{new:true});
    res.json({
        'status':'200 ok'
    });
};

module.exports = personaController;