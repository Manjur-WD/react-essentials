import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LiaLaughSolid } from "react-icons/lia";
import { FaRegFaceLaughBeam } from "react-icons/fa6";

const getJoke = async () => {
  const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
  return response.data;
};

const UseRtkQuery = () => {
  const [showPunchline, setShowPunchline] = useState(false);

  // Fetch the joke only when `refetch` is called
  const { data, refetch } = useQuery({
    queryKey: ["joke"],
    queryFn: getJoke,
    enabled: false, // Prevent automatic fetching
  });

  const loadJoke = async () => {
    setShowPunchline(false);
    try {
      await refetch(); // Trigger fetch manually
      setTimeout(() => {
        setShowPunchline(true);
      }, 3000);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <>
      <p className="font-mont font-bold text-blue-700 my-2">RANDOM JOKE</p>
      <div className="jokes border p-4">
        {data ? (
          <div>
            <p className="font-mont text-red-500">
              <LiaLaughSolid className="inline me-1 text-2xl" />
              {data.setup}
            </p>
            {showPunchline && (
              <p className="font-mont text-green-500">
                {data.punchline}
                <FaRegFaceLaughBeam className="inline ms-1 text-2xl" />
              </p>
            )}
          </div>
        ) : (
          <p>
            <LiaLaughSolid className="text-red-500 inline me-1 text-2xl" />
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

export default UseRtkQuery;
