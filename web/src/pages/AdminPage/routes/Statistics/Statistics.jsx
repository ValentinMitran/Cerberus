import React from "react";
import "./Statistics.scss";
import { MdArrowDropDown, MdNotifications, MdMoreHoriz } from "react-icons/md";

const Statistics = () => {
  return (
    <>
      <div className="statistics">
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

        <div className="item users-card">
          <header>
            Users
            <MdMoreHoriz />
          </header>
          <span>271 people</span>
        </div>
        <div className="item orders-card">
          <header>
            Orders
            <MdMoreHoriz />
          </header>
          <span>473 orders</span>
        </div>
        <div className="item products-card">
          <header>
            Products
            <MdMoreHoriz />
          </header>
          <span>73 products available</span>
        </div>
        <div className="item orders-graph">D</div>
        <div className="item top-graph">E</div>
        <div className="item xy-graph">F</div>
        <div className="item geo-graph">G</div>
      </div>
    </>
  );
};

export default Statistics;
