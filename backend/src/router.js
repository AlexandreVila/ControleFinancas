const express = require('express');

const router = express.Router();

const movimentacaoController = require('./controllers/movimentacaoController');

router.get('/movimentacao', movimentacaoController.getAll);

router.post('/movimentacao', movimentacaoController.createMovimentacao);

router.delete('/movimentacao/:id', movimentacaoController.deleteMovimentacao);

module.exports = router;