//ruta de usuarios
const {Router}= require ("express")
const enrutador = Router() 
const {mostrarRutaUsuarios,registrarController, loginController} = require("../controllers/rutaUsuariosController")

//FUNCION (req,res) dbeer ir en el controlador
enrutador.get("/listado",mostrarRutaUsuarios)
enrutador.get("/registrar",registrarController)
enrutador.get("/login", loginController)
//FUNCION (req,res) dbeer ir en el controlador

module.exports = enrutador