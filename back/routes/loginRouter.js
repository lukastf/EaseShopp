const express = require('express');
const router = express.Router();

const Login = require('../classes/Login');

router.post('/usuario', async (req, resp) => {
  Login.post(req, resp, "usuarios");
});

router.post('/parceiro', async (req, resp) => {
  Login.post(req, resp, "parceiros");
});

module.exports = router;
