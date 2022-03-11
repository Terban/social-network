const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

function messagesReducer (state, action) {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            const newMessage = {
                id: 5,
                avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
                name: 'Me',
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}

export const addNewMessageAC = () => ({type: ADD_NEW_MESSAGE})
export const updateNewMessageAC = (newMessageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText})

export default messagesReducer