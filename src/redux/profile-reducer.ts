import {profileAPI} from "../api/api";
import {PhotosType} from "../types/types";

const ADD_NEW_POST = 'profile/ADD_NEW_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile/SET_USER_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

type PostType = {
    id: number
    avatar: string
    name: string
    message: string
    likes: number
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type ProfileType = {
    userId: string
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
const initialState = {
    posts: [
        {
            id: 1,
            avatar: 'https://cdn0.iconfinder.com/data/icons/female-styles/500/woman-runner-128.png',
            name: 'Kolja',
            message: 'Hello world!',
            likes: 10
        },
        {
            id: 2,
            avatar: 'https://cdn2.iconfinder.com/data/icons/picol-vector/32/avatar-128.png',
            name: 'Illia',
            message: 'How are you?',
            likes: 20
        },
        {
            id: 3,
            avatar: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/girl-2-128.png',
            name: 'Galina',
            message: 'This is my first post',
            likes: 30
        }
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: ''
}

type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action): InitialStateType =>  {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: 4,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-128.png',
                name: 'Ivan',
                message: action.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id),
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

type AddNewPostActionType = {
    type: typeof ADD_NEW_POST
    newPostText: string
}
export const addNewPost = (newPostText): AddNewPostActionType => ({type: ADD_NEW_POST, newPostText})
type DeletePostActionType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePost = (id): DeletePostActionType => ({type: DELETE_POST, id})
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status): SetUserStatusActionType => ({type: SET_USER_STATUS, status})
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    const status = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(status))
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) dispatch(setUserStatus(status))
}

export const savePhoto = (photoFile) => async (dispatch) => {
    const data = await profileAPI.savePhoto(photoFile)
    if (data.resultCode === 0) dispatch(savePhotoSuccess(data.data.photos))
}

export const saveProfile = (profile, setStatus) => async (dispatch, getState) => {
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(getProfile(getState().auth.id))
    } else {
        setStatus(data.messages.join('. '))
        return Promise.reject(data.messages.join('. '))
    }
}

export default profileReducer