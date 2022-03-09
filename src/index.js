import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const dialogs = [
    {id: 1, name: 'Illia'},
    {id: 2, name: 'Kolja'},
    {id: 3, name: 'Wasil'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Galina'},
    {id: 6, name: 'Ivan'}
]
const messages = [
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
]
const posts = [
    {id: 1, message: 'Hello world!', likes: 10},
    {id: 2, message: 'How are you?', likes: 20},
    {id: 3, message: 'This is my first post', likes: 30}
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dialogs={dialogs} messages={messages} posts={posts}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
