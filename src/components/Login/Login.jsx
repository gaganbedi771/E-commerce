import React, { useState, useRef, useContext } from "react";
import Button from "react-bootstrap/Button";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailEntered = useRef();
  const passwordEntered = useRef();
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const pageChangeHandler = () => {
    setIsLogin((pre) => !pre);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailEntered.current.value;
    const password = passwordEntered.current.value;

    if (isLogin) {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const data = await response.json();
        if (data.error) {
          throw new Error("Authentication failed!, " + data.error.message);
        }

        authCtx.login(data.idToken,data.email);
        navigate("/",{replace:true});
      } catch (error) {
        alert(error.message)
      }
    } else {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const data = await response.json();
        if (data.error) {
          throw new Error("Authentication failed!, " + data.error.message);
        }

        alert("Sign Up successful!, Login now");
        setIsLogin((pre) => !pre);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    }

    emailEntered.current.value = "";
    passwordEntered.current.value = "";
  };

  return (
    <div className="container my-5">
      <form
        className="w-50 mx-auto border p-4 rounded"
        onSubmit={submitHandler}
      >
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Logout"}</h2>
        <input
          required
          type="email"
          placeholder="email"
          className="form-control"
          ref={emailEntered}
        ></input>
        <input
          required
          type="password"
          placeholder="password"
          className="form-control"
          ref={passwordEntered}
        ></input>
        <div className="text-center 4">
          <Button type="submit" variant="info">
            {isLogin ? "Login" : "Logout"}
          </Button>
        </div>
      </form>
      <p className="text-center cursor-pointer" onClick={pageChangeHandler}>
        {isLogin
          ? "Don't have account? Sign Up here"
          : "Already have an account? Sign In here."}
      </p>
    </div>
  );
};

export default Login;
