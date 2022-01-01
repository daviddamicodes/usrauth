import React from "react";
import Input from "./Input";

const ForgotPassword = ({ onChange, setUiState, forgotPassword }) => {
  return (
    <div>
      <p className="text-3xl font-black">Forgot Password</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input name="email" type="email" onChange={onChange} />
      </div>
      <button
        onClick={forgotPassword}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Reset Password
      </button>
      <button
        onClick={() => setUiState("signIn")}
        className="text-sm mt-6 text-pink-600"
      >
        Cancel
      </button>
    </div>
  );
};

export default ForgotPassword;
