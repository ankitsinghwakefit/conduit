import React from "react";
import "./stylesheets/post.css";
import {Link} from "react-router-dom";

class Post extends React.Component{
    state = {
        articleinfo : null
    }

    componentDidMount(){
        let {slug} = this.props.match.params || "";
        fetch(`https://conduit.productionready.io/api/articles/${slug}`).then(res=>res.json()).then(({article})=>{
            this.setState({
                articleinfo : article
            })
        });
    }
    render(){
        return this.state.articleinfo ? (
            <div>
                
    <h3>{this.state.articleinfo && <div className="single_article1">
                                <div className="article_author1">
                                    <div className="thumbnail">
                                        <img
                                            width="40"
                                            height="40"
                                            src={this.state.articleinfo.author.image}
                                            alt={this.state.articleinfo.author.username}
                                        />
                                    </div>
                                    <h4>{this.state.articleinfo.author.username}</h4>
                                </div>
                               <h3>{this.state.articleinfo.title}</h3>
                                <p>{this.state.articleinfo.body}</p>
                                
                            </div>}</h3>
            </div>
        ) : <h1>Loading...</h1>
    }
}

export default Post;