const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const path = require('path');
const morgan = require('morgan');
const mongoose = require('./database/db.database');

//Middleware
app.use(morgan('dev'));

//Archivos estáaticos e interprete de json
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


//Rutas
app.use('/carreras', require('./routes/carreras.routes'));


//Puerto
app.listen(port, () => { console.log(`Servidor establecido en el puerto ${port}`) });