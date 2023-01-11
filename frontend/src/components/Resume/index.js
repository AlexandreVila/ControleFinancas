import React from 'react';
import Graphic from '../Graphic';
import './styles.css';

const Resume = ({ itens, setItens , amount}) => {
  return (
    <div className='container_resume'>
      <div className='title_resume'>
        <div className='title_label'>Receitas e despesas</div>

        <div className='legend_resume'>
          <div className='legenda'>
            <div className='squad_roxo'></div>
            <label className='label_squad'>Receitas</label>
          </div>
          <div className='legenda'>
            <div className='squad_verm' ></div>
            <label className='label_squad'>Despesas</label>
          </div>
        </div>

      </div>
      
      <Graphic item={amount} />
    </div>
  )
}

export default Resume