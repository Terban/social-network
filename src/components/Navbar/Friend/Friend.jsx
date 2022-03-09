import s from './Friend.module.css'

function Friend(props) {
    return (
        <div className={s.friendsItem}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friend;