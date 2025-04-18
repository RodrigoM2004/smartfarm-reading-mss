import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ color: "white" }}
      className={`bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white font-semibold py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in-out cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
