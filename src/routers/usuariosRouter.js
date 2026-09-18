//ruta de usuarios
const {Router}= require ("express")
const enrutador = Router() 
const mostrarRutaUsuarios = require("../controllers/rutaUsuariosController")

//FUNCION (req,res) dbeer ir en el controlador
enrutador.get("/rutaUsuarios",mostrarRutaUsuarios)
//FUNCION (req,res) dbeer ir en el controlador

module.exports = enrutador