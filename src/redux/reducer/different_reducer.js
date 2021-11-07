import { globalAPI } from '../../api/api'

const LOADER = 'LOADER'
const SET_MY_DATE = 'SET_MY_DATE'
const DELETE_MY_DATE = 'DELETE_MY_DATE'

let initialState = {
    imgAva: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    preloader: true,
    myDate: null,
    login: false,
    myID: null,
    loading: false,
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

// TC

export const setProfileInfoMe = () => dispatch => {
    globalAPI.setProfileMe().then(date => {
        dispatch(setDate(date))
    })
}

export const setLogin = (email, password, rememberMe, captcha) => dispatch => {
    globalAPI.login(email, password, rememberMe, captcha).then(date => {
        console.log(date)
        globalAPI.setProfileMe().then(date => {
            dispatch(setDate(date))
        })
    })
}

export const logOutTC = () => dispatch => {
    globalAPI.logOut().then(date => dispatch(deleteDate()))
}
