const express = require('express');
const server = express();
const routes = require('./routes');

// usando template/view engine
server.set('view engine', 'ejs');

// habilitar arquivos estáticos /css,  /img, /js
server.use(express.static('public'));

// usar req.body
server.use(express.urlencoded({ extended: true }));

// routes
server.use(routes);

server.listen(3000, () => console.log('Servidor rodando...'));
