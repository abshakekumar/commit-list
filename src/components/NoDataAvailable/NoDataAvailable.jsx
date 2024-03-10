import React from "react";

const NoDataAvailable = ({ children }) => {
  return (
    <div className="error__wrapper">
      {children ? children : <span>nodata....</span>}
    </div>
  );
};

export default NoDataAvailable;
