import React from 'react'
import './styles.css'
import Form from '../Form'
import Resume from '../Resume'
import Grid from '../Grid'

const Body = ( { transactionsList , setTransactionsList , amount}) => {
  console.log(transactionsList)
  return (
    <div className='container_body'>  
        <div className='container_section_1'>
            <Form />
            <Resume itens={transactionsList} setItens={setTransactionsList} amount={amount}/>
        </div>
        <div className='container_section_2'>
            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </div>
    </div>
  )
}

export default Body

