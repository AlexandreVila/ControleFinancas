import { React, useState } from 'react'
import './styles.css';

const Form = ({ handleAdd }) => {

  const [desc, setDesc] = useState("");
  const [data, setData] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState('');

  const handleSave = () => {
    if (!data || !amount) {
      alert("Informe a data e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      observacao: desc,
      valor: amount,
      data: data,
      tipomovimentacao: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
    setData("");
    setExpense('')
  };
  console.log(isExpense);
  return (
      <div className='form_container'>
          <div className='title_form'>Movimentação</div>

          <div className='container_inputs_form'>

              <div className='input_container_flex'>
                  <div className='input_container_form'>
                    <label className='label_form'>Valor</label>
                    <input className='input_form' placeholder="Digite o valor" value={amount} onChange={(e) => setAmount(e.target.value)} />
                  </div>

                  <div className='input_container_form'>                    
                    <label className='label_form'>Data</label>
                    <input type='date' className='input_form'  value={data} onChange={(e) => setData(e.target.value)} />
                  </div>

              </div >
              <div className='input_container_flex_form_2'>
                    <label className='label_form'>Observação (opcional) </label>
                    <input className='input_form' placeholder="Digite a observação" value={desc} onChange={(e) => setDesc(e.target.value)}/>
              </div >

              <div className='container_buttons_radios'>
                  <div className='input_container_flex_2'>
                  <div className='label_form'>Tipo movimentação</div>
                  <div className='radios_container'>
                        <div className='radio_container_item'>
                          <input type="radio" id="rExpenses" className='option-input radio' defaultChecked name="group1" onChange={() => setExpense('0')} />
                          <label htmlFor="rExpenses" className='label_radio' >Despesa</label>
                        </div>
                        <div className='radio_container_item'>
                          <input type="radio" id="rIncome" className='option-input radio' name="group1" onChange={() => setExpense('1')} />
                          <label htmlFor="rIncome" className='label_radio'>Receita</label>
                        </div>
                  </div>
                  </div >
                    <button className='button_form' onClick={handleSave}>ADICIONAR</button>
              </div>
          </div>

      </div>
  )
}

export default Form