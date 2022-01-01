import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import "../configureAmplify";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import ForgotPasswordSubmit from "../components/ForgotPasswordSubmit";
import ForgotPassword from "../components/ForgotPassword";
import ConfirmSignUp from "../components/ConfirmSignup";

const initialState = { email: "", password: "", authCode: "" };

const Profile = () => {
  const [uiState, setUiState] = useState("signIn");
  const [formState, setFormState] = useState(initialState);
  const [user, setUser] = useState(null);
  const { email, password, authCode } = formState;

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      setUiState("signedIn");
      console.log(uiState);
    } catch (err) {
      setUser(null);
      setUiState("signIn");
    }
  }

  const onChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  async function signUp() {
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: { email },
      });
      setUiState("confirmSignUp");
    } catch (err) {
      console.log({ err });
    }
  }

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, authCode);
      setUiState("signedIn");
      signIn();
    } catch (err) {
      console.log({ err });
    }
  }

  async function signIn() {
    try {
      await Auth.signIn(email, password);
      setUiState("signedIn");
      checkUser();
    } catch (err) {
      console.log({ err });
    }
  }

  async function forgotPassword() {
    try {
      await Auth.forgotPassword(email);
      setUiState("forgotPasswordSubmit");
    } catch (err) {
      console.log({ err });
    }
  }

  async function forgotPasswordSubmit() {
    try {
      await Auth.forgotPasswordSubmit(email, authCode, password);
      setUiState("signIn");
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            {uiState === "signUp" && (
              <Signup
                onChange={onChange}
                setUiState={setUiState}
                signUp={signUp}
              />
            )}
            {uiState === "confirmSignUp" && (
              <ConfirmSignUp
                onChange={onChange}
                setUiState={setUiState}
                confirmSignUp={confirmSignUp}
              />
            )}
            {uiState === "signIn" && (
              <Signin
                onChange={onChange}
                setUiState={setUiState}
                signIn={signIn}
              />
            )}
            {uiState === "signedIn" && user && (
              <div>
                <p className="text-xl">Welcome, {user.attributes.email}</p>
                <button
                  className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
                  onClick={() => {
                    Auth.signOut();
                    setUiState("signIn");
                    setUser(null);
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
            {uiState === "forgotPassword" && (
              <ForgotPassword
                onChange={onChange}
                setUiState={setUiState}
                forgotPassword={forgotPassword}
              />
            )}
            {uiState === "forgotPasswordSubmit" && (
              <ForgotPasswordSubmit
                onChange={onChange}
                forgotPasswordSubmit={forgotPasswordSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
