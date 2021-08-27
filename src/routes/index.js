const express = require('express')
const routes = express.Router()
const path = require('path')
const depoimentos = require('../models/depoimentos.js')
const indexController = require('../controllers/indexController')


routes.get('/manutencao', indexController.exibirManutencao)

routes.get('/', (req, res) => {
    res.sendFile(path.resolve('src/views', 'home.html'));
})

routes.get('/home', (req, res) => {
    res.render('home', {titulo: "Sua empresa em primeiro lugar!"})
})

routes.get('/blog', (req, res) => {
    res.render('blog')
})

routes.get('/contato', (req, res) => {
    res.render('contato')
})

routes.post('/receber-contato', (req, res) => {
    console.log(req.body)
    res.send('Contato recebido')
})

routes.get('/depoimentos', (req, res) => {
    res.render('depoimentos', { depoimentos, titulo: "Depoimentos" })
})

routes.post("/cadastrar-depoimento")

module.exports = routes