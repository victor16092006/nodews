const Produto = require("../models/produto.models");

const produtos = [
  new Produto({
    id: 1,
    nome: "Notebook",
    preco: 3500
  }),

  new Produto({
    id: 2,
    nome: "Mouse",
    preco: 120
  })
];

function listar() {
  return produtos;
}

function buscarPorId(id) {
  return produtos.find(p => p.id === Number(id));
}

function criar(dados) {
  if (!dados.nome || dados.preco == null) {
    throw new Error("nome e preco são obrigatórios");
  }

  const produto = new Produto({
    id: produtos.length + 1,
    nome: dados.nome,
    preco: dados.preco
  });

  produtos.push(produto);

  return produto;
}

function atualizar(id, dados) {
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return null;
  }

  if (!dados.nome || dados.preco == null) {
    throw new Error("nome e preco são obrigatórios");
  }

  produto.nome = dados.nome;
  produto.preco = dados.preco;

  return produto;
}

function atualizarParcial(id, dados) {
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return null;
  }

  if (dados.nome !== undefined) {
    produto.nome = dados.nome;
  }

  if (dados.preco !== undefined) {
    produto.preco = dados.preco;
  }

  return produto;
}

function excluir(id) {
  const indice = produtos.findIndex(p => p.id === Number(id));

  if (indice === -1) {
    return null;
  }

  const produto = produtos.splice(indice, 1);

  return produto[0];
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  excluir
};
