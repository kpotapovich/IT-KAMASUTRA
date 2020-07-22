import React from "react";
import {addPostActionCreator} from "../../../../redax/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return{
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
            addPost: (newPostForm) => {
              dispatch(addPostActionCreator(newPostForm));
            }

        }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
