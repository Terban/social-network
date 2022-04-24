import {createSelector} from "reselect";

const selectUsers = (state) => {
    return state.usersPage.users
}
export const reselectUsers = createSelector(selectUsers, (users) => {
    return users.filter(u => true)
})
export const selectPageSize = (state) => {
    return state.usersPage.pageSize
}
export const selectCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const selectTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
}
export const selectIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const selectFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}






