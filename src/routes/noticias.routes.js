const router = require('express').Router();
const Controller = require('../controller/noticias.controller');
const upload = require('../middlewares/multer.middlewares');

router.get('/', Controller.getNoticias);

router.post('/addNoticias', upload.single('imagen'), Controller.addNoticias);

router.put('/update/:id', upload.single('imagen'), Controller.updateNoticia);

router.delete('/:id', Controller.deleteNoticia);

module.exports = router;