const vacunaController = {};
const Vacuna = require("../models/vacuna");


vacunaController.obtenerVacunas= async (req, res) => {
    const vacunas = await Vacuna.find();
    vacunas.forEach(element => {
        console.log(element);
      });
    res.json(vacunas);
};

vacunaController.crearVacuna= async (req, res) => {
    const vacuna =  new Vacuna(req.body);
    console.log(vacuna);
    await vacuna.save();
    res.json({
        'status':'200 ok'
    });
};

module.exports = vacunaController;