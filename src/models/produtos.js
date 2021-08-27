const {v4: generateId} = require('uuid')
let produtos = [
    {
        id: generateId(),
        nome: "Site",
        descricao: "Seu site incrivel",
        imagem:  "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg"
    }
]

function cadastrarProduto(nome, descricao, imagem){
    const produto = {
        id: generateId(),
        nome: "Plataforma", 
        descricao: "Seu site perfeito",
        imagem:  "https://cdn.w600.comps.canstockphoto.com.br/loja-site-web-produto-conceito-bot%C3%A3o-vetor-cliparte_csp52582154.jpg"
    }

    return produtos.push(produto)
}

function deletarProduto(id){
    produtos = produtos.filter(produto => produto.id != id)     
}

module.exports = {produtos, cadastrarProduto};