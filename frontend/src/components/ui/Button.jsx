import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ backgroundColor: "#011638", color: "white" }}
      className={`fw-bold btn rounded-pill px-4 py-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
