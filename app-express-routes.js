const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(
    '<h1>Pagina principal</h1><a href="/about"> about </a><a href="/contact"> contact</a>'
  );
});

app.get('/about', (req, res) => {
  res.send('<h1>Pagina de prueba </h1><a href="/">home</a>');
});

app.use((req, res) => {
  res.status(404).send('<h1>Pagina no encontrada</h1><a href="/">home</a>');
});

app.listen(3000, () => {
  console.log('Node.js esta escuchando en el puerto 3000');
});
