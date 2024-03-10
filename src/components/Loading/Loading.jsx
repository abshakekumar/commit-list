import React from "react";

const Loading = ({ children }) => {
  return (
    <div className="loading__wrapper">
      {children ? children : <span>Loading....</span>}
    </div>
  );
};

export default Loading;
