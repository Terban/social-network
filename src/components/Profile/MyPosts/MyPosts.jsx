import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    const postData = [
        {id: 1, message: 'Hello world!', likes: 10},
        {id: 2, message: 'How are you?', likes: 20},
        {id: 3, message: 'This is my first post', likes: 30}
    ]
    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>My posts</div>
            <div className={s.newPost}>
                <textarea className={s.newPostText} name="newPost" id="" placeholder='your news...'></textarea>
                <button className={s.send}>Send</button>
            </div>
            <div className={s.postsItems}>
                <Post message={postData[0].message} likes={postData[0].likes}/>
                <Post message={postData[1].message} likes={postData[1].likes}/>
                <Post message={postData[2].message} likes={postData[2].likes}/>
            </div>
        </div>
    )
}

export default MyPosts;