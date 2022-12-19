const router = require('express').Router();
const Controller = require('../controller/carreras.controller');

//Ruta para obtener las carreras
router.get('/', Controller.getCarreras);
//Ruta para editar una carrera
router.post('/update/:id', Controller.updateCarreras);
//Ruta para agregar una carrera
router.post('/addCarreras', Controller.addCarreras);
//Ruta para borrar una carrera
router.delete('/:id', Controller.deleteCarreras);


module.exports = router;