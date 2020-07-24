import {profileAPI, UsersAPI as usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 0},
        {id: 2, message: 'It\'s my first post', likes: 25},
        {id: 3, message: 'i girl ', likes: 25},
        {id: 4, message: 'It\'s my first post', likes: 25},
    ],
    profile: null,
    status: "",
    newPostText: ""
};

const profileReducer = (state = initialState  , action) => {
       switch (action.type) {
           case ADD_POST:
               let newPost = {
                   id:state.posts.length + 1 ,
                   message: action.newPostForm,
                   likes: 0,
               };

              return {
                   ...state,
                   posts: [ newPost, ...state.posts],
                   newPostText: ""
               };

           case SET_STATUS: {

               return {
                   ...state,
                   status: action.status,
               };
           }

           case SET_USER_PROFILE:{
                   return {...state, profile: action.profile}
               }
           case  DELETE_POST:
               return {...state, posts: state.posts.filter(p => p.id != action.postId)}


           default:
               return state;

       }

}

export const addPostActionCreator = (newPostForm) => ({ type: ADD_POST, newPostForm })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })




export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
           dispatch(setUserProfile(response.data))
        });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {dispatch(setStatus(response.data))
        });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}
export default profileReducer;