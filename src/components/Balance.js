import React from "react";
import { useGlobal } from "../contexts/GlobalState";

const Balance = () => {
  const { state } = useGlobal();
  let tot = 0;

  state.map((el) => (tot += +el.amt));

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {tot < 0 && "-"}${Math.abs(tot)}
      </h1>
    </>
  );
};

export default Balance;
