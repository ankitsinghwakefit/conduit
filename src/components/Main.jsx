import React from "react";
import "./stylesheets/main.css";
import {Link} from "react-router-dom";
import Hero from "./Hero";


class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            tags : null,
            articles : null
        }
    }
    componentDidMount(){
        let tagsUrl = "https://conduit.productionready.io/api/tags";
		let articlesUrl =
            "https://conduit.productionready.io/api/articles?limit=10&offset=0";

        let tags = fetch(tagsUrl).then(res=>res.json());
        let articles = fetch(articlesUrl).then(res=>res.json());
        
        Promise.all([articles, tags]).then(res => {
			this.setState({ articles: res[0].articles, tags: res[1].tags });
			console.log(this.state.tags);
		});

    }
    render(){
        return(
            <div>
                <Hero />
<div className="main-container">
                <h1>Global</h1>
                <div className="main-flex-parent">
                    <div className="item-post">
                        {this.state.articles && this.state.articles.map((post)=>{return(
                            <div>
                                <div className="single_article">
                                <div className="article_author">
                                    <div className="thumbnail">
                                        <img
                                            width="40"
                                            height="40"
                                            src={post.author.image}
                                            alt={post.author.username}
                                        />
                                    </div>
                                    <h4>{post.author.username}</h4>
                                </div>
                               <Link to={`/article/${post.slug}`}> <h3>{post.title}</h3></Link>
                                <p>{post.body}</p>
                                
                            </div>
                            </div>
                        )})}
                    </div>
                    <div className="item-tag">
                    <h1>Tags</h1>
                    {this.state.tags && this.state.tags.map((tag)=>{
                    return(
                        <div className="tag-container-parent"> 
                            
                            <div className="tag-container-item">
                            <Link to={`/tag/${tag}`}>{tag}</Link>
                            </div>
                        </div>
                    )
                })}
                
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Main;