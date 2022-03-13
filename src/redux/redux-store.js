import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
})

const store = createStore(reducers)
export default store
window.store = store