import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="ml-8 mt-4">
    <h1 className="text-5xl text-bold ">Opps...</h1>
    <h2 className="text-4xl text-bold mt-1">Something Went Wrong...</h2>
    <h3 className="text-3xl text-bold mt-3">{err.error.message} : {err.status}</h3>
    </div>
  );
};

export default Error;
