import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, message:'Hi, how are you?',likes:0},
    {id:2, message:'It\'s my first post',likes: 25},
];

let dialogs = [
    {id:1, name:'Kris'},
    {id:2, name:'Andrey'},
    {id:3, name:'Sveta'},
    {id:4, name:'Dimyc'},
    {id:5, name:'Sasha'},
    {id:6, name:'Valera'},
];

let messages = [
    {id:1, message:'Hi'},
    {id:2, message:'nature'},
    {id:3, message:'hello'},
    {id:4, message:'cute'},
    {id:5, message:'friend'},
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
