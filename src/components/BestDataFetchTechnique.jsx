import React from "react";
import UseFetch from "../extras/dataFetch/UseFetch";
import UseAxios from "../extras/dataFetch/UseAxios";
import UseRtkQuery from "../extras/dataFetch/UseRtkQuery";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BestDataFetchTechnique = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="text-center">
      <h1 className="font-gilroy text-center uppercase text-4xl border border-blue-500 inline-block p-5 my-3">
        Different Data Fetch Technique
      </h1>
      <div className="grid grid-cols-3 gap-2">
        <div className="h-[300px] bg-white">
          <p className="border-b-2 border-slate-500 text-2xl font-gilroy text-black">
            using js fetch
          </p>
          <UseFetch />
        </div>
        <div className="h-[300px] bg-white">
          <p className="border-b-2 border-slate-500 text-2xl font-gilroy text-black">
            using axios
          </p>
          <UseAxios />
        </div>
        <div className="h-[300px] bg-white">
          <p className="border-b-2 border-slate-500 text-2xl font-gilroy text-black">
            using rtk query
          </p>
          <UseRtkQuery />
        </div>
      </div>
    </div>
    <div className="text-center my-10">
      <button onClick={()=>{navigate("/reactquery")}} type="button" className="bg-violet-600 text-white p-5 font-gilroy"><FaArrowRight className="inline me-2"  />DEEP DIVE INTO REACT QUERY</button>
    </div>
    </>
  );
};

export default BestDataFetchTechnique;
