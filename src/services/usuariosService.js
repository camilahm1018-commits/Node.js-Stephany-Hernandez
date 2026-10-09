const listarUsuarios = async()=>{
    const usuarios = [
        {"nombre": "Jhonny", "cargo":"Instructor"},
        {"nombre": "Angelica", "cargo":"Aprendiz"}
    ]
    return usuarios
}

module.exports = {listarUsuarios}