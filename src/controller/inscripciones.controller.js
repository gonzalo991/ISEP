const Controller = {}
const Inscripciones = require('../model/inscripciones.model');

Controller.getInscripciones = async (req, res) => {

    const inscripciones = await Inscripciones.find();

    res.json(inscripciones);
};

Controller.updateInscripciones = async (req, res) => {

    const { copiaDni, copiaTitulo, foto, certificado, info } = req.body;

    const updateInscripciones = { copiaDni, copiaTitulo, foto, certificado, info };

    await Inscripciones.findByIdAndUpdate(req.params.id, updateInscripciones);

    res.json({ status: '¡Campos actualizados correctamente!' });

};

module.exports = Controller;

