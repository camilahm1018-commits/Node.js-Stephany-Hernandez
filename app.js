const { error } = require('console');
const express = require('express');
const app= express();
require('dotenv').config();
const port = process.env.PUERTO || 3000;
//middleware para parsear datos del body
app.use(express.json()) 
app.use (express.urlencoded({extended:true}))

//leer archivo
const sistemaArchivo = require("fs");
const ruta = require("path");

const rutaArchivo = ruta.join(__dirname, "datos.json");
app.get('/', (req, res) => {
    res.send('Aprendicez ficha 3407186');
});


//endpoint para listar aprendices
app.get('/api/aprendices', (req , res) => {
    //leer archivo json
    sistemaArchivo.readFile(rutaArchivo, "utf-8", (error, datos)=>{
        if (error){
            return res.status(500).json({Error: "No se puede leer rutaArchivo, o BD"})
        }
        const listaAprendices = JSON.parse(datos)
        res.status(200).json ({"mensaje":listaAprendices})
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
    const datosAprendiz = req.body 

    //leer archivo json
    sistemaArchivo.readFile(rutaArchivo, "utf-8", (error, datos)=>{
        if (error){
            return res.status(500).json({Error: "No se puede leer rutaArchivo, o BD"})
        }
        const listaAprendices = JSON.parse(datos)
        //adicionar el nuevo aprendiz a la lista
        listaAprendices.push(datosAprendiz)
        sistemaArchivo.writeFile(rutaArchivo,JSON.stringify(listaAprendices, null, 2), (error)=>{
            if (error){
            return res.status(500).json({Error: "No se puede escribir en el archivo, o BD"})
            }
            res.status(200).json ({"mensaje":"Aprendiz creado", "Datos Aprendiz": datosAprendiz})
        })
        
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

