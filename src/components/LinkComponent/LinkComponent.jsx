import React from "react";
import "./LinkComponent.css";

function LinkComponent({ href, target = "_blank", children }) {
  return (
    <a className="linkcomponent__wrapper" href={href} target={target}>
      {children}
    </a>
  );
}

export default LinkComponent;
