import React from "react";
import styles from "../Users/users.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/formsControls";
import {required} from "../../utils/validation/validators";

const LoginForm = (props) => {
    return (
       <form onSubmit={props.handleSubmit} className={styles.login}>
            <div>
                <Field placeholder={"Login"} name={"login"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required]}
                       name={"password"} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"}
                       type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
        )
}


const LoginReduxForm = reduxForm({form:'Login'}) (LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;