import profileReducer, {addNewPost, deletePost} from "./profile-reducer";

it("New post added", () => {
    const action = addNewPost("New post for test")
    const state = {
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
    }
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})

it("New post message is corrected", () => {
    const action = addNewPost("New post for test")
    const state = {
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
    }
    const newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe("New post for test")
})

it("Post deleted", () => {
    const action = deletePost(1)
    const state = {
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
    }
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})