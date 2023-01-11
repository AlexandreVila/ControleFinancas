import React from 'react';
import './styles.css';
import GridItem from '../GridItem'
import axios from 'axios';

const Grid = ({ itens, setItens, setOldState }) => {

  const onDelete = (ID) => {
      const newArray = itens.filter((transaction) => transaction.idmovimentacao !==ID);
      setItens(newArray);
      axios.delete(`http://localhost:3333/movimentacao/${ID}`)
      .then(() => {
       setOldState(true)
      })
  }
  
  return (
    <div className='container_grid'>
      <table>
        <thead>
          <tr>
            <th className='container_th'>Valor</th>
            <th className='container_th'>Data</th>
            <th className='container_th'>Observação</th>
            <th className='container_th'>Tipo de movimentação</th>
            <th className='container_th'>Ações</th>
          </tr>
        </thead>
        <tbody className='container_tbody' >
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </tbody>
    
      </table>
    </div>
  )
}

export default Grid