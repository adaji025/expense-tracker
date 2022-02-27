import React, { useContext, useState } from "react";
import { GlobalContext } from '../../contexts/GlobalState'
import './AddTransaction.css'

const AddTransaction = () => {
  const [label, setLabel] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction =  {
      id: Math.floor(Math.random() * 1000000),
      label,
      amount: +amount
    }
    
    addTransaction(newTransaction)
  }
  return (
    <>
      <h4>Add New transaction</h4>
      <form onSubmit={onSubmit}>
          <div className="formControl">
              <label htmlFor="label">Label</label>
              <input type="text" placeholder="Enter label..." onChange={e => setLabel(e.target.value)} />
          </div>
          <div className="formControl">
              <label htmlFor="amout">(<b>-</b>/ <b>+</b>)Amout &nbsp; &nbsp; [-expense, +icome]</label>
              <input type="text" placeholder="Enter amount..." onChange={e => setAmount(e.target.value)} />
          </div>
          <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
