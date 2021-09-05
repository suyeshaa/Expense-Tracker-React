import React, { createContext, useContext, useReducer } from "react";

const ctx = createContext();

export const useGlobal = () => useContext(ctx);

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "del": {
      return state.filter((el) => el.id !== action.id);
    }
    default: {
      return state;
    }
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <ctx.Provider value={value}>{children}</ctx.Provider>;
};
