import React from "react";
import { Auth } from "aws-amplify";
import Input from "./Input";

const Signup = ({ onChange, setUiState, signUp }) => {
  return (
    <div>
      <p className="text-3xl font-black">Sign Up for an account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input name="email" onChange={onChange} />
      </div>
      <div className="mt-4">
        <label className="text-sm">Password</label>
        <Input name="password" onChange={onChange} type="password" />
      </div>
      <button
        onClick={signUp}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Sign Up
      </button>
      <p className="mt-12 text-sm font-light">
        Have have an account?
        <span
          onClick={() => setUiState("signIn")}
          role="button"
          className="cursor-pointer text-pink-600"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Signup;
