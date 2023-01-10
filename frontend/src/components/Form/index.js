import { React, useState } from 'react'
import './styles.css';

const Form = ({handleAdd}) => {

  const [desc, setDesc] = useState("");
  const [data, setData] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState('');

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      data: data,
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
      <div className='form_container'>
          <div className='title_form'>Movimentação</div>

          <div className='avo'>

              <div className='input_container_flex'>
                  <div className='filho'>
                    <label>Valor</label>
                    <input className='input' value={amount} onChange={(e) => setAmount(e.target.value)} />
                  </div>

                  <div className='filho'>                    
                    <label>Data</label>
                    <input className='input' value={data} onChange={(e) => setData(e.target.value)} />
                  </div>

              </div >
              <div className='tio'>
                    <label>observacao</label>
                    <input className='input' value={desc} onChange={(e) => setDesc(e.target.value)}/>
              </div >

              <div className='label_tipo_movimentacao'>Tipo movimentação</div>

              <div className='input_container_flex'>

                <div>
                  <input type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense('0')} />
                  <label htmlFor="rIncome">Receita</label>
                </div>
                <div>
                  <input type="radio" id="rExpenses" name="group1" onChange={() => setExpense('1')} />
                  <label htmlFor="rExpenses">Despesa</label>
                </div>

                <button onClick={handleSave}>ADICIONAR</button>
              </div >

          </div>

      </div>
  )
}

export default Form