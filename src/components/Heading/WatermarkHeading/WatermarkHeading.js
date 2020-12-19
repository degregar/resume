import React from "react";

const WatermarkHeading = ({ className, children }) => {
  return (
    <div className={`heading heading--watermark ${className || ""}`}>
      {children}
    </div>
  );
};

export default WatermarkHeading;
