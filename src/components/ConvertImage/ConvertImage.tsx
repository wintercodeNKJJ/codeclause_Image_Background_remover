import React, { useState } from "react";
import "./convertImage.scss";
import { BsSave, BsFire } from "react-icons/bs";
import { useConvertLogic } from "./logic";
import defaultimage from "./out/default.png";

const ConvertImage = () => {
  const [selectedImage, setSelectedImage] = useState<Blob | null>(null);
  const defaults = new Blob();
  const [result, setResult] = useState(defaultimage);

  const { removebg } = useConvertLogic();

  const callRemover = () => {
    removebg(selectedImage ? selectedImage : defaults, setResult);
  };

  return (
    <section className="covertworkbench">
      <div className="imageview">
        <img
          alt="not found"
          width={"250px"}
          src={
            selectedImage ? URL.createObjectURL(selectedImage) : defaultimage
          }
        />
      </div>
      <div className="imageview">
        <img src={result} alt="not found" width={"250px"} />
      </div>
      <div className="operations">
        <input
          className="upload"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files ? event.target.files[0] : null);
            event.target.files
              ? event.target.files[0] !== undefined
                ? setSelectedImage(event.target.files[0])
                : setSelectedImage(selectedImage)
              : setSelectedImage(selectedImage);
          }}
        />
        <button type="button" onClick={() => callRemover()}>
          Convert <BsFire size={20} />
        </button>
        {/* <button type="button">
          Save <BsSave size={20} />
        </button> */}
      </div>
    </section>
  );
};

export default ConvertImage;
