import React, { useContext } from "react";
import { CountReducerContext } from "../context/CountReducerContext";
import { useNavigate } from "react-router-dom";

const ContextReducer = () => {

  const navigate = useNavigate();


    const {state , dispatch} = useContext(CountReducerContext);
    console.log(state);
    
    

  return (
    <>
      <div className="text-center font-mont">
        <h1 className="font-gilroy text-center text-4xl border border-blue-500 inline-block p-5 my-3">
          CONTEXT API WITH USEREDUCER
        </h1>
        <h2 className="font-gilroy text-center text-8xl">{state.count}</h2>
        <button
          type="button"
          className="bg-green-600 p-5"
          onClick={()=>{dispatch({type: "INC"})}}
        >
          Increase
        </button>
        <button
          type="button"
          className="bg-orange-400 p-5"
          onClick={()=>{dispatch({type: "RST"})}}
        >
          Reset
        </button>
        <button
          type="button"
          className={
            state.count === 0
              ? "bg-red-600 p-5 cursor-not-allowed pointer-events-none opacity-50"
              : "bg-red-600 p-5"
          }
        onClick={()=>{dispatch({type: "DEC"})}}
        >
          Decrease
        </button>
        <hr className="my-10" />
      </div>
      <div className="text-center">
      <button type="button" onClick={()=>{navigate("/redux-rtk")}} className="bg-violet-700 text-white font-gilroy p-5">DEEP DIVE INTO REDUX AND RTK</button>
      </div>
    </>
  );
};

export default ContextReducer;
