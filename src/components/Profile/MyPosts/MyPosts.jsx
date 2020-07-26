import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation/validators";
import {Textarea} from "../../Common/FormsControls/formsControls";

const maxLength10 = maxLengthCreator(10);

    let AddNewPostForm = (props) => {
            return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newPostText" component={Textarea}
                       placeholder={"Post message"}
                           validate={[required,  maxLength10]} />
                </div>
                <div className="nav">
                    <input type="submit" placeholder={"Add post"} />
                </div>
            </form>;
    }

    let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo(props => {
        let postsElements =
           props.posts.map
            (p => <Post key={p.id} message={p.message} likes={p.likes}/>
            );
        //добавить кей

        let newPostElement = React.createRef();

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        };


        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        )
})


export default MyPosts;
