import React, { useContext } from "react";
import { countContext } from "../context/CountContext";

const UseContextHook = () => {
    const {count,setCount} = useContext(countContext);

    
  return (
    <>
      <div className="text-center font-mont">
        <h1 className="font-gilroy text-center text-4xl border border-blue-500 inline-block p-5 my-3">
          CONTEXT API
        </h1>
        <h2 className="font-gilroy text-center text-8xl">{count}</h2>
        <button type="button" className="bg-green-600 p-5" onClick={()=>{setCount(count + 1)}}>
          Increase
        </button>
        <button type="button" className="bg-orange-400 p-5" onClick={()=>{setCount(0)}}>
          Reset
        </button>
        <button
          type="button"
          className={count ===0 ? ("bg-red-600 p-5 cursor-not-allowed pointer-events-none opacity-50"):("bg-red-600 p-5")}
          onClick={()=>{setCount(count - 1)}}
        >
          Decrease
        </button>
        <hr className="my-10" />
      </div>
    </>
  );
};

export default UseContextHook;
