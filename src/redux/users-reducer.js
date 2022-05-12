import {followAPI, usersAPI} from "../api/api";
import {updateObject} from "../utils/object-helpers";

const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET_USERS'
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'user/SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'user/TOGGLE_FOLLOWING_IN_PROGRESS'

const initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalUserCount: 0,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10
}

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObject(state.users, 'id', action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObject(state.users, 'id', action.userId, {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (userId, isFetching) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    userId,
    isFetching
})

export const getUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    const data = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUserCount(data.totalCount))
}

const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(userId, true))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(toggleFollowingInProgress(userId, false))
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.getFollow, followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followAPI.getUnfollow, unfollowSuccess)
}

export default usersReducer