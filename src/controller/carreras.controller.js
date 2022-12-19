const Controller = {}
const Carreras = require('../model/carreras.model');

//Controlador para acceder a los datos de las carreras
Controller.getCarreras = async (req, res) => {

    //Envío la petición a la base de datos 
    //para obtener todos los datos de las carreras disponibless
    const carreras = await Carreras.find();

    //Devuelvo un archivo json como respuesta
    res.json(carreras);
}

//Controlador para editar los campos de las carreras
Controller.updateCarreras = async (req, res) => {
    //Desestructuro los valores que recibimos del body
    const { carrera, titulo, duracion, instituto, modalidad, horarios } = req.body;
    //Luego guardo los valores en una lista
    const updateCarreras = { carrera, titulo, duracion, instituto, modalidad, horarios };
    //Busco la carrera que vamos a actualizar por id y le pasamos los nuevos valores
    await Carreras.findByIdAndUpdate(req.params.id, updateCarreras);
    //Devolvemos un estado en caso de que todo esté correcto
    res.json({ status: '¡Campos actualizados correctamente!' });
}


//Controlador para agregar una nueva carrera
Controller.addCarreras = async (req, res) => {
    //Desestructuro los datos que recibo del body con los nombres
    //correspondientes a cada valor
    const { carrera, titulo, duracion, instituto, modalidad, horarios } = req.body;
    //Instanciamos un nuevo objeto de la clase Carreras y le pasamos
    //los parámetros
    const addCarreras = new Carreras({ carrera, titulo, duracion, instituto, modalidad, horarios });
    //Guardo la nueva carrera 
    await addCarreras.save();
    //Devuelvo un estado personalizado en caso de que todo esté correcto
    res.json({ status: '¡Campo agregados correctamente!' });
}

//Controlador para borrar las carreras
Controller.deleteCarreras = async (req, res) => {
    //Busco por id la carrera que deseo borrar
    await Carreras.findByIdAndRemove(req.params.id);
    //Devuelvo un estado
    res.json({ status: '¡Campo borrado exitosamente!' })
}


module.exports = Controller;