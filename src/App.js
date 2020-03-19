import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Post from "./components/post";
import Tag from "./components/Tag";
import CreateArticle from "./components/CreateArticle";

function Auth(){
  return <Switch>
  <Route path="/" exact component={Main}/>
     <Route path="/newarticle" component={CreateArticle}/>
    <Route path="*" render={()=> <h1>404 Page not found</h1>} />
   </Switch>
}

function NoAuth(props){
  return <Switch>
     <Route path="/signup" component={SignUp}/>
     <Route path="/article/:slug" component={Post} />
     <Route path="/" exact component={Main}/>
     <Route path="/newarticle" component={CreateArticle}/>
     <Route path="/signin" render={props=> (<SignIn
        updateIsLoggedIn={props.updateIsLoggedIn} {...props}/>)}/>
     <Route path="*" render={()=> <h1>404 Page not found</h1>} />
   </Switch>
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        isLoggedIn : false
    }
  }

  updateIsLoggedIn = (value)=>{
    this.setState({
      isLoggedIn : value
    })
  }
  componentDidMount() {
    if(localStorage["conduit-token"]){
      fetch("https://conduit.productionready.io/api/user",{
        method : "GET",
        headers : {
          authorization : `Token ${localStorage["conduit-token"]}`
        }
      }).then(res=>{
        res.json()
      }).then(user => {
        this.setState({isLoggedIn : true});
      }).catch(err=>{
        this.setState({
          isLoggedIn : false
        })
      })
    }
  }

  render(){
    return ( 
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} />
       {
         this.state.isLoggedIn ? <Auth /> : <NoAuth updateIsLoggedIn={this.updateIsLoggedIn} />
       }
      </div>
    );
  }
}

export default App;
