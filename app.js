import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
const port = process.env.PUERTO || 3000;
app.get("/", (__, res) => {
  res.send("Aprendicez ficha 3407186 SENA");
});

app.get("/ruta1", (req, res) => {
  //template string
  res.send("<h1>Usando res.send</h1>");
});

app.get("/ruta2", (req, res) => {
  //template string
  res.json({ dev: "node --watch app.js", script: "node app.js" });
});

app.get("/ruta3/:nombre/:apellido", (req, res) => {
  //template string
  const nameUsuario = req.params.nombre;
  const apellidoUsuario = req.params.apellido;
  res.json({ usuario: nameUsuario, apellido: apellidoUsuario });
});

app.get("/ruta4/", (req, res) => {
  //template string
  const numero = req.query.phone || 3245687654;
  const orden = req.query.orden || "sin orden";
  const pagina = req.query.pagina || 1;
  res.send(`<h1>LISTADO APRENDICES</h1>
        <h2>El listado en orden ${orden}</h2>
        <h3>Numero: ${numero}</h3>
        <p>Pagina: ${pagina}</p>
    `);
});
//================================================

app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;

  if (nombre.length < 3) {
    return res.status(400).send("El nombre es muy corto");
  }

  res.send(`Hola ${nombre}, bienvenido`);
});

// 2. Producto
app.get("/productos/:nombre", (req, res) => {
  const nombre = req.params;
  const producto = {
    id: 1,
    nombre: nombre,
    stock: 10,
    precio: 50000,
    categoria: "Tecnología",
  };
  res.send(`Prducto ${nombre}`);
  res.json(producto);
});

//3. multiples parametros en la ruta

app.get("/productos/:categoria/:id", (req, res) => {
  const { categoria, id } = req.params;

  res.json({
    servidor: "servidor express",
    categoria: categoria,
    producto: id,
  });
});

app.listen(port, () => {
  console.log(`SERVIDOR: http://localhost:${port}`);
});

//4. Parametros combinados con QueryParams
app.get("/usuarios/:id/posts", (req, res) => {
    const idUsuario = req.params.id;
    const orden = req.query.orden || "asc";

    let posts = [
        { id: 1, titulo: "Post 1", usuarioId: idUsuario },
        { id: 2, titulo: "Post 2", usuarioId: idUsuario },
        { id: 3, titulo: "Post 3", usuarioId: idUsuario },
    ];

    if (orden === "desc") {
        posts = posts.reverse();
    }

    res.json({
        usuario: idUsuario,
        orden: orden,
        publicaciones: posts
    });
});

//5. Parametros combinados con QueryParams
app.get("/usuarios/:id/:postId/comentarios", (req, res) => {
    const { id, postId } = req.params;
    const orden = req.query.orden || "asc";

    let comentarios = [
        { id: 1, texto: "Que bien!", post: postId },
        { id: 2, texto: "Me alegro mucho", post: postId },
        { id: 3, texto: "Muy util", post: postId },
    ];

    if (orden === "desc") {
        comentarios = comentarios.reverse();
    }
        
    res.json({
        usuario: id,
        post: postId,
        orden: orden,
        comentarios: comentarios
    });
});
//6. Validación y manejo de recursos no encontrados

const libros = [
    { isbn: "2", titulo: "La_llorona" },
    { isbn: "9", titulo: "Sapito" },
    { isbn: "97", titulo: "Cienpies" },
    ];

app.get("/libros/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const libro = libros.find(l => l.isbn === isbn);

    if (libro) {
        res.json(libro);
        } else {
        res.status(404).json({ error: "ibro no encontrado" });
    }
});
