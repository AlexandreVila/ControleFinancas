import { React, useEffect, useState } from 'react'
import Header from './components/Header/index'
import GlobalStyles from './styles/global'
import Body from './components/body'
import axios from 'axios';


const App = () => {

  const [transactionsList, setTransactionsList] = useState([]);
  const [amount, setAmount] = useState([]);
  const [oldState, setOldState] =useState(true);
  
  useEffect(() => {
    if (oldState){
      setOldState(false)
      axios.get('http://localhost:3333/movimentacao').then(response=>{
        if (response.status === 200) {
          setTransactionsList(response.data);
          const amount =
          [{
            "fill": "#5932EA",
            "valor": 0
          },
          {
            "fill": "#EA3232",
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
    }
  }, [transactionsList, oldState])
  
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    axios.post('http://localhost:3333/movimentacao',transaction)
    .then(response => {
      if (response.data) setOldState(true)
    })

  };


  return (
    <>
        <Header />
        <Body handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} amount={amount} setOldState={setOldState}/>
        <GlobalStyles />
    </>
  )
}

export default App