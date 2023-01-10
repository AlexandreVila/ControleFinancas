import React from 'react';
import './styles.css';
import GridItem from '../GridItem'

const Grid = ({ itens, setItens }) => {
  
  return (
    <div className='container_grid'>
      <table>
        <thead>
          <tr>
            <th className='container_th'>Valor</th>
            <th className='container_th'>Data</th>
            <th className='container_th'>Observação</th>
            <th className='container_th'>Tipo</th>
            <th className='container_th'>Ações</th>
          </tr>
        </thead>
        <tbody className='container_tbody' >
          {itens?.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </tbody>
    
      </table>
    </div>
  )
}

export default Grid