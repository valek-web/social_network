import { globalAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'

const LOADER = 'LOADER'
const SET_MY_DATE = 'SET_MY_DATE'
const DELETE_MY_DATE = 'DELETE_MY_DATE'
const INITIALIZE = 'INITIALIZE'

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

//AC

export const setLoader = newBool => {
    return {
        type: LOADER,
        newBool,
    }
}

export const setDate = date => {
    return {
        type: SET_MY_DATE,
        date,
    }
}

const deleteDate = () => {
    return {
        type: DELETE_MY_DATE,
    }
}

const inizializationAC = () => {
    return {
        type: INITIALIZE,
    }
}

// TC

export const setProfileInfoMe = () => dispatch => {
    return globalAPI.setProfileMe().then(date => {
        dispatch(setDate(date))
    })
}

export const setLogin = (email, password, rememberMe, captcha) => dispatch => {
    globalAPI.login(email, password, rememberMe, captcha).then(date => {
        if (date.resultCode === 0) {
            globalAPI.setProfileMe().then(date => {
                dispatch(setDate(date))
            })
        } else {
            dispatch(stopSubmit('login', { _error: date.messages[0] }))
        }
    })
}

export const logOutTC = () => dispatch => {
    globalAPI.logOut().then(date => dispatch(deleteDate()))
}

export const inizializationTC = () => dispatch => {
    dispatch(setProfileInfoMe()).then(() => {
        dispatch(inizializationAC())
    })
}
