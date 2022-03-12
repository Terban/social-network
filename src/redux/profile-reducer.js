const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

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
    newPostText: ''
}

function profileReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_POST:
            let stateAdd = {...state}
            const newPost = {
                id: 4,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-128.png',
                name: 'Ivan',
                message: state.newPostText,
                likes: 0
            }
            stateAdd.posts = [...state.posts]
            stateAdd.posts.push(newPost)
            stateAdd.newPostText = ''
            return stateAdd
        case UPDATE_NEW_POST_TEXT:
            let stateUpdate = {...state}
            stateUpdate.newPostText = action.newPostText
            return stateUpdate;
        default:
            return state;
    }
}

export const addNewPostAC = () => ({type: ADD_NEW_POST})
export const updateNewPostAC = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText})

export default profileReducer