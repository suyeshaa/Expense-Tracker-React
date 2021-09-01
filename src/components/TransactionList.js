import React from "react";
import { useGlobal } from "../contexts/GlobalState";

const TransactionList = () => {
  const { exp, dtlHandler } = useGlobal();
  console.log(exp.his);

  const list = exp.his.map((el) => {
    let amt = el.amount,
      isNeg = false;

    if (el.amount < 0) {
      amt = el.amount * -1;
      isNeg = true;
    }

    return (
      <li className={isNeg ? "minus" : "plus"} key={el.id}>
        {el.text}{" "}
        <span>
          {isNeg && "-"}${amt}
        </span>
        <button onClick={() => dtlHandler(el.id)} className="delete-btn">
          x
        </button>
      </li>
    );
  });

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {list}
      </ul>
    </>
  );
};

export default TransactionList;
