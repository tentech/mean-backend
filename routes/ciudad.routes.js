const express = require('express');
const router = express.Router();
const ciudadCtrl = require("../controllers/ciudadController");
router.get('/:provincia', ciudadCtrl.obtenerCiudadesByProvincia );
router.post('/', ciudadCtrl.crearCiudad );

module.exports = router;