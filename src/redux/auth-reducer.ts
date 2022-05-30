import {authAPI, securityAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

type InitialStateType = typeof initialState
const authReducer = (state = initialState, action): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}
export const setAuthUserData = (id, login, email, isAuth): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, login, email, isAuth},
})

type CaptchaUrlSuccessActionType = {
    type: typeof SET_CAPTCHA_URL
    payload: { captchaUrl: string }
}
export const captchaUrlSuccess = (captchaUrl): CaptchaUrlSuccessActionType => ({
    type: SET_CAPTCHA_URL,
    payload: {captchaUrl},
})

export const getAuthMe = () => async (dispatch) => {
    const data = await authAPI.getAuthMe()
    if (data.resultCode === 0) {
        const {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(getAuthMe())
    } else {
        if (data.resultCode === 10) dispatch(getCaptchaUrl())
        setStatus(data.messages.join(" "))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const captchaUrl = await securityAPI.getCaptchaUrl()
    dispatch(captchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer
