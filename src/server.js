const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const path = require('path');
const morgan = require('morgan');

//Middleware
app.use(morgan('dev'));

//Archivos estáaticos e interprete de json
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));


//Rutas
app.get('/', (req,res)=>{
    res.send(`<h1>Hola mundo</h1>`)
})


//Puerto
app.listen(port, () => { console.log(`Servidor establecido en el puerto ${port}`) });