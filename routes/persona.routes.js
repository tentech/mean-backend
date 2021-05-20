const express = require('express');
const router = express.Router();
const personaCtrl = require("../controllers/personaController");
router.get('/',personaCtrl.obtenerPersonas );
router.post('/',personaCtrl.crearPersona );
router.get('/:id',personaCtrl.consultarPersona);
router.put('/:id',personaCtrl.modificarPersona);
router.delete('/:id',personaCtrl.eliminarPersona);

module.exports = router;