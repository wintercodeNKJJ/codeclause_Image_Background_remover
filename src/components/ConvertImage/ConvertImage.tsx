import React from "react";
import "./convertImage.scss";
import { BsUpload, BsSave, BsFire } from "react-icons/bs";

const ConvertImage = () => {
  return (
    <section className="covertworkbench">
      <div className="imageview">befor</div>
      <div className="imageview">after</div>
      <div className="operations">
        <button type="button">
          Upload <BsUpload size={18} />
        </button>
        <button type="button">
          Convert <BsFire size={20} />
        </button>
        <button type="button">
          Save <BsSave size={20} />
        </button>
      </div>
    </section>
  );
};

export default ConvertImage;
