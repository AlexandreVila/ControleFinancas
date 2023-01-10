import React from 'react';
import { FaTrash } from "react-icons/fa";
import './styles.css'

const GridItem = ({ item, onDelete }) => {

  return (
    <tr>
        <td>R$ {item.valor}</td>
        <td>{item.data}</td>
        <td>{item.observacao}</td>
        <td>
            {item.tipomovimentacao === "1" ? ( 
                <label className='label_receita'>Receita</label>
            ):(
                <label className='label_despesa'>Despesa</label>
            )}
            
        </td>
        <td>
            <FaTrash onClick={() => onDelete(item.idmovimentacao)}/>
        </td>
    </tr>
  )
}

export default GridItem