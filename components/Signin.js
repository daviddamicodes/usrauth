import React from "react";
import { Auth } from "aws-amplify";
import SocialSignin from "./SocialSignin";
import Input from "./Input";

const Signin = ({ onChange, setUiState, signIn }) => {
  return (
    <div>
      <p className="text-3xl font-black">Sign in to your account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input name="email" onChange={onChange} />
      </div>
      <div className="mt-4">
        <label className="text-sm">
          Password
          <span
            onClick={() => setUiState("forgotPassword")}
            className="ml-8 sm:ml-48 text-pink-600"
          >
            Forgot password?
          </span>
        </label>
        <Input name="password" onChange={onChange} type="password" />
      </div>
      <button
        onClick={signIn}
        className="text-white w-full mt-6 bg-pink-600 p-3 rounded"
      >
        Sign In
      </button>
      <SocialSignin />
      <p className="mt-12 text-sm font-light">
        Don&apos;t have an account?
        <span
          onClick={() => setUiState("signUp")}
          role="button"
          className="cursor-pointer text-pink-600"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Signin;
