import React, { useReducer } from "react";

const UseReducersHook = () => {

  const initialState = { count: 0 };

  const reducer = (state, action) => {
    console.log(action);
    
switch (action.type) {

    case "INCREASE":
        return(
            {count: state.count + 1}
        );
    case "DECREASE":
        return(
            {count : state.count - 1}
        )

    case "RESET":
        return(
            {count : 0}
        )


    default:
        break;
}
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  

  return (
    <>
      <div className="text-center font-mont">
        <h1 className="font-gilroy text-center text-4xl border border-blue-500 inline-block p-5 my-3">
          USEREDUCER HOOK
        </h1>
        <h2 className="font-gilroy text-center text-8xl">{state.count}</h2>
        <button type="button" className="bg-green-600 p-5 " onClick={()=>{dispatch({type: "INCREASE"})}}>
          Increase
        </button>
        <button type="button" className="bg-orange-400 p-5" onClick={()=>{dispatch({type: "RESET"})}}>
          Reset
        </button>
        <button type="button" className={state.count === 0 ? ("bg-red-600 p-5 cursor-not-allowed pointer-events-none opacity-50"):("bg-red-600 p-5")} onClick={()=>{dispatch({type: "DECREASE"})}}>
          Decrease
        </button>
        <hr className="my-10" />
      </div>
    </>
  );
};

export default UseReducersHook;
