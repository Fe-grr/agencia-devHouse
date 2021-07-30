const express = require('express')
const routes = express.Router()
const path = require('path')

routes.get('/manutencao', (req, res) => {
    res.sendFile(path.resolve('src/views', 'manutencao.html'))
})

routes.get('/', (req, res) => {
    res.sendFile(path.resolve('src/views', 'home.html'));
})

routes.get('/home', (req, res) => {
    res.sendFile(path.resolve('src/views', 'home.html'))
})

routes.get('/blog', (req, res) => {
    res.sendFile(path.resolve('src/views', 'blog.html'))
})

routes.get('/contato', (req, res) => {
    res.sendFile(path.resolve('src/views', 'contato.html'))
})

routes.post('/receber-contato', (req, res) => {
    console.log(req.body)
    res.send('Contato recebido')
})

module.exports = routes