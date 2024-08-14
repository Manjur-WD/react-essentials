import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const increMent = () => {
    setCount(count + 1);
  };
  const decreMent = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="font-mont text-center">
      <h1 className="font-gilroy text-center text-4xl border border-blue-500 inline-block p-5 my-3">
        USESTATE HOOK
      </h1>
      <h2 className="font-gilroy text-center text-8xl">
        {count < 0 ? setCount(0) : count}
      </h2>
      <button type="button" className="bg-green-600 p-5" onClick={increMent}>
        Increase
      </button>
      <button type="button" className="bg-orange-400 p-5" onClick={resetCount}>
        Reset
      </button>
      <button type="button" className="bg-red-600 p-5" onClick={decreMent}>
        Decrease
      </button>
      <hr className="my-10" />
    </div>
  );
};

export default UseStateHook;
