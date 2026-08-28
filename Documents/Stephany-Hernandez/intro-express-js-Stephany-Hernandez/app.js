const express = require('express');
const app= express();
require('dotenv').config();
const port = process.env.PUERTO || 3000;
//middleware para parsear datos del body
app.use(express.json()) 
app.use (express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Aprendicez ficha 3407186');
});


//endpoint para listar aprendices
app.get('/api/aprendices', (req , res) => {
    res.status(200).json ({
        "mensaje":"Lista de aprendices"
         
    })
})
//endpoint para Listar un aprendiz

app.get('/api/aprendices/:id',(req, res) =>{
    res.status(200).json ({
        "mensaje":"Listar un aprendiz"
         
    })
})

//endpoint para crear aprendices

app.post('/api/aprendices',(req, res) =>{
    res.status(201).json ({
        "mensaje":"Crear aprendices"
         
    })
})

//endpoint para editar aprendices

app.put('/api/aprendices/:id',(req, res) =>{
    res.status(200).json ({
        "mensaje":"Editar aprendices"
         
    })
})

//endpoint para Eliminar aprendices

app.delete('/api/aprendices/:id',(req, res) =>{
    res.status(200).json ({
        "mensaje":"Eliminar aprendices"
         
    })
})

//
app.post("/rutaJson", (req, res)=>{
    const todosDatos =req.body
    const edad =req.body.Edad
    if (edad >= 18) {
        res.json({"mensaje":"Es mayor de edad"})
    }else {
        res.json({"mensaje":"Es menor"})
    }
    res.json({datosJson: todosDatos})
})

app.post("/rutaFormularios", (req, res)=>{
    const todosDatos =req.body
    const programa = req.body.programa
    
    res.json({Todosdatos: todosDatos, Mi_Programa: programa})
})


app.listen(port, () => {
    console.log( `Servidor: http://localhost:${port}` );
});

