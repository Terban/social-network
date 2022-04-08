import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, Form, Formik} from "formik";

function MyPosts(props) {
    const postItems = props.posts.map(post => <Post key={post.id} avatar={post.avatar} name={post.name}
                                                    message={post.message}
                                                    likes={post.likes}/>)
    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>My posts</div>

            <Formik
                initialValues={{newPostText: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        props.addNewPost(values.newPostText)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form className={s.newPost}>
                        <Field name="newPostText" component="textarea" className={s.newPostText}
                               placeholder='your message...'/>
                        <button type="submit" disabled={isSubmitting} className={s.send}>Send</button>
                    </Form>
                )}
            </Formik>


            <div className={s.postsItems}>
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts;