import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>My posts</div>
            <div className={s.newPost}>
                <textarea className={s.newPostText} name="newPost" id="" placeholder='your news...'></textarea>
                <button className={s.send}>Send</button>
            </div>
            <div className={s.postsItems}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;