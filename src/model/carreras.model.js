const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarrerasSchema = new Schema({
    carrera: { type: String, require: true },
    titulo: { type: String, require: true },
    duracion: { type: String, require: true },
    instituto: { type: String, require: true },
    modalidad: { type: String, require: true },
    horarios: { type: String, require: true }
});

module.exports = mongoose.model('carreras', CarrerasSchema);