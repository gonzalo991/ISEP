const router = require('express').Router();
const Controller = require('../controller/inscripciones.controller');

router.get('/', Controller.getInscripciones);
router.put('/update/:id', Controller.updateInscripciones);

module.exports = router;