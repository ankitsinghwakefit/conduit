import React from "react";
import "./stylesheets/signin.css";
import {Link} from "react-router-dom";


class SignIn extends React.Component{
    render(){
        return(
            <div className="container3">
                <div className="form-container">
                    <h2>Sign In</h2>
                    <a href="#">Need an account?</a>
                    <form>
                        <div className="input-div"><input type="text" placeholder="Email"></input></div>
                        <div className="input-div"><input type="password" placeholder="Password"></input></div>
                        <input type="submit" className="btn" value="Signin"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;