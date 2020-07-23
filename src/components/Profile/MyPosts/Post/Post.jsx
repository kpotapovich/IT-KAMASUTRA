import React from "react";
import s from './Post.module.css';

const Post = (props) => {

    return (
            <div className={s.item}>
                <img src='https://webcdn.appcloudbox.net/zmoji/wp-content/uploads/2019/11/5-Incredible-Avatar-Maker-Free-Tools-You%E2%80%99ve-Missed-Before.jpg'/>
                {props.message}
                <div>
                    <span>Like</span> {props.likes}
                </div>
            </div>

    )
};

export default Post;
