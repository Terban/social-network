import s from './Users.module.css'
import unknown from '../../assets/images/unknown.webp'
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            ? <button onClick={() => {
                                axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "de177116-1807-4616-af10-698c2641761e"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) props.unfollow(u.id)
                                    })
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + u.id, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "de177116-1807-4616-af10-698c2641761e"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) props.follow(u.id)
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