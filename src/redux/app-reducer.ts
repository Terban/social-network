// @ts-ignore
import {getAuthMe} from "./auth-reducer.ts";

const SET_INITIALIZATION = 'app/SET_INITIALIZATION'

const initialState = {
    initialized: false,
}

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action): InitialStateType => {
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

type SetInitializationActionType = {type: typeof SET_INITIALIZATION}
export const setInitialization = (): SetInitializationActionType => ({type: SET_INITIALIZATION})

export const getInitialization = () => (dispatch) => {
    let promise = dispatch(getAuthMe())
    Promise.all([promise]).then(() => {dispatch(setInitialization())})
}

export default appReducer