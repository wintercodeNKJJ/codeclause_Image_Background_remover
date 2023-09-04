import React from "react";
import "./Credit.scss";

const Credit = () => {
  return (
    <article className="credit">
      <div className="content">
        <img src={require("../../assets/img/logo.png")} alt="" />
        <h1 className="title">Code Clause Internship</h1>
        <p>
          Hi my name is{" "}
          <b>
            <i className="text-green-600">Nguezet Kenfack Jordan Junior</i>
          </b>
          , and this is my fist project as Intern at{" "}
          <a href="https://app.internship.codeclause.com/">
            <i className="text-blue-500">CodeClause</i>
          </a>
          . the aim of the project is to develop an application that is be able
          to{" "}
          <b>
            <i>remove the background</i>
          </b>{" "}
          of any given image with a main object in it like a car, a person or an
          animal, and a background. <br /> For this project i used{" "}
          <b>
            <i>Reactjs, sass</i>{" "}
          </b>
          and
          <b>
            {" "}
            <i>tailwindcss</i>
          </b>{" "}
          for the display and the logic is done using javascript in the
          front-end ,with the help of{" "}
          <a href="https://www.remove.bg/">
            <i className="text-blue-500">remove.bg</i>
          </a>{" "}
          API. Currently I without having to pay, I have the possibelity to
          convert 50 pictures.
        </p>
      </div>
    </article>
  );
};

export default Credit;
