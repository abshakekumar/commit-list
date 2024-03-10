import React from "react";

const ErrorComponent = ({ children }) => {
  return (
    <div className="error__wrapper">
      {children ? children : <span>error....</span>}
    </div>
  );
};

export default ErrorComponent;
