import React from "react";
import "./AdminPage.scss";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import { MdHome, MdSettings, MdEmail, MdPeople } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import cerberus from "./cerberus.png";
import DashBoard from "./routes/DashBoard/DashBoard";
import Settings from "./routes/Settings/Settings";
import Support from "./routes/Support/Support";
import Users from "./routes/Users/Users";
import Statistics from "./routes/Statistics/Statistics";

const AdminPage = () => {
  let { url } = useRouteMatch();

  return (
    <>
      <div className="admin-page">
        <div className="sidebar">
          <img src={cerberus} alt="Cerberus" />
          <nav>
            <NavLink exact to={`${url}`} activeClassName="active-link">
              <MdHome />
            </NavLink>
            <NavLink to={`${url}/users`} activeClassName="active-link">
              <MdPeople />
            </NavLink>
            <NavLink to={`${url}/support`} activeClassName="active-link">
              <MdEmail />
            </NavLink>
            <NavLink to={`${url}/statistics`} activeClassName="active-link">
              <GoGraph />
            </NavLink>
            <NavLink to={`${url}/settings`} activeClassName="active-link">
              <MdSettings />
            </NavLink>
          </nav>
        </div>
        <div className="main">
          <Switch>
            <Route path={`${url}/users`}>
              <Users />
            </Route>
            <Route path={`${url}/support`}>
              <Support />
            </Route>
            <Route path={`${url}/statistics`}>
              <Statistics />
            </Route>
            <Route path={`${url}/settings`}>
              <Settings />
            </Route>
            <Route path={`${url}/`}>
              <DashBoard />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
export default AdminPage;
