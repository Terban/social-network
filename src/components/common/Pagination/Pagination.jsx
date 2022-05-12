import s from "./Pagination.module.css";
import React, {useState} from "react";

const Pagination = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize}) => {
    const pages = []
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    const onPrevBtnClick = () => {
        setPortionNumber(portionNumber - 1)
        onPageChanged(leftPortionPageNumber - 1)
    }
    const onNextBtnClick = () => {
        setPortionNumber(portionNumber + 1)
        onPageChanged(rightPortionPageNumber + 1)
    }

    return (
        <div className={s.paging}>
            {portionNumber > 1 &&
                <button className={s.prevButton} onClick={onPrevBtnClick}>PREV</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                return <div onClick={() => {
                    onPageChanged(p)
                }} key={p} className={currentPage === p ? `${s.page} ${s.currentPage}` :
                    s.page}>{p}</div>
            })}
            {portionNumber < portionCount &&
                <button className={s.nextButton} onClick={onNextBtnClick}>NEXT</button>}
        </div>
    )
}

export default Pagination