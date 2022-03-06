import s from './Post.module.css'

function MyPosts(props) {
    return (
        <div className={s.post}>
            <div className={s.postContainer}>
                <div className={s.userAvatar}>
                    <img
                        src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png'
                        alt=""/>
                </div>
                <div className={s.postText}>{props.message}</div>
            </div>
            <div className={s.likeContainer}>
                <button className={s.likeBtn}>Like</button>
                <div className={s.likesCount}>{props.likes}</div>
            </div>
        </div>
    )
}

export default MyPosts;