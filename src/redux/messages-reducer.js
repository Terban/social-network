const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
    dialogs: [
        {
            id: 1,
            avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-11-2-128.png',
            name: 'Illia'
        },
        {
            id: 2,
            avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-13-2-128.png',
            name: 'Kolja'
        },
        {
            id: 3,
            avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-2-128.png',
            name: 'Wasil'
        },
        {
            id: 4,
            avatar: 'https://cdn0.iconfinder.com/data/icons/female-styles/500/woman-pretty-bg-128.png',
            name: 'Sveta'
        },
        {
            id: 5,
            avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-5-128.png',
            name: 'Galina'
        },
        {
            id: 6,
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-128.png',
            name: 'Ivan'
        }
    ],
    messages: [
        {
            id: 1,
            avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
            name: 'Kolja',
            message: 'Hi there! How are you?'
        },
        {
            id: 2,
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
            name: 'Me',
            message: 'Normally. And how are you?'
        },
        {
            id: 3,
            avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
            name: 'Kolja',
            message: 'The same. I\'ll be there soon'
        },
        {
            id: 4,
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
            name: 'Me',
            message: 'We are waiting'
        },
    ],
    newMessageText: ''
}

function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let stateAdd = {...state}
            const newMessage = {
                id: 5,
                avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
                name: 'Me',
                message: state.newMessageText
            }
            stateAdd.messages = [...state.messages]
            stateAdd.messages.push(newMessage)
            stateAdd.newMessageText = ''
            return stateAdd;
        case UPDATE_NEW_MESSAGE_TEXT:
            let stateUpdate = {...state}
            stateUpdate.newMessageText = action.newMessageText
            return stateUpdate;
        default:
            return state;
    }
}

export const addNewMessageAC = () => ({type: ADD_NEW_MESSAGE})
export const updateNewMessageAC = (newMessageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText})

export default messagesReducer