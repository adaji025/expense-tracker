import React, { useContext } from 'react'
import './TransactionList.css'
import { GlobalContext } from '../../contexts/GlobalState'
import Transaction from '../Transaction/Transaction'

const TransactionList = () => {
  const { transactions} = useContext(GlobalContext)
  return (
    <div>
        <h3 className='history'>History</h3>
        <ul className='list'>
            {transactions.map(item => {
              return (
                <Transaction key={item.id} transaction={item} />
              )
            })}
        </ul>
    </div>
  )
}

export default TransactionList