import React from "react";
import {addNewPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addNewPostAC())
    }
    const updateNewPost = (newPostText) => {
        props.store.dispatch(updateNewPostAC(newPostText))
    }
    return (
        <MyPosts posts={state.profilePage.posts} addPost={addPost} updateNewPost={updateNewPost}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;