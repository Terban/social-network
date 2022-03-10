import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export function rerenderEntireTree(state, addNewPost) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addNewPost={addNewPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

