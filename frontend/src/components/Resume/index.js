import React from 'react';
import Graphic from '../Graphic';
import './styles.css';

const Resume = ({ itens, setItens , amount}) => {
  return (
    <div className='container_resume'>
      <Graphic item={amount} />
    </div>
  )
}

export default Resume