import React from "react";
import Input from "./Input";

const ConfirmSignUp = ({ onChange, setUiState, confirmSignUp }) => {
  return (
    <div>
      <p className="text-3xl font-black">Confirm your account</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input name="authCode" onChange={onChange} />
      </div>
      <button
        onClick={confirmSignUp}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Confirm Sign Up
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

export default ConfirmSignUp;
