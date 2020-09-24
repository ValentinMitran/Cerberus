import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./../pages/LandingPage/LandingPage";

function PrivateRoute({ children, ...rest }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyLoggedIn();
  }, []);

  const verifyLoggedIn = async () => {
    let response = await fetch("/api/user/isLoggedIn", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
    }).catch((err) => {
      alert(err);
    });
    response = await response.text();

    if (response === "true") {
      setIsLoggedIn(true);
    } else {
      localStorage.clear();
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Route {...rest} render={() => (isLoggedIn ? children : <LandingPage />)} />
  );
}

export default PrivateRoute;
