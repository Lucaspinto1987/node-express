const http = require('node:http');
const url = require('node:url');

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const path = parseUrl.pathname;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  //console.log(parseUrl);

  if (path === '/') {
    res.end(
      '<h1>HOLA SOY LA HOME</h1><a href="/about">about</a><a href="/contact"> contact</a>'
    );
  } else if (path === '/about') {
    res.end('<h1>HOLA SOY ABOUT</h1><a href="/">home</a>');
  } else {
    res.end('<h1>Pagina no encontrada</h1><a href="/">home</a>');
  }
});

server.listen(3000, () => {
  console.log('Node.js routes esta escuchando en el puerto 3000');
});
