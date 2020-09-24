import React from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  return (
    <>
      {localStorage.clear()}
      <Redirect to="/" />
    </>
  );
};
export default Logout;
