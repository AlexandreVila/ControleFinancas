import { React, useEffect, useState } from 'react'
import Header from './components/Header/index'
import GlobalStyles from './styles/global'
import Body from './components/body'
import axios from 'axios';


const App = () => {

  const [transactionsList, setTransactionsList] = useState([]);
  const [amount, setAmount] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:3333/movimentacao').then(response=>{
      console.log(response)
      if (response.status === 200) {
        setTransactionsList(response.data);
        const amount =
          [{
            "fill": "blue",
            "valor": 0

          },
          {
            "fill": "red",
            "valor": 0
          }];
        response.data.forEach(element => {

          if (element.tipomovimentacao === '1'){

            amount[0].valor = amount[0].valor+parseFloat(element.valor);
          } else {
            amount[1].valor = amount[1].valor+parseFloat(element.valor);
          }
        
        });

        setAmount(amount);
      }
      
    })
  }, [])
  

  return (
    <>
        <Header />
        <Body transactionsList={transactionsList} setTransactionsList={setTransactionsList} amount={amount} />
        <GlobalStyles />
    </>
  )
}

export default App