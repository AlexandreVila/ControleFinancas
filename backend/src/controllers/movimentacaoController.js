const movimentacaoModel = require('../models/movimentacaoModel');

const getAll = async (_req,res) => {
    
    const movimentacao = await movimentacaoModel.getAll();
    
    return res.status(200).json(movimentacao);
};

const createMovimentacao = async (req, res) =>{
    const createMovimentacao = await movimentacaoModel.createMovimentacao(req.body);
    
    return res.status(201).json(createMovimentacao);
};

const deleteMovimentacao = async (req, res) => {
    const { id } = req.params;
    await movimentacaoModel.deleteMovimentacao(id);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createMovimentacao,
    deleteMovimentacao
};