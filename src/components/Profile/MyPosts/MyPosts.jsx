import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
    const postItems = props.posts.map(post => <Post key={post.id} avatar={post.avatar} name={post.name}
                                                    message={post.message}
                                                    likes={post.likes}/>)
    let newPostRef = React.createRef()
    const addPost = () => {
        props.addNewPost()
    }
    const onPostChange = () => {
        const text = newPostRef.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>My posts</div>
            <div className={s.newPost}>
                <textarea onChange={onPostChange} ref={newPostRef} className={s.newPostText} name="newPost" id=""
                          placeholder='your news...' value={props.newPostText}/>
                <button onClick={addPost} className={s.send}>Send</button>
            </div>
            <div className={s.postsItems}>
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts;