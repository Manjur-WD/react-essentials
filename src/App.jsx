import React from "react";
import "../src/App.css";
import UseStateHook from "./components/UseStateHook";
import UseEffectHook from "./components/UseEffectHook";
import BestDataFetchTechnique from "./components/BestDataFetchTechnique";

const App = () => {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
      <BestDataFetchTechnique />
    </>
  );
};

export default App;
