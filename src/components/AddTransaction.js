import React, { useState } from "react";
import { useGlobal } from "../contexts/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { data } = useGlobal();

  const clickHandler = (e) => {
    e.preventDefault();
    data(amount, text);

    setText("");
    setAmount("");
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={textChangeHandler}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={amountChangeHandler}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={clickHandler}>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
