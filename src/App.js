import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Message from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redax/store";
import MyPostsContainer from "./components/Profile/MyPosts/Post/MyPostsContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
debugger;
  return (
      <div className ='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className ='app-wrapper-content'>

              <Route path="/dialogs"
                     render = { () => <DialogsContainer store={props.store}/> } />
              <Route path="/profile"
                     render = { () => <Profile store={props.store}/> } />
          </div>
      </div>
  );
};



export default App;
