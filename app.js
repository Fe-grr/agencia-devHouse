const { urlencoded } = require('express')
const express = require('express')
const server = express()

server.use(express.static('src/public'))
server.use(express.json())
server.use(express.urlencoded({extend: false}))

server.get('/manutencao', (req, res) => {
    res.sendFile(__dirname + "/src/views/manutencao.html");
});

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/home.html');
})

server.get('/home', (req, res) => {
    res.sendFile(__dirname + "/src/views/home.html")
})

server.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/src/views/blog.html")
})

server.get('/contato', (req, res) => {
    res.sendFile(__dirname + "/src/views/contato.html")
})

server.post('/receber-contato', (req, res) => {
    console.log(req.body)
    res.send("Contato recebido")
})
server.listen(5000, () => console.log('Ouvindo...'))
