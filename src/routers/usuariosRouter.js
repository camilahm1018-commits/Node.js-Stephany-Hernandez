//ruta de usuarios
const {Router}= require ("express")
const enrutador = Router() 

//FUNCION (req,res) dbeer ir en el controlador
enrutador.get("/rutaUsuarios", (req,res)=>{
    res.json({mensaje:" es mi ruta de usuarios"})
})

module.exports = enrutador