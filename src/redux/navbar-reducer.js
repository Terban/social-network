const initialState = {
    friends: [
        {
            id: 1,
            avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-11-2-128.png',
            name: 'Andrew'
        },
        {
            id: 2,
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
            name: 'Sasha'
        },
        {
            id: 3,
            avatar: 'https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-12-4-128.png',
            name: 'Sweta'
        }
    ]
}

function navbarReducer (state = initialState) {
    return state
}

export default navbarReducer