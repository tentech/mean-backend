const express = require('express');
const router = express.Router();
const provinciaCtrl = require("../controllers/provinciaController");
router.get('/', provinciaCtrl.obtenerProvincias );
router.post('/', provinciaCtrl.crearProvincia );

module.exports = router;