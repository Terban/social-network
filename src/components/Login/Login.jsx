import s from "./Login.module.css"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer.ts";
import {Redirect} from "react-router-dom";

const Login = ({isAuth, login, captchaUrl}) => {
    if (isAuth) return <Redirect to='/profile'/>
    return (
        <div className={s.wrapper}>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false, captcha: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting, setStatus}) => {
                    login(values.email, values.password, values.rememberMe, values.captcha, setStatus)
                    setSubmitting(false);
                }}
            >
                {({isSubmitting, status}) => (
                    <Form className={s.form}>
                        <div className={s.row}>
                            <Field type="email" name="email" className={s.login} id="email"/>
                            <label className={s.label} htmlFor="email">Email</label>
                            <ErrorMessage className={s.error} name="email" component="div"/>
                        </div>
                        <div className={s.row}>
                            <Field type="password" name="password" className={s.password} id="password"/>
                            <label className={s.label} htmlFor="password">Password</label>
                            <ErrorMessage className={s.error} name="password" component="div"/>
                        </div>
                        {captchaUrl && <img src={captchaUrl} alt="captchaUrl"/>}
                        {captchaUrl && <Field type="text" name="captcha" placeholder="captcha" className={s.captcha}/>}
                        {status ? <div className={s.statusError}>{status}</div> : null}
                        <div className={s.checkbox}>
                            <Field type="checkbox" name="rememberMe" placeholder="" className={s.rememberMe}
                                   id="rememberMe"/>
                            <label className={s.label} htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" disabled={isSubmitting} className={s.button}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login)