import React from "react";
import "./stylesheets/header.css";
import {Link} from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <div className="container1">
                <div className="header-container">
                    <div className="header-flex-container">
                        <div className="header-logo">
                            <Link to="/"><h1>InstaPost</h1></Link>
                        </div>
                        <div className="header-nav-links">
                            <Link to="/" className="nav-link home" href="#">Home</Link>
                            <Link to="/signup" className="nav-link signup" href="#">Sign up</Link>
                            <Link to="/signin" className="nav-link signin" href="#">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;