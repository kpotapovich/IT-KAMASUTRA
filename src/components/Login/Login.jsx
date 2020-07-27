import React from "react";
import styles from "../Users/users.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/formsControls";
import {required} from "../../utils/validation/validators";
import {connect} from "react-redux";
import {login} from "../../redax/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/FormsControls/FormsControl.module.css"


const LoginForm = (props) => {
    return (
       <form onSubmit={props.handleSubmit} className={styles.login}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"}
                       type={"checkbox"}/> Remember me
            </div>
           { props.error && <div className={style.formSummaryError}>
               {props.error}
           </div>
           }
            <div>
                <button>Login</button>
            </div>
        </form>
        )
}


const LoginReduxForm = reduxForm({form:'Login'}) (LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe);
    };
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1 className={styles.logins}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);