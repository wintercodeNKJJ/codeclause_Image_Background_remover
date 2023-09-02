import React from "react";

const ConvertStack = () => {
  return (
    <div className="stack">
      <h1>Images to convert</h1>
      <ul>
        {[1, 2, 3, 4].map((i, k) => (
          <li key={k}>
            <div className="listItem">
              <img src="./" alt="an object" />
              <p>Football</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConvertStack;
