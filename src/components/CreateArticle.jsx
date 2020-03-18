import React from "react";
import "./stylesheets/createArticle.css";

class CreateArticle extends React.Component{
    render(){
        return(
            <div className="new-article-parent-container">
                <div className="article-form">
                    <form>
                        <div className="input-div">
                            <input type="text" placeholder="Article Title" />
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="What's this article about ?" />
                        </div>
                        <div className="input-div">
                            <textarea type="text">Write Your article</textarea>
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Tags" />
                        </div>
                        <div className="input-div">
                            <input type="submit" value="Publish Article" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateArticle;