import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer.ts";
import messagesReducer from "./messages-reducer.ts";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer.ts";
import authReducer from "./auth-reducer.ts";
import thunk from "redux-thunk";
import appReducer from "./app-reducer.ts";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store
window.store = store