import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts(props) {
    const postItems = props.posts.map(post => <Post avatar={post.avatar} name={post.name} message={post.message}
                                                    likes={post.likes}/>)
    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>My posts</div>
            <div className={s.newPost}>
                <textarea className={s.newPostText} name="newPost" id="" placeholder='your news...'></textarea>
                <button className={s.send}>Send</button>
            </div>
            <div className={s.postsItems}>
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts;