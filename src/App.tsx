import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import { MainContext } from "./MainContext/MainContext";

function App() {
  return (
    <>
      <MainContext>
        <Router>
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </Router>
      </MainContext>
    </>
  );
}

export default App;
