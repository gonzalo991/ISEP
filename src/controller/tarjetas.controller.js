const Controller = {}
const Tarjetas = require('../model/tarjetas.model');

Controller.getTarjetas = async (req, res) => {

    const tarjetas = await Tarjetas.find();

    res.json(tarjetas);
};

Controller.updateTarjetas = async (req, res) => {

    const { titulo, texto } = req.body;

    const updateTarjetas = { titulo, texto }

    await Tarjetas.findByIdAndUpdate(req.params.id, updateTarjetas);

    res.json({ status: '¡Campos actualizados correctamente!' })

};

module.exports = Controller;