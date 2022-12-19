const mongoose = require('mongoose');
const { Schema } = mongoose;


const NoticiasSchema = new Schema({
    imagen: {},
    titulo: { type: String, require: true },
    reseña: { type: String, require: true },
    texto: { type: String, require: true }
});

module.exports = mongoose.model('noticias', NoticiasSchema);