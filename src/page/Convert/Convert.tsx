import React from "react";
import "./Convert.scss";
import { ConvertImage, SidePanel } from "../../components";

const Convert = () => {
  return (
    <article className="convertion">
      <ConvertImage />
      <SidePanel />
    </article>
  );
};

export default Convert;
