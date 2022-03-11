const store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
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
        },
        navbar: {
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
    },
    _callSubscriber() {
        console.log('state')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD_NEW_POST':
                const newPost = {
                    id: 4,
                    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_man_male_person-128.png',
                    name: 'Ivan',
                    message: this._state.profilePage.newPostText,
                    likes: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break
            case 'UPDATE_NEW_POST_TEXT':
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()
                break
            case 'ADD_NEW_MESSAGE':
                const newMessage = {
                    id: 5,
                    avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
                    name: 'Me',
                    message: this._state.messagesPage.newMessageText
                }
                this._state.messagesPage.messages.push(newMessage)
                this._state.messagesPage.newMessageText = ''
                this._callSubscriber()
                break
            case 'UPDATE_NEW_MESSAGE_TEXT':
                this._state.messagesPage.newMessageText = action.newMessageText
                this._callSubscriber()
                break
            default:
                alert("action error");
        }
    }
}

export default store

window.store = store