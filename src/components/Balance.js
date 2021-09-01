import React from "react";
import { useGlobal } from "../contexts/GlobalState";

const Balance = () => {
  const { exp } = useGlobal();
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {exp.bal < 0 && "-"}${exp.bal < 0 ? exp.bal * -1 : exp.bal}
      </h1>
    </>
  );
};

export default Balance;
