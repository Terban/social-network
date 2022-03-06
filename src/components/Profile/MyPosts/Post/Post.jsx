import s from './Post.module.css'

function MyPosts() {
    return (
        <div className={s.post}>
            <div className={s.postContainer}>
                <div className={s.userAvatar}>
                    <img
                        src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png'
                        alt=""/>
                </div>
                <div className={s.postText}>Hello world!</div>
            </div>
            <div className={s.likeContainer}>
                <button className={s.likeBtn}>Like</button>
                <div className={s.likesCount}>10</div>
            </div>
        </div>
    )
}

export default MyPosts;