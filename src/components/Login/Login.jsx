import s from "./Login.module.css"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import React from "react";


const Login = () => (
    <div className={s.wrapper}>
        <Formik
            initialValues={{login: '', password: '', rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.login) {
                    errors.login = 'Required';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    console.log(values)
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.form}>
                    <div className={s.row}>
                        <Field type="text" name="login" className={s.login} id="login"/>
                        <label className={s.label} htmlFor="login">Login</label>
                        <ErrorMessage className={s.error} name="login" component="div"/>
                    </div>
                    <div className={s.row}>
                        <Field type="password" name="password" className={s.password} id="password"/>
                        <label className={s.label} htmlFor="password">Password</label>
                        <ErrorMessage className={s.error} name="password" component="div"/>
                    </div>
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


export default Login