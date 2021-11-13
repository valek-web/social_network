import { globalAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'

const LOADER = 'social-network/different/LOADER'
const SET_MY_DATE = 'social-network/different/SET_MY_DATE'
const DELETE_MY_DATE = 'social-network/different/DELETE_MY_DATE'
const INITIALIZE = 'social-network/different/INITIALIZE'

let initialState = {
    imgAva: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    preloader: true,
    myDate: null,
    login: false,
    myID: null,
    loading: false,
    inizialization: false,
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
        default:
            return state
    }
}

//Action Creator

export const setLoaderAC = newBool => {
    return {
        type: LOADER,
        newBool,
    }
}

export const setDateAC = date => {
    return {
        type: SET_MY_DATE,
        date,
    }
}

const deleteDateAC = () => {
    return {
        type: DELETE_MY_DATE,
    }
}

const inizializationAC = () => {
    return {
        type: INITIALIZE,
    }
}

// ThunkCreator

export const setProfileInfoMeTC = () => async dispatch => {
    return await globalAPI.setProfileMe().then(date => {
        dispatch(setDateAC(date))
    })
}

export const setLoginTC =
    (email, password, rememberMe, captcha) => async dispatch => {
        let date = await globalAPI.login(email, password, rememberMe, captcha)
        if (date.resultCode === 0) {
            globalAPI.setProfileMe().then(date => {
                dispatch(setDateAC(date))
            })
        } else {
            dispatch(stopSubmit('login', { _error: date.messages[0] }))
        }
    }

export const logOutTC = () => async dispatch => {
    await globalAPI.logOut()
    dispatch(deleteDateAC())
}

export const inizializationTC = () => async dispatch => {
    await dispatch(setProfileInfoMeTC())
    dispatch(inizializationAC())
}
