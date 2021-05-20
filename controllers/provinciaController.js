const provinciaController = {};
const Provincia = require("../models/provincia");


provinciaController.obtenerProvincias= async (req, res) => {
    const provincias = await Provincia.find();
    provincias.forEach(element => {
        console.log(element);
      });
    res.json(provincias);
};

provinciaController.crearProvincia= async (req, res) => {
    const provincia =  new Provincia(req.body);
    console.log(provincia);
    await provincia.save();
    res.json({
        'status':'200 ok'
    });
};

module.exports = provinciaController;