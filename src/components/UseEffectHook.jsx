import React, { useState } from "react";
import DogImageBox from "../extras/DogImageBox";

const UseEffectHook = () => {
  const [imageGen, setImageGen] = useState(false);

  const loadImageGenerator = () => {
    setImageGen(!imageGen);
  };

  return (
    <div className="text-center">
      <h1 className="font-gilroy text-center text-4xl border border-blue-500 inline-block p-5 my-3">
        USEFFECT HOOK
      </h1>
      {imageGen && <DogImageBox />}
      <button
        type="button"
        className="bg-blue-500 font-mont p-5"
        onClick={loadImageGenerator}
      >
        {imageGen
          ? "CLOSE RANDOM DOGS IMAGE GENERTION"
          : "OPEN RANDOM DOGS IMAGE GENERTOR"}
      </button>
      <hr className="my-10" />
    </div>
  );
};

export default UseEffectHook;
