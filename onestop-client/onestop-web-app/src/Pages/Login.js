import React, { useState } from "react";
import Card from "../Components/Card";
import SignUpForm from "../Components/SignUpForm";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  const [signUp, setSignup] = useState(false);

  return (
    <>
      <Card>
        {signUp ? (
          <>
            <SignUpForm />
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )}
        <button id="signup" onClick={() => setSignup(!signUp)}>
          {signUp ? "Have an account? Login" : "Don't have an account? Sign Up"}
        </button>
      </Card>
    </>
  );
};

export default Login;
