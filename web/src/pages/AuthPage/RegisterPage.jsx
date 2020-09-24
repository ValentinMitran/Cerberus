import React from "react";
import "./AuthPage.scss";
import cerberus from "./Cerberus.webp";

const RegisterPage = () => {
  return (
    <>
      <div className="auth-wraper">
        <img src={cerberus} alt="Cerberus Logo" />

        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
