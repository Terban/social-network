import s from './User.module.css'
import unknown from '../../../assets/images/unknown.webp'
import React from "react";
import {NavLink} from "react-router-dom";

function User({user, followingInProgress, follow, unfollow}) {
    return (
        <div className={s.userBlock}>
            <div className={s.user}>
                <NavLink to={'/profile/' + user.id} className={s.avatar}><img src={user.photos.small
                    ? user.photos.small : unknown} alt=""/></NavLink>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
            </div>
            <div className={s.userInfo}>
                <div className={s.userInfoColumn}>
                    <div className={s.name}>{user.name}</div>
                    <div className={s.status}>{user.status ? user.status : 'No status'}</div>
                </div>
                <div className={s.userInfoColumn}>
                    <div
                        className={s.uniqueUrlName}>{user.uniqueUrlName ? user.uniqueUrlName : 'No uniqueUrlName'}</div>
                    <div className={s.userId}>ID: {user.id}</div>
                </div>
            </div>
        </div>
    )
}

export default User