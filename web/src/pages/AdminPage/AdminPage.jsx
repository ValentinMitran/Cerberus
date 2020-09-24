import React from "react";
import "./AdminPage.scss";
import { MdHome, MdSettings, MdEmail, MdPeople } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import cerberus from "./cerberus.png";

const AdminPage = () => {
  return (
    <>
      <div className="admin-page">
        <div className="sidebar">
          <img src={cerberus} alt="Cerberus" />
          <nav>
            <MdHome />
            <MdPeople />
            <MdEmail />
            <GoGraph />
            <MdSettings />
          </nav>
        </div>
        <div className="main">sggnk</div>
      </div>
    </>
  );
};
export default AdminPage;
