import React, { useEffect, useState } from "react";
import sampleImage from "../assets/react.svg";
import axios from "axios";

const DogImageBox = () => {
  const [dogImage, setDogImage] = useState(sampleImage);

  const loadDogsImage = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDogImage(response.data.message);
  };

  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component unmounted");
    };
  },[dogImage]);

  return (
    <div className="dog-image  text-center ">
      <img src={dogImage} alt="image" className="mx-auto object-contain h-[300px] w-[300px] p-5" />
      <button type="button" onClick={loadDogsImage} className="text-2xl font-mont p-5 mb-5 text-black bg-yellow-300">GENERATE IMAGE</button>
    </div>
  );
};

export default DogImageBox;
