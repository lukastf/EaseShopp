const express = require('express');
const router = express.Router();

const Categoria = require('../classes/Categoria');
const Produto = require('../classes/Produto');
const ProdutosComprados = require('../classes/ProdutosComprados');

//categoria

router.get('/categorias/listar', async (req, resp) => {
  Categoria.get(req, resp);
});

router.get(
  '/categorias/listar' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  Categoria.getAdminPagination(req, resp);
});

router.get(
  '/categorias/listar' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  Categoria.getAdmin(req, resp);
});

router.post('/categoria', async (req, resp) => {
  Categoria.post(req, resp);
});

router.put('/categoria', async (req, resp) => {
  Categoria.put(req, resp);
});

router.delete('/categorias/listar/:id/:_idParceiro/:senha', async (req, res) => {
  Categoria.delete(req, res);
});

//produto

router.get('/:id', async (req, resp) => {
  Produto.getOne(req, resp);
});

router.get(
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/sort/:sort', async (req, resp) => {
  Produto.getPagination(req, resp);
});

router.get(
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId' + 
  '/sort/:sort', async (req, resp) => {
  Produto.get(req, resp);
});

router.get(
  '/parceiro/:_idParceiro' +
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/sort/:sort', async (req, resp) => {
  Produto.getPagination(req, resp);
});

router.get(
  '/parceiro/:_idParceiro' +
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId' +
  '/sort/:sort', async (req, resp) => {
  Produto.get(req, resp);
});

router.get(
  '/parceiro/:_idParceiro' +
  '/:senha' +
  '/vendas' +
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/sort/:sort', async (req, resp) => {
  Produto.getParceiroVendasPagination(req, resp);
});

router.get(
  '/parceiro/:_idParceiro' +
  '/:senha' +
  '/vendas' +
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId' +
  '/sort/:sort', async (req, resp) => {
  Produto.getParceiroVendas(req, resp);
});

router.get(
  '/usuario/:_idUsuario' +
  '/:senha' +
  '/compras' +
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/sort/:sort', async (req, resp) => {
  Produto.getUsuarioComprasPagination(req, resp);
});

router.get(
  '/usuario/:_idUsuario' +
  '/:senha' +
  '/compras' +
  '/itensPage/:itensPage' +
  '/categoria/:categoria' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId' +
  '/sort/:sort', async (req, resp) => {
  Produto.getUsuarioCompras(req, resp);
});

router.get(
  '/usuario/:_idUsuario' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/dataInicio/:dataInicio' + 
  '/dataTermino/:dataTermino', async (req, resp) => {
  Produto.getExtratoPagination(req, resp);
});

router.get(
  '/usuario/:_idUsuario' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pageId/:pageId' + 
  '/dataInicio/:dataInicio' +
  '/dataTermino/:dataTermino', async (req, resp) => {
  Produto.getExtrato(req, resp);
});

router.get(
  '/saques/usuario/:_idUsuario' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/dataInicio/:dataInicio' + 
  '/dataTermino/:dataTermino', async (req, resp) => {
  Produto.getExtratoSaquesPagination(req, resp);
});

router.get(
  '/saques/usuario/:_idUsuario' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pageId/:pageId' + 
  '/dataInicio/:dataInicio' +
  '/dataTermino/:dataTermino', async (req, resp) => {
  Produto.getExtratoSaques(req, resp);
});

router.post('/imagens', async (req, res) => {
  Produto.postImagens(req, res);
});

router.post('/deleteImagens', async (req, res) => {
  Produto.deleteImagens(req, res);
});

router.post('/multi', async (req, res) => {
  Produto.postMulti(req, res);
});

router.post('/', async (req, res) => {
  Produto.post(req, res);
});

router.put('/:id/:_idParceiro', async (req, res) => {
  Produto.put(req, res);
});

router.delete('/:id/:_idParceiro/:senha', async (req, res) => {
  Produto.delete(req, res);
});

router.put('/favorito/:id/:_idUsuario', async (req, res) => {
  Produto.putFavorito(req, res);
});

router.put('/status/:id/:_idParceiro', async (req, res) => {
  Produto.putStatus(req, res);
});

router.put('/codigoRastreio/:id/:_idParceiro', async (req, res) => {
  Produto.putCodigoRastreio(req, res);
});

router.put('/enderecoRetirada/:id/:_idParceiro', async (req, res) => {
  Produto.putEnderecoRetirada(req, res);
});

router.delete('/produtosComprados/:id/:_idParceiro/:senha', async (req, res) => {
  ProdutosComprados.delete(req, res);
});

router.get(
  '/produtosComprados' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  ProdutosComprados.getPagination(req, resp);
});

router.get(
  '/produtosComprados' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  ProdutosComprados.get(req, resp);
});

module.exports = router;