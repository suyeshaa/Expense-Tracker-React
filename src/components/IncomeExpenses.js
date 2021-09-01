import React from "react";
import { useGlobal } from "../contexts/GlobalState";

const IncomeExpenses = () => {
  const { exp } = useGlobal();
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${exp.inc}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${exp.exp}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
