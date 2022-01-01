import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import "../configureAmplify";

const Protected = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      console.log(user);
    } catch (err) {
      console.log(err);
      setUser(null);
      router.push("/profile");
    }
  }
  if (!user) return null;
  return (
    <div>
      <p>Protected Route</p>
    </div>
  );
};

export default Protected;
