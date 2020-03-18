import React from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Post from "./components/post";
import Tag from "./components/Tag";
import CreateArticle from "./components/CreateArticle";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact component={Main}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/article/:slug" component={Post} />
      <Route path="/tag/:name" component={Tag}/>
      <Route path="/newarticle" component={CreateArticle}/>
    </div>
  );
}

export default App;
