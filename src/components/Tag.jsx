import React from "react";
import "./stylesheets/signin.css";
import {Link} from "react-router-dom";


class Tag extends React.Component{
    state = {
        tags : null
    }

    componentDidMount(){
        let {slug} = this.props.match.params.name || "";
        fetch(`https://conduit.productionready.io/api/articles?tag=${slug}&limit=10&offset=0`).then(res=>res.json()).then(({articles})=>{
            this.setState({
                tags : articles
            })
        });
    }
    render(){
        console.log(this.state.tags);
        return this.state.tags ? (
            <div className="container3">
                {this.state.tags && this.state.tags.map(tag=>{
                    return(
                       <div className="tag-container">
                            <div className=""> <h1>{tag.title}</h1>
                            <p>{tag.body}</p> </div>
                       </div>
                    )
                })}
                
            </div>
        ) : <h1>Loading...</h1>
    }
}

export default Tag;