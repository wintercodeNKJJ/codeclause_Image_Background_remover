import React from "react";
import { NavBar } from "../components";
import { Convert } from "./";
import { Routes, Route } from "react-router-dom";

import "./Layout.scss";

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Convert />} />
        <Route path="/Accouts" element={<Convert />} />
        <Route path="/credit" element={<Convert />} />
        <Route path="/login" element={<Convert />} />
      </Routes>
    </main>
  );
};

export default Layout;
