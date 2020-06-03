import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Message from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redax/state";


const App = (props) => {

  return (
      <div className ='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className ='app-wrapper-content'>
             {/* <Route  path="/dialogs" component={Message}/>*/}
             {/*<Route path="/profile" component={Profile}/>*/}
             {/* <Route path="/news" component={News}/>*/}
              {/*<Route path="/music" component={Music}/>*/}
              {/*<Route path="/settings" component={Settings}/>*/}

              <Route path="/dialogs"
                     render = { () => <Message
                         state = {props.state.dialogsPage}/> } />
              <Route path="/profile"
                     render = { () => <Profile
                         state = {props.state.profilePage}
                         addPost={props.addPost} /> } />
          </div>
      </div>
  );
};



export default App;
