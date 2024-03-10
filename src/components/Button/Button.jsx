import React from "react";
import "./Button.css";

const Button = ({ handleBtnClick = () => {}, children }) => {
  return (
    <button className="button__wrapper" onClick={handleBtnClick}>
      {children}
    </button>
  );
};

export default Button;
