import React from "react";

const AddTransaction = () => {
  return (
    <>
      <h4>Add New transaction</h4>
      <form>
          <div className="formControl">
              <label htmlFor="label">Label</label>
              <input type="text" placeholder="Enter label..." />
          </div>
          <div className="formControl">
              <label htmlFor="amout">(<b>-</b>/ <b>+</b>)Amout &nbsp; &nbsp; [-expense, +icome]</label>
              <input type="text" placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
