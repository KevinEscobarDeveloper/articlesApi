const mongoose = require("mongoose");
require('dotenv').config()


const connection = async() => {
    try{

        await mongoose.connect(process.env.Database);

        //Parametros dentro de objeto || solo en caso de fallos 
        //useNewParser: true
        //useUnifiedTopology: true
        //useCreateIndex: true

        console.log("Conectado correctamente a la base de datos");


    } catch (error){
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos");
    }
}


module.exports = {
    connection
}