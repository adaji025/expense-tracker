import React from 'react'

const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '-' : '+'
  return (
    <li className={transaction.amount > 0 ? 'minus' : 'plus'}>
       Slary 
       <span>50,000</span> 
       <button>X</button>
    </li>
  )
}

export default Transaction