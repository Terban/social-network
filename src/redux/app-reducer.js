import {getAuthMe} from "./auth-reducer";

const SET_INITIALIZATION = 'app/SET_INITIALIZATION'

const initialState = {
    initialized: false,
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const setInitialization = () => ({type: SET_INITIALIZATION})

export const getInitialization = () => (dispatch) => {
    let promise = dispatch(getAuthMe())
    Promise.all([promise]).then(() => {dispatch(setInitialization())})
}

export default appReducer