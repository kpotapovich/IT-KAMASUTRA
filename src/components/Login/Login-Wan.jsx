// import React from "react";
// import styles from "../Users/users.module.css";
// import {Field, reduxForm} from "redux-form";
// import {createField, Input} from "../Common/FormsControls/formsControls";
// import {required} from "../../utils/validation/validators";
// import {connect} from "react-redux";
// import {login} from "../../redax/auth-reducer";
// import {Redirect} from "react-router-dom";
// import style from "./../Common/FormsControls/FormsControl.module.css"
//
//
// const LoginForm = ({handleSubmit,error}) => {
//     return (
//         <form onSubmit={handleSubmit} className={styles.login}>
//             {createField("Email","email",[required],Input)}
//             {createField("Password","password", [required],{type: "password"},Input)}
//             {createField(null,"rememberMe",Input,{type: "checkbox"},"Remember me")}
//
//             {error && <div className={style.formSummaryError}>
//                 {error}
//             </div>
//             }
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
//
// const LoginReduxForm = reduxForm({form:'Login'}) (LoginForm);
//
//
// const Login = (props) => {
//     const onSubmit = (formData) => {
//         props.login(formData.email,formData.password,formData.rememberMe);
//     };
//     if (props.isAuth) {
//         return <Redirect to={"/profile"}/>
//     }
//
//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// };
// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth
// });
// export default connect(mapStateToProps, {login})(Login);
