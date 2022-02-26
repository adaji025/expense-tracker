import React from "react";
import './IncomeExpense.css'

const IncomeExpense = () => {
  return (
    <div className="expenseContainer">
      <div className="income">
        <h2>Income</h2>
        <p>₦800</p>
      </div>
      <div className="vtLine"></div>
      <div className="expense">
        <h2>Expense</h2>
        <p>₦800</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
