const connection = require('./connection');

const getAll = async () => {
    const [movimentacao, _buffer] = await connection.execute('SELECT * FROM controlefinanceiro.movimentacao');
    return movimentacao;
};

const createMovimentacao = async (movimentacao) => {
    const { observacao, valor, data, tipomovimentacao } = movimentacao;
    
    const [createMovimentacao] = await connection.execute('INSERT INTO controlefinanceiro.movimentacao (observacao, valor, data, tipomovimentacao) VALUES (?, ?, ?, ?)', 
        [observacao, valor, data, tipomovimentacao]); 
    
    return {insertId: createMovimentacao.insertId} ;                                                                                                                            
};

const deleteMovimentacao = async (id) => {
    const deleteMovimentacao = await connection.execute('DELETE FROM controlefinanceiro.movimentacao WHERE (idmovimentacao = ?)', [id]);
    return deleteMovimentacao;                                                                                                                            
};

module.exports = {
    getAll,
    createMovimentacao,
    deleteMovimentacao
};
