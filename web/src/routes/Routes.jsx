import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import ClientPage from "../pages/ClientPage/ClientPage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/client">
            <ClientPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
