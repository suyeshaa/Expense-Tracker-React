import React from "react";
import { useGlobal } from "../contexts/GlobalState";

const TransactionList = () => {
  const { state, dispatch } = useGlobal();

  const lst = state.map((el) => {
    const val = +el.amt;

    return (
      <li className={val < 0 ? "minus" : "plus"}>
        {el.txt}
        <span>
          {val < 0 ? "-" : ""}${Math.abs(el.amt)}
        </span>
        <button onClick={() => clickHandler(el.id)} className="delete-btn">
          x
        </button>
      </li>
    );
  });

  const clickHandler = (id) => {
    const act = {
      id: id,
      type: "del",
    };
    dispatch(act);
  };

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {lst}
      </ul>
    </>
  );
};

export default TransactionList;
