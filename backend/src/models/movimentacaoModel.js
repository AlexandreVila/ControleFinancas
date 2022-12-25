const connection = require('./connection');

const getAll = async () => {
    const [movimentacao, _buffer] = await connection.execute('SELECT * FROM controlefincanceiro.movimentacao');
    return movimentacao;
};

const createMovimentacao = async (movimentacao) => {
    const { observacao, valor, data, tipomovimentacao } = movimentacao;
    
    const [createMovimentacao] = await connection.execute('INSERT INTO controlefincanceiro.movimentacao (observacao, valor, data, tipomovimentacao) VALUES (?, ?, ?, ?)', 
        [observacao, valor, data, tipomovimentacao]); 
    
    return {insertId: createMovimentacao.insertId} ;                                                                                                                            
};

const deleteMovimentacao = async (id) => {
    const deleteMovimentacao = await connection.execute('DELETE FROM controlefincanceiro.movimentacao WHERE (idmovimentacao = ?)', [id]);
    return deleteMovimentacao;                                                                                                                            
};

module.exports = {
    getAll,
    createMovimentacao,
    deleteMovimentacao
};