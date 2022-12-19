const mongoose = require('mongoose');
const { Schema } = mongoose;

const TarjetasSchema = new Schema({
    titulo: { type: String, require: true },
    texto: { type: String, require: true }
});

module.exports = mongoose.model('tarjetas', TarjetasSchema);