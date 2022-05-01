import s from "./Pagination.module.css";
import React from "react";

const Pagination = ({totalUserCount, pageSize, onPageChanged, currentPage}) => {
    const pages = []
    const pagesCount = Math.ceil(totalUserCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.paging}>
            {pages.map(p => {
                return <div onClick={() => {
                    onPageChanged(p)
                }} key={p} className={currentPage === p ? `${s.page} ${s.currentPage}` :
                    s.page}>{p}</div>
            })}
        </div>
    )
}

export default Pagination