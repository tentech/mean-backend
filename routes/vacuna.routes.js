const express = require('express');
const router = express.Router();
const vacunaCtrl = require("../controllers/vacunaController");
router.get('/', vacunaCtrl.obtenerVacunas );
router.post('/', vacunaCtrl.crearVacuna );

module.exports = router;