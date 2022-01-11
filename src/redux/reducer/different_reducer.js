import { globalAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'

const LOADER = 'social-network/different/LOADER'
const SET_MY_DATE = 'social-network/different/SET_MY_DATE'
const DELETE_MY_DATE = 'social-network/different/DELETE_MY_DATE'
const INITIALIZE = 'social-network/different/INITIALIZE'
const CAPTCHA = 'social-network/different/CAPTCHA'
const DELETE_CAPTCHA = 'social-network/different/DELETE_CAPTCHA'

let initialState = {
    imgAva: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    preloader: true,
    myDate: null,
    login: false,
    myID: null,
    loading: false,
    inizialization: false,
    getCaptchaUrl: null,
}

export const different_reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER:
            return {
                ...state,
                preloader: action.newBool,
            }
        case SET_MY_DATE:
            return {
                ...state,
                myDate: action.date.data,
                login: !action.date.resultCode,
                myID: action.date.data.id,
                loading: true,
            }
        case DELETE_MY_DATE:
            return {
                ...state,
                myDate: null,
                login: false,
                myID: null,
            }
        case INITIALIZE:
            return {
                ...state,
                inizialization: true,
            }
        case CAPTCHA:
            return {
                ...state,
                getCaptchaUrl: action.url,
            }
        case DELETE_CAPTCHA:
            return {
                ...state,
                getCaptchaUrl: null,
            }
        default:
            return state
    }
}

//Action Creator

export let actionCreatorDifferent = {
    setLoaderAC: (newBool) => {
        return {
            type: LOADER,
            newBool,
        }
    },

    setDateAC: (date) => {
        return {
            type: SET_MY_DATE,
            date,
        }
    },

    deleteDateAC: () => {
        return {
            type: DELETE_MY_DATE,
        }
    },

    inizializationAC: () => {
        return {
            type: INITIALIZE,
        }
    },
    capthaUrlAC: (url) => {
        return {
            type: CAPTCHA,
            url,
        }
    },
    deleteCaptchaUrl: () => {
        return {
            type: DELETE_CAPTCHA,
        }
    },
}

// ThunkCreator

export let thunkCreatorDifferent = {
    setProfileInfoMeTC: () => async (dispatch) => {
        return await globalAPI.setProfileMe().then((date) => {
            dispatch(actionCreatorDifferent.setDateAC(date))
        })
    },

    setLoginTC: (email, password, rememberMe, captcha) => async (dispatch) => {
        let date = await globalAPI.login(email, password, rememberMe, captcha)
        if (date.resultCode === 0) {
            globalAPI.setProfileMe().then((date) => {
                dispatch(actionCreatorDifferent.setDateAC(date))
                dispatch(actionCreatorDifferent.deleteCaptchaUrl())
            })
        } else {
            if (date.resultCode === 10) {
                dispatch(thunkCreatorDifferent.getCaptchaUrl())
            }
            dispatch(stopSubmit('login', { _error: date.messages[0] }))
        }
    },

    logOutTC: () => async (dispatch) => {
        await globalAPI.logOut()
        dispatch(actionCreatorDifferent.deleteDateAC())
    },

    inizializationTC: () => async (dispatch) => {
        await dispatch(thunkCreatorDifferent.setProfileInfoMeTC())
        dispatch(actionCreatorDifferent.inizializationAC())
    },
    getCaptchaUrl: () => async (dispatch) => {
        const respons = await globalAPI.getCaptchaUrl()
        const urlCaptcha = respons.data.url
        dispatch(actionCreatorDifferent.capthaUrlAC(urlCaptcha))
    },
}

// let setProfileInfoMeTC = () => {
//     return thunkCreatorDifferent.setProfileInfoMeTC()
// }
