import s from "./Login.module.css"
import {Formik, Form, Field} from 'formik';


function Login() {
    return (
        <div className={s.wrapper}>
            <Formik
                initialValues={{login: '', password: '', rememberMe: false}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false);
                    }, 1000);
                }}
            >
                {({isSubmitting}) => (
                    <Form className={s.form}>
                        <div className={s.row}>
                            <Field type="text" name="login" className={s.login} id="login"/>
                            <label className={s.label} htmlFor="login">Login</label>
                        </div>
                        <div className={s.row}>
                            <Field type="password" name="password" className={s.password} id="password"/>
                            <label className={s.label} htmlFor="password">Password</label>
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
}

export default Login