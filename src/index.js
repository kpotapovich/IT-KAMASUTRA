import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redax/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


 let rerenderEntireTree = (state) => {
     debugger
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );

};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

