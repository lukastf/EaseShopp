const express = require('express');
const router = express.Router();

const Usuario = require('../classes/Usuario');
const EsqueciMinhaSenha = require('../classes/EsqueciMinhaSenha');
const SolicitarConvenio = require('../classes/SolicitarConvenio');
const FaleConosco = require('../classes/FaleConosco');
const ContaResgate = require('../classes/ContaResgate');
const FinalizarCompra = require('../classes/FinalizarCompra');
const Indicacoes = require('../classes/Indicacoes');
const Saques = require('../classes/Saques');

router.post('/check', async (req, res) => {
  Usuario.postCheck(req, res);
});

router.post('/esqueciMinhaSenha', async (req, res) => {
  EsqueciMinhaSenha.post(req, res);
});

router.post('/', async (req, res) => {
  Usuario.post(req, res);
});

router.put('/:id', async (req, res) => {
  Usuario.put(req, res);
});

router.post('/multi', async (req, res) => {
  Usuario.postMulti(req, res);
});

router.post('/multi2', async (req, res) => {
  Usuario.postMulti2(req, res);
});

router.post('/solicitarConvenio', async (req, res) => {
  SolicitarConvenio.post(req, res);
});

router.post('/faleConosco', async (req, res) => {
  FaleConosco.post(req, res);
});

router.post('/contaResgate', async (req, res) => {
  ContaResgate.post(req, res);
});

router.put('/contaResgate/:_idUsuario', async (req, res) => {
  ContaResgate.put(req, res);
});

router.post('/finalizarCompra', async (req, res) => {
  FinalizarCompra.post(req, res);
});

router.post('/finalizarCompra/:numeroPedido', async (req, res) => {
  FinalizarCompra.post(req, res);
});

//router.post('/validarEmail/:email/:codigoVerificacao', async (req, res) => {
router.post('/validarEmail', async (req, res) => {
  Usuario.validarEmail(req, res);
});

router.get(
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  Usuario.getPagination(req, resp);
});

router.get(
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  Usuario.get(req, resp);
});

router.delete('/:id/:_idParceiro/:senha', async (req, res) => {
  Usuario.delete(req, res);
});

router.delete('/solicitarConvenio/:id/:_idParceiro/:senha', async (req, res) => {
  SolicitarConvenio.delete(req, res);
});

router.delete('/faleConosco/:id/:_idParceiro/:senha', async (req, res) => {
  FaleConosco.delete(req, res);
});

router.delete('/esqueciMinhaSenha/:id/:_idParceiro/:senha', async (req, res) => {
  EsqueciMinhaSenha.delete(req, res);
});

router.delete('/indicacoes/:id/:_idParceiro/:senha', async (req, res) => {
  Indicacoes.delete(req, res);
});

router.delete('/saques/:id/:_idParceiro/:senha', async (req, res) => {
  Saques.delete(req, res);
});

router.get(
  '/solicitarConvenio' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  SolicitarConvenio.getPagination(req, resp);
});

router.get(
  '/solicitarConvenio' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  SolicitarConvenio.get(req, resp);
});

router.get(
  '/faleConosco' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  FaleConosco.getPagination(req, resp);
});

router.get(
  '/faleConosco' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  FaleConosco.get(req, resp);
});

router.get(
  '/esqueciMinhaSenha' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  EsqueciMinhaSenha.getPagination(req, resp);
});

router.get(
  '/esqueciMinhaSenha' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  EsqueciMinhaSenha.get(req, resp);
});

router.get(
  '/carrinho' +
  '/:id' +
  '/:senha', async (req, resp) => {
  Usuario.getCarrinho(req, resp);
});

router.get(
  '/saque' +
  '/:id' +
  '/:senha', async (req, resp) => {
  Usuario.getSaque(req, resp);
});

router.get('/finalizarCompra/:id/:senha', async (req, res) => {
  FinalizarCompra.get(req, res);
});

router.get('/contaResgate/:_idUsuario/:senha', async (req, res) => {
  ContaResgate.getOne(req, res);
});

router.get(
  '/indicacoes' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  Indicacoes.getPagination(req, resp);
});

router.get(
  '/indicacoes' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  Indicacoes.get(req, resp);
});

router.get(
  '/saques' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  Saques.getPagination(req, resp);
});

router.get(
  '/saques' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  Saques.get(req, resp);
});

router.get(
  '/contador' +
  '/admin/:_idParceiro' +
  '/:senha', async (req, resp) => {
  Usuario.getContador(req, resp);
});

module.exports = router;
