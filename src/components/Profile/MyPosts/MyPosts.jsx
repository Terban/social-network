import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    const postsData = [
        {id: 1, message: 'Hello world!', likes: 10},
        {id: 2, message: 'How are you?', likes: 20},
        {id: 3, message: 'This is my first post', likes: 30}
    ]
    const postItems = postsData.map(post => <Post message={post.message} likes={post.likes}/>)
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