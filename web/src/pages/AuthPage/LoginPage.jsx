import React, { useState, useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import "./AuthPage.scss";
import cerberus from "./Cerberus.webp";

const LoginPage = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.authToken ? setIsLoggedIn(true) : setIsLoading(false);
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    let response = await fetch("/api/user/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).catch((err) => {
      alert(err);
    });
    if (response.headers.get("authToken")) {
      localStorage.authToken = response.headers.get("authToken");
      setIsLoggedIn(true);
    } else {
      setLoginError("Username/Password combination doesn't exist.");
      setUsername("");
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <>
        Loading...
        {isLoggedIn ? <Redirect to="/client" /> : null}
      </>
    );
  }

  return (
    <>
      {isLoggedIn ? <Redirect to="/client" /> : null}
      <div className="auth-wraper">
        <img src={cerberus} alt="Cerberus Logo" />
        <form onSubmit={submitForm}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default withRouter(LoginPage);
