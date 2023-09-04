import React from "react";
import { NavBar } from "../components";
import { Convert } from "./";
import { Routes, Route } from "react-router-dom";

import "./Layout.scss";
import Credit from "./Credit/Credit";

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Convert />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
    </main>
  );
};

export default Layout;
