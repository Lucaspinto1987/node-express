const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hola mundo ! ');
});

server.listen(3000, () => {
  console.log('Node.js esta escuchando en el puerto 3000');
});

