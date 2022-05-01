import s from './Users.module.css'
import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User/User";

function Users(props) {
    return (
        <div className={s.wrapper}>
            <h1>Users</h1>
            {props.users.map(u => {
                return (
                    <User key={u.id} user={u} followingInProgress={props.followingInProgress} follow={props.follow}
                          unfollow={props.unfollow}/>
                )
            })}
            <Pagination totalUserCount={props.totalUserCount} pageSize={props.pageSize}
                        onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        </div>)
}

export default Users