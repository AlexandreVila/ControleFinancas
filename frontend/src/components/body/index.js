import React from 'react'
import './styles.css'
import Form from '../Form'
import Resume from '../Resume'
import Grid from '../Grid'

const Body = ( { handleAdd, transactionsList , setTransactionsList , amount, setOldState}) => {
  return (
    <div className='container_body'>  
        <div className='container_section_1'>
            <Form handleAdd={handleAdd}  transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
            <Resume itens={transactionsList} setItens={setTransactionsList} amount={amount}/>
        </div>
        <div className='container_section_2'>
            <Grid itens={transactionsList} setItens={setTransactionsList} setOldState={setOldState} />
        </div>
    </div>
  )
}

export default Body

