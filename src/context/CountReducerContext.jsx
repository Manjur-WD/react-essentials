import React, { createContext, useReducer } from "react";

const CountReducerContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "RST":
      return { count: 0 };
    default:
      return { count: state.count };
  }
};

const CountReducerProvider = ({ children }) => {
  // usereducer section
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CountReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </CountReducerContext.Provider>
  );
};

export { CountReducerContext, CountReducerProvider };
