const { urlencoded } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const rotasDeProdutos = require('./src/routes/produtos')
const rotas = require('./src/routes')
const { append } = require("vary");

app.set('view engine', 'ejs')
app.set('views', path.resolve("src/views"))
app.use(express.static('src/public'))
app.use(express.json())
app.use(express.urlencoded({extend: false}))
app.use(rotasDeProdutos)
app.use(rotas)

app.listen(5000, () => console.log('Ouvindo...'))
