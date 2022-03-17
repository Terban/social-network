import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    ],
    newPostText: '',
    profile: null
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: 4,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-128.png',
                name: 'Ivan',
                message: state.newPostText,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const addNewPost = () => ({type: ADD_NEW_POST})
export const updateNewPost = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export default profileReducer