const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

function profileReducer (state, action) {
    switch (action.type) {
        case ADD_NEW_POST:
            const newPost = {
                id: 4,
                avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-128.png',
                name: 'Ivan',
                message: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state;
        default:
            return state;
    }
}

export const addNewPostAC = () => ({type: ADD_NEW_POST})
export const updateNewPostAC = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText})

export default profileReducer