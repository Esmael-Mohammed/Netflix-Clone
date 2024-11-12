import React, { useState, useEffect } from "react";
import "./Login.css";
import logo from "../../assets/image/logo.png";
import { login, signup } from "../../Firebase";
import netflix_spinner from '../../assets/image/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loding,setLoading]=useState(false);

  useEffect(() => {
    const form = document.getElementById("login-form");
    const switchToSignUp = document.getElementById("switch-to-signup");
    const switchToSignIn = document.getElementById("switch-to-signin");

    const userAuth = async (event) => {
      event.preventDefault();
      setLoading(true)
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      setLoading(false);
    };

    form.addEventListener("submit", userAuth);

    if (switchToSignUp) {
      switchToSignUp.addEventListener("click", () => setSignState("Sign Up"));
    }

    if (switchToSignIn) {
      switchToSignIn.addEventListener("click", () => setSignState("Sign In"));
    }

    return () => {
      form.removeEventListener("submit", userAuth);
      if (switchToSignUp) {
        switchToSignUp.removeEventListener("click", () => setSignState("Sign Up"));
      }
      if (switchToSignIn) {
        switchToSignIn.removeEventListener("click", () => setSignState("Sign In"));
      }
    };
  }, [signState, email, password, name]);

  return (
    loding?<div className="login-spnner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form id="login-form">
          {signState === "Sign Up" && (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span id="switch-to-signup">Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span id="switch-to-signin">Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
