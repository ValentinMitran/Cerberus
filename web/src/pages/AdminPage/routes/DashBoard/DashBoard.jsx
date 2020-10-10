import React from "react";
import "./Dashboard.scss";
import { MdArrowDropDown, MdNotifications } from "react-icons/md";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard">
        <header>
          <h2>Statistics</h2>
          <input type="text" name="search" id="search" placeholder="Search" />
          <MdNotifications id="notifications" />
          <div className="account">
            <span>Valentin</span>
            <img
              src="https://avatars2.githubusercontent.com/u/40249132?s=460&u=67b6f37dabe04c908c42671e961f3e50076e2d63&v=4"
              alt="Profile Picture"
            />
            <MdArrowDropDown />
          </div>
        </header>

        <div className="item users-card">A</div>
        <div className="item orders-card">B</div>
        <div className="item products-card">C</div>
        <div className="item orders-graph">D</div>
        <div className="item top-graph">E</div>
        <div className="item xy-graph">F</div>
        <div className="item geo-graph">G</div>
      </div>
    </>
  );
};

export default DashBoard;
