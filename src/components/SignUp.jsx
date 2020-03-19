import React from "react";
import "./stylesheets/signin.css";
import { Link } from "react-router-dom";

function SignUp() {
  let username = React.useRef(null);
  let email = React.useRef(null);
  let password = React.useRef(null);

  function handelSignup(e) {
      e.preventDefault()
    fetch(`https://conduit.productionready.io/api/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value
        }
      })
    })
      .then(res => res.json())
      .then(userdata => console.log(userdata));
  }
  return (
    <div className="container3">
      <div className="form-container">
        <h2>Sign Up</h2>
        <a href="#">Need an account?</a>
        <form>
          <div className="input-div">
            <input type="text" placeholder="Username" ref={username}></input>
          </div>
          <div className="input-div">
            <input type="text" placeholder="Email" ref={email}></input>
          </div>
          <div className="input-div">
            <input
              type="password"
              placeholder="Password"
              ref={password}
            ></input>
          </div>
          <input
            type="submit"
            onClick={handelSignup}
            className="btn"
            value="Signup"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
