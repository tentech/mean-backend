const ciudadController = {};
const Ciudad = require("../models/ciudad");


ciudadController.obtenerCiudadesByProvincia= async (req, res) => {
    const ciudades = await Ciudad.findOne({"provincia":req.params.provincia});
    console.log(ciudades);
    res.json(ciudades);
};

ciudadController.crearCiudad = async (req, res) => {
    const ciudad =  new Ciudad(req.body);
    console.log(ciudad);
    await ciudad.save();
    res.json({
        'status':'200 ok'
    });
};

module.exports = ciudadController;