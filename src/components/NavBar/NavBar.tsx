import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { BsLayers, BsAward } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav>
      <div className="title">
        <img src={require("../../assets/img/logo.png")} alt="logo" />
        <h1>Remove the BackGround</h1>
      </div>

      <ul className="links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <BsLayers /> Convert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="credit"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <BsAward /> Credit
          </NavLink>
        </li>
      </ul>

      <footer>
        <p>By Nguezet Kenfack Jordan Junior 2023</p>
      </footer>
    </nav>
  );
};

export default NavBar;
