import React from "react";

const Loader = () => {
  const loaderContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const loaderStyle = {
    border: "8px solid #f3f3f3" /* Light grey */,
    borderTop: "8px solid #3498db" /* Blue */,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={loaderContainerStyle}>
      Loading...
      <div style={loaderStyle}></div>
    </div>
  );
};

export default Loader;
