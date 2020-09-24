import React from "react";
import "./AdminPage.scss";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
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
            <Link to={`${url}`}>
              <MdHome />
            </Link>
            <Link to={`${url}/users`}>
              <MdPeople />
            </Link>
            <Link to={`${url}/support`}>
              {" "}
              <MdEmail />
            </Link>
            <Link to={`${url}/statistics`}>
              {" "}
              <GoGraph />
            </Link>
            <Link to={`${url}/settings`}>
              {" "}
              <MdSettings />
            </Link>
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
