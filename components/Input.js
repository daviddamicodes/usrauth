import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className="outline-none border-gray-300 border rounded p-2 mt-3 w-full focus:shadow-inputfocus focus:border-white"
    />
  );
};

export default Input;
