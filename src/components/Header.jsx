import React from "react";
import "./stylesheets/header.css";
import {Link} from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
            <div className="container1">
                <div className="header-container">
                    <div className="header-flex-container">
                        <div className="header-logo">
                            <Link to="/"><h1>InstaPost</h1></Link>
                        </div>
                        <div className="header-nav-links">
                            {
                                this.props.isLoggedIn ? 
                                <><Link to="/" className="nav-link home" href="#">Home</Link>
                            <Link to="/newarticle" className="nav-link signup" href="#">New Article</Link>
                            <Link to="/signin" className="nav-link signin" href="#">Setting</Link> </>
                            : 
                            <> <Link to="/" className="nav-link home" href="#">Home</Link>
                            <Link to="/signup" className="nav-link signup" href="#">Sign up</Link>
                            <Link to="/signin" className="nav-link signin" href="#">Sign in</Link> </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;