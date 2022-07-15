const express = require('express');
const router = express.Router();

const Parceiro = require('../classes/Parceiro');
const SolicitarParceiros = require('../classes/SolicitarParceiros');

router.get('/:id', async (req, resp) => {
  Parceiro.getOne(req, resp);
});

router.get(
  '/admin/:_idParceiro' +
  '/:senha'+
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  Parceiro.getPagination(req, resp);
});

router.get(
  '/admin/:_idParceiro' + 
  '/:senha'+
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  Parceiro.get(req, resp);
});

router.post('/', async (req, res) => {
  Parceiro.post(req, res);
});

router.post('/solicitarParceiros', async (req, res) => {
  SolicitarParceiros.post(req, res);
});

router.put('/:id', async (req, res) => {
  Parceiro.put(req, res);  
});

router.delete('/:id/:_idParceiro/:senha', async (req, res) => {
  Parceiro.delete(req, res);
});

router.delete('/solicitarParceiros/:id/:_idParceiro/:senha', async (req, res) => {
  SolicitarParceiros.delete(req, res);
});

router.get(
  '/solicitarParceiros' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString', async (req, resp) => {
  SolicitarParceiros.getPagination(req, resp);
});

router.get(
  '/solicitarParceiros' +
  '/admin/:_idParceiro' +
  '/:senha' +
  '/itensPage/:itensPage' +
  '/pesquisaString/:pesquisaString' +
  '/pageId/:pageId', async (req, resp) => {
  SolicitarParceiros.get(req, resp);
});

router.get(
  '/contador' +
  '/admin/:_idParceiro' +
  '/:senha', async (req, resp) => {
  Parceiro.getContador(req, resp);
});

module.exports = router;
