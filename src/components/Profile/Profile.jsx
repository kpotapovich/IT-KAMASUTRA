import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
    <div>
        <div>
            <img src='https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg'/>
        </div>
        <div>
            ava + discripsion
        </div>
        <MyPosts/>
    </div>
    )
};

export default Profile;
