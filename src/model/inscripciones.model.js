const mongoose = require('mongoose');
const { Schema } = mongoose;

const InscripcionesSchema = new Schema({
    copiaDni: { type: String, require: true },
    copiaTitulo: { type: String, require: true },
    foto: { type: String, require: true },
    certificado: { type: String, require: true },
    info: { type: String, require: true }
});

module.exports = mongoose.model('inscripciones', InscripcionesSchema);