import React from 'react'
import './styles.css';

const Form = () => {
  return (
      <div className='form_container'>
          <div className='title_form'>Movimentação</div>

          <div className='avo'>

              <div className='input_container_flex'>
                  <div className='filho'>
                    <label>Valor</label>
                    <input className='input' />
                  </div>

                  <div className='filho'>                    
                    <label>Data</label>
                    <input className='input' />
                  </div>

              </div >
              <div className='tio'>
                    <label>observacao</label>
                    <input className='input' />
              </div >

          </div>

      </div>
  )
}

export default Form