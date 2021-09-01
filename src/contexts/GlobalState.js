import React, { createContext, useContext, useState } from "react";

const ctx = createContext();

export const useGlobal = () => {
  return useContext(ctx);
};

export const GlobalProvider = ({ children }) => {
  const prog = {
    bal: 0,
    exp: 0,
    inc: 0,
    his: [],
  };
  const [exp, setExp] = useState(prog);

  function data(amt, text) {
    //chng amt string to int
    amt = +amt;

    //calc exp and inc adder
    let isNeg = amt < 0;
    let inn = 0,
      ex = 0;
    isNeg ? (ex = amt) : (inn = amt);

    //generate his obj
    const dt = {
      id: Math.random(),
      text: text,
      amount: amt,
    };

    // update state
    setExp((prev) => ({
      his: [dt, ...prev.his],
      bal: prev.bal + amt,
      inc: prev.inc + inn,
      //keeping exp always positive
      //coz ex is always negative
      exp: prev.exp + ex * -1,
    }));
  }

  function dtlHandler(id) {
    //getting selected item
    let item = exp.his.filter((el) => el.id === id);
    let nwamt = item[0].amount;

    //updating state
    setExp((prev) => ({
      // we are updating all state
      // so we can remove prev
      // ...prev,
      his: prev.his.filter((el) => el.id !== id),
      bal: prev.bal - nwamt,
      inc: nwamt > 0 ? prev.inc - nwamt : prev.inc,
      exp: nwamt < 0 ? prev.exp + nwamt : prev.exp,
    }));
  }

  const value = {
    exp,
    data,
    dtlHandler,
  };
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};
