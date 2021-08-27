const express = require("express");
const produtoController = require("../controllers/produtosController");
const routes = express.Router();
const verificaAdmin = require("../middlewares/admin");
const upload = require("../middlewares/uploads");

// routes.get("/admin/salvar-produto", upload.single("imagem"), produtoController.salvarProduto);
routes.get("/admin/produtos", produtoController.listarProdutosAdmin)
routes.get("/admin/cadastro-produto", produtoController.cadastrarProduto);
routes.post("/salvar-produto", upload.single("imagem"), produtoController.salvarProduto)
routes.get("/produtos/lista", (req, res) => {
    res.send("Tela de produtos")
});

// routes.get("/produtos/:nome", (req, res) => {
//     res.send(req.params.nome)
//     res.send("Tela de produtos")
// })
routes.delete("/deletar-produto/:id", produtoController.deletarProduto);


module.exports = routes;