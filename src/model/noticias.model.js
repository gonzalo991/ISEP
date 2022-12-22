const mongoose = require('mongoose');
const { Schema } = mongoose;


const NoticiasSchema = new Schema({
    imagen: { type: String },
    titulo: { type: String, require: true },
    reseña: { type: String, require: true },
    texto: { type: String, require: true }
},{
    timestamps: true
});

module.exports = mongoose.model('noticias', NoticiasSchema);