import React from "react";

const Button = ({ children, onClick, type = "button", background = "bg-green-500", hover = "hover:bg-green-600", text = "text-white", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${background} ${hover} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${text} font-semibold py-3 px-8 rounded-md shadow-sm transition duration-300 ease-in-out cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
