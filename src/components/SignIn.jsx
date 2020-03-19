import React from "react";
import "./stylesheets/signin.css";
import {withRouter} from "react-router-dom";



function SignIn(props){
    let email = React.useRef(null);
    let password = React.useRef(null);
    
    function handleSignin(e){
        e.preventDefault();
        fetch(`https://conduit.productionready.io/api/users/login`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                user: {email: email.current.value, password: password.current.value}
            })
        }).then(res=>res.json()).then(userInfo=>{
            if(userInfo.errors){
                console.log("err");
            } else {
                
                props.history.push("/");
                props.updateIsLoggedIn(true);
                localStorage.setItem("conduit-token",userInfo.user.token);
            }
            
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
            <div className="container3">
                <div className="form-container">
                    <h2>Sign In</h2>
                    <a href="#">Need an account?</a>
                    <form>
                        <div className="input-div"><input type="text" placeholder="Email" ref={email}></input></div>
                        <div className="input-div"><input type="password" placeholder="Password" ref={password}></input></div>
                        <input type="submit" onClick={handleSignin} className="btn" value="Signin"></input>
                    </form>
                </div>
            </div>
        )
    
}

export default withRouter(SignIn);