const Controller = {}
const Noticias = require('../model/noticias.model');


Controller.getNoticias = async (req, res) => {

    const noticias = await Noticias.find();

    res.json(noticias);

};



Controller.addNoticias = async (req, res) => {

    if (req.file) {
        const { titulo, reseña, texto } = req.body;
        const { filename } = req.file;
        const imagen = filename;

        const addNoticias = new Noticias({ imagen, titulo, reseña, texto });

        await addNoticias.save();

        res.json({ status: '¡Noticia publicada!' });

    } else {

        console.error('No se encontro la imagen')

        res.json({ status: '¡El campo imagen es obligatorio!' })

    }

};

Controller.updateNoticia = async (req, res) => {

    if (req.file) {
        const { titulo, reseña, texto } = req.body;
        const { filename } = req.file;
        const imagen = filename;

        const updateNoticia = { imagen, titulo, reseña, texto }

        await Noticias.findByIdAndUpdate(req.params.id, updateNoticia);

        res.json({ status: '¡Noticia Actualizada Correctamente!' });

    } else {

        console.error('No se encontró la imagen');

        res.json({ status: '¡El campo imagen es obligatorio!' });
        
    }
};

Controller.deleteNoticia = async (req, res) => {

    await Noticias.findByIdAndRemove(req.params.id);

    res.json({ status: '¡Noticia Eliminada!' })

};

module.exports = Controller;