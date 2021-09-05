import React from "react";
import { useGlobal } from "../contexts/GlobalState";

const IncomeExpenses = () => {
  const { state } = useGlobal();

  let neg = 0,
    pos = 0;

  state.map((el) => {
    if (el.amt < 0) {
      neg += Math.abs(+el.amt);
    } else {
      pos += +el.amt;
    }
    return null;
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${pos}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${neg}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
