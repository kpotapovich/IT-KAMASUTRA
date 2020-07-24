import profileReducer, {addPostActionCreator} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let state =  {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 0},
        {id: 2, message: 'It\'s my first post', likes: 25},
        {id: 3, message: 'i girl ', likes: 25},
        {id: 4, message: 'It\'s my first post', likes: 25},
    ],
};


it('message of new should be correct', () => {
    //1. готовим исходные данные test data
    let action = addPostActionCreator("Hello friends")

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation проверка и добовление текста
   expect(newState.posts.length).toBe(5) ;
});

it('length of posts should be incremented', () => {
    //1. готовим исходные данные test data
    let action = addPostActionCreator("Hello friends")

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation проверка и добовление текста
    expect(newState.posts.length).toBe(5) ;
});

it('after deleting length of messages should be decrement', () => {
    //1. готовим исходные данные test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation проверка и добовление текста
    expect(newState.posts.length).toBe(3) ;
});

it('after deleting length  shouldn`t be decrement if id is incorrect', () => {
    //1. готовим исходные данные test data
    let action = deletePost(1000)

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation проверка и добовление текста
    expect(newState.posts.length).toBe(3) ;
});



