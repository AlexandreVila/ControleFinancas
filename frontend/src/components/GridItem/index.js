import React from 'react';
import { FaTrash } from "react-icons/fa";
import './styles.css'

const GridItem = ({ item, onDelete }) => {
    const split = (data) =>{
        return `${data.split("-")[2]}/${data.split("-")[1]}/${data.split("-")[0]}`
    }

  return (
    <tr>
        <td>R$ {item.valor}</td>
        <td>{split(item.data)}</td>
        <td>{item.observacao}</td>
        <td>
            {item.tipomovimentacao === "1" ? ( 
                <label className='label_receita'>Receita</label>
            ):(
                <label className='label_despesa'>Despesa</label>
            )}
            
        </td>
        <td className='td_grid'>
            <FaTrash className='button_delete' onClick={() => onDelete(item.idmovimentacao)}/>
        </td>
    </tr>
  )
}

export default GridItem