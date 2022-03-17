import s from './Users.module.css'
import unknown from '../../assets/images/unknown.webp'
import React from "react";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";
import {toggleFollowingInProgress} from "../../redux/users-reducer";

function Users(props) {
    const pages = []
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div className={s.wrapper}>
        <h1>Users</h1>
        {props.users.map(u => {
            return (
                <div className={s.userBlock} key={u.id}>
                    <div className={s.user}>
                        <NavLink to={'/profile/' + u.id} className={s.avatar}><img src={u.photos.small
                            ? u.photos.small : unknown} alt=""/></NavLink>
                        {u.followed

                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingInProgress(u.id, true)
                                followAPI.getUnfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) props.unfollow(u.id)
                                        props.toggleFollowingInProgress(u.id, false)
                                    })
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingInProgress(u.id, true)
                                followAPI.getFollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) props.follow(u.id)
                                        props.toggleFollowingInProgress(u.id, false)
                                    })
                            }}>Follow</button>}

                    </div>
                    <div className={s.userInfo}>
                        <div className={s.userInfoColumn}>
                            <div className={s.name}>{u.name}</div>
                            <div className={s.status}>{u.status ? u.status : 'No status'}</div>
                        </div>
                        <div className={s.userInfoColumn}>
                            <div
                                className={s.uniqueUrlName}>{u.uniqueUrlName ? u.uniqueUrlName : 'No uniqueUrlName'}</div>
                            <div className={s.userId}>ID: {u.id}</div>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className={s.paging}>
            {pages.map(p => {
                return <div onClick={() => {
                    props.onPageChanged(p)
                }} key={p} className={props.currentPage === p ? `${s.page} ${s.currentPage}` :
                    s.page}>{p}</div>
            })}
        </div>
    </div>)
}

export default Users