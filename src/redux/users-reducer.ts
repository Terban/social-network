import {followAPI, usersAPI} from "../api/api";
import {updateObject} from "../utils/object-helpers";
import {PhotosType} from "../types/types";

const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET_USERS'
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'user/SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'user/TOGGLE_FOLLOWING_IN_PROGRESS'

type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    currentPage: 1,
    totalUserCount: 0,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    portionSize: 10
}

type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action): InitialStateType => {
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

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId): FollowSuccessActionType => ({type: FOLLOW, userId})
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId): UnfollowSuccessActionType => ({type: UNFOLLOW, userId})
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users): SetUsersActionType => ({type: SET_USERS, users})
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
type SetTotalUserCountActionType = {
    type: typeof SET_TOTAL_USER_COUNT
    totalUserCount: number
}
export const setTotalUserCount = (totalUserCount): SetTotalUserCountActionType => ({
    type: SET_TOTAL_USER_COUNT,
    totalUserCount
})
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
type ToggleFollowingInProgressActionType = {
    type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
    userId: number
    isFetching: boolean
}
export const toggleFollowingInProgress = (userId, isFetching): ToggleFollowingInProgressActionType => ({
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

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
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