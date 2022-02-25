import React from "react";

const AddTransaction = () => {
  return (
    <>
      <h4>Add New transaction</h4>
      <form>
          <div className="formControl">
              <label htmlFor="label">Label</label>
              <input type="text" placeholder="Enter Label..." />
          </div>
          <div className="formControl">
              <label htmlFor="amout">(<b>-</b>/ <b>+</b>)Amout &nbsp; &nbsp; [-expense, +icome]</label>
              <input type="text" placeholder="Enter Label..." />
          </div>
      </form>
    </>
  );
};

export default AddTransaction;
