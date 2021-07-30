const express = require("express");

const routes = express.Router();

routes.get("/produtos/lista", (req, res) => {
    res.send("Tela de produtos")
});

routes.get("/produtos/:nome", (req, res) => {
    res.send(req.params.nome)
    res.send("Tela de produtos")
})

module.exports = routes;