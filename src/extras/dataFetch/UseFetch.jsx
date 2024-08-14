import React, { useEffect, useState } from "react";
import { LiaLaughSolid } from "react-icons/lia";
import { FaRegFaceLaughBeam } from "react-icons/fa6";

const UseFetch = () => {
  const [joke, setJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const loadJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        setShowPunchline(false);
        // Show the punchline after 5 seconds
        setTimeout(() => {
          setShowPunchline(true);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
      });
  };

  useEffect(() => {}, []);

  return (
    <>
      <p className="font-mont font-bold text-blue-700 my-2">RANDOM JOKE</p>
      <div className="jokes border p-4">
        <p className="font-mont text-red-500">
          <LiaLaughSolid className="inline me-1 text-2xl" />
          {joke.setup}
        </p>
        {showPunchline && (
          <p className="font-mont text-green-500">
            {joke.punchline}
            <FaRegFaceLaughBeam className="inline ms-1 text-2xl" />
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={loadJoke}
        className="font-mont font-semibold mt-3 p-2 bg-amber-400 text-black"
      >
        GENERATE
      </button>
    </>
  );
};

export default UseFetch;
