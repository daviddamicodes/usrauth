import React from "react";
import Input from "./Input";

const ForgotPasswordSubmit = ({ onChange, forgotPasswordSubmit }) => {
  return (
    <div>
      <p className="text-3xl font-black">Enter new pasword</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input name="authCode" onChange={onChange} />
      </div>
      <div className="mt-10">
        <label className="text-sm">New Password</label>
        <Input name="password" type="text" onChange={onChange} />
      </div>
      <button
        onClick={forgotPasswordSubmit}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Submit new password
      </button>
    </div>
  );
};

export default ForgotPasswordSubmit;
