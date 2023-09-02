import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import {
  BsDoorOpen,
  BsPersonAdd,
  BsLayers,
  BsPeople,
  BsAward,
} from "react-icons/bs";

const NavBar = () => {
  return (
    <nav>
      <div className="title">
        <img src={require("../../assets/img/logo.png")} alt="logo" />
        <h1>Remove the BackGround</h1>
      </div>

      <ul className="connect">
        <li>
          <NavLink to="login">
            Login <BsDoorOpen />
          </NavLink>
        </li>
        <li>
          <NavLink to="register">
            Register <BsPersonAdd />
          </NavLink>
        </li>
      </ul>

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
          <NavLink to="accounts">
            <BsPeople /> Accounts
          </NavLink>
        </li>
        <li>
          <NavLink to="credit">
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
