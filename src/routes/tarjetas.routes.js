const router = require('express').Router();
const Controller = require('../controller/tarjetas.controller');

router.get('/', Controller.getTarjetas);
router.put('/update/:id', Controller.updateTarjetas);

module.exports = router;