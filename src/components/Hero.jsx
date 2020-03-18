import React from "react";
import "./stylesheets/hero.css";


class Hero extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="hero-container">
                <div className="hero-item">
                    <h1>InstaPost</h1>
                    <h3>A place to share your knowledge.</h3>
                </div>
            </div>
            </div>
        )
    }
}

export default Hero;