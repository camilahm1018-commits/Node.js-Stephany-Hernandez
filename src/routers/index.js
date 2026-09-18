//agrupa las rutas de mi aplicacion (usuarios,productos, notas, citas)

const {Router}= require ("express")
const enrutador = Router() 
const pruebaRouter =require("./pruebaRouter")
const usuariosRouter =require("./usuariosRouter")

enrutador.use("/rutaPrueba", pruebaRouter)
enrutador.use("/rutaUsuarios2", usuariosRouter)

module.exports = enrutador