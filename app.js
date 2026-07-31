import express from 'express';
import {configDotenv} from 'dotenv';
configDotenv();
const app= express();
const port= process.env.PUERTO || 3000;
app.get('/', (__, res) => {
    res.send('Aprendicez ficha 3407186 SENA');
});

app.get('/ruta1', (req, res) => {
    //template string
    res.send('<h1>Usando res.send</h1>');
})

app.get('/ruta2', (req, res) => {
    //template string
    res.json({"dev" : "node --watch app.js","script": "node app.js"});
})

app.get('/ruta3/:nombre/:apellido', (req, res) => {
    //template string
    const nameUsuario=req.params.nombre
    const apellidoUsuario=req.params.apellido
    res.json({"usuario" : nameUsuario, "apellido": apellidoUsuario});
})

app.get('/ruta4/', (req, res) => {
    //template string
    const numero=req.query.phone || 3245687654
    const orden =req.query.orden || 'sin orden'
    const pagina=req.query.pagina || 1
    res.send(`<h1>LISTADO APRENDICES</h1>
        <h2>El listado en orden ${orden}</h2>
        <h3>Numero: ${numero}</h3>
        <p>Pagina: ${pagina}</p>
    `)
})
//================================================

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;

    if (nombre.length < 3) {
        return res.status(400).send("El nombre es muy corto");
    }

    res.send(`Hola ${nombre}, bienvenido`);
});


app.get("/productos/:nombre", (req, res) => {
    const nombre = req.params.nombre;

    res.json({ "producto": nombre });
    
});


app.listen(port, () => {
    console.log( `SERVIDOR: http://localhost:${port}` );
});