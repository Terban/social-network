import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Dialogs = (props) => {
    const dialogsItems = props.messagesPage.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id}
                                                                          avatar={dialog.avatar}
                                                                          name={dialog.name}/>)
    const messagesItems = props.messagesPage.messages.map(message => <Message key={message.id} avatar={message.avatar}
                                                                              name={message.name}
                                                                              message={message.message}/>)
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    {dialogsItems}
                </div>
                <div className={s.messages}>
                    {messagesItems}

                    <Formik
                        initialValues={{newMessageText: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.newMessageText) {
                                errors.newMessageText = 'Required';
                            }
                            if (values.newMessageText.length > 10) {
                                errors.newMessageText = 'Max symbols = 10';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                props.addNewMessage(values.newMessageText)
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form className={s.newMessage}>
                                <Field name="newMessageText" component="textarea" className={s.newMessageText}
                                       placeholder='your message...'/>
                                <ErrorMessage className={s.error} name="newMessageText" component="div"/>
                                <button type="submit" disabled={isSubmitting} className={s.send}>Send</button>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;