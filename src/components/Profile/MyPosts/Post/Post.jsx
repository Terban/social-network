import s from './Post.module.css'

function MyPosts(props) {
    return (
        <div className={s.post}>
            <div className={s.postContainer}>
                <div className={s.userAvatar}>
                    <img
                        src={props.avatar}
                        alt=""/>
                </div>
                <div className={s.postText}>{props.message}</div>
            </div>
            <div className={s.userName}>{props.name}</div>
            <div className={s.likeContainer}>
                <button className={s.likeBtn}>Like</button>
                <div className={s.likesCount}>{props.likes}</div>
            </div>
        </div>
    )
}

export default MyPosts;