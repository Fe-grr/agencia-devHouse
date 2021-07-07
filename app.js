const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('Olá devFe')
});

server.get('/manutencao', (req, res) => {
    res.sendFile(__dirname + "/src/views/manutencao.html");
});


server.listen(5000, () => console.log('Ouvindo...'))
