import { useQuery } from "@tanstack/react-query";
import React from "react";

const UseRtkQuery = () => {
  const { data } = useQuery(["joke"], async () => {
    await (
      await fetch("https://official-joke-api.appspot.com/random_joke")
    ).json();
  });
  console.log(data);

  return <div></div>;
};

export default UseRtkQuery;
