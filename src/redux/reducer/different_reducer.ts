import { stateType } from './../redux_store';
import { globalAPI } from '../../api/api'
import { stopSubmit } from 'redux-form'
import { ThunkAction } from 'redux-thunk'

const LOADER = 'social-network/different/LOADER'
const SET_MY_DATE = 'social-network/different/SET_MY_DATE'
const DELETE_MY_DATE = 'social-network/different/DELETE_MY_DATE'
const INITIALIZE = 'social-network/different/INITIALIZE'
const CAPTCHA = 'social-network/different/CAPTCHA'
const DELETE_CAPTCHA = 'social-network/different/DELETE_CAPTCHA'

type myDateType = {
    email: string,
    id: number,
    login: string
} | null

let initialState = {
    imgAva: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg' as string,
    preloader: true,
    myDate: null as myDateType,
    login: false,
    myID: null as number | null,
    loading: false,
    inizialization: false,
    getCaptchaUrl: null as any,
}

type initialStateType = typeof initialState

export const different_reducer = (state = initialState, action: actionTypy): initialStateType => {
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
type actionTypy = setLoaderType |
    setDateType |
    deleteDateType |
    inizializationType |
    capthaUrlType |
    deleteCaptchaUrlType

type setLoaderType = {
    type: typeof LOADER,
    newBool: boolean
}
type setDateType = {
    type: typeof SET_MY_DATE,
    date: any
}

type deleteDateType = {
    type: typeof DELETE_MY_DATE,
}

type inizializationType = {
    type: typeof INITIALIZE,
}
type capthaUrlType = {
    type: typeof CAPTCHA,
    url: any
}
type deleteCaptchaUrlType = {
    type: typeof DELETE_CAPTCHA,
}

export let actionCreatorDifferent = {
    setLoaderAC: (newBool: boolean): setLoaderType => {
        return {
            type: LOADER,
            newBool,
        }
    },

    setDateAC: (date: any): setDateType => {
        return {
            type: SET_MY_DATE,
            date,
        }
    },

    deleteDateAC: (): deleteDateType => {
        return {
            type: DELETE_MY_DATE,
        }
    },

    inizializationAC: (): inizializationType => {
        return {
            type: INITIALIZE,
        }
    },
    capthaUrlAC: (url: any): capthaUrlType => {
        return {
            type: CAPTCHA,
            url,
        }
    },
    deleteCaptchaUrl: (): deleteCaptchaUrlType => {
        return {
            type: DELETE_CAPTCHA,
        }
    },
}

// ThunkCreator

type thunkCreatorDifferentType = {
    setProfileInfoMeTC: () => void | any
    setLoginTC: (email: string, password: string, rememberMe: any, captcha: any) => void
    logOutTC: () => void
    inizializationTC: () => void
    getCaptchaUrl: () => void | any
}

type thunkDifferentType = ThunkAction<Promise<void>, stateType, unknown, actionTypy>

export let thunkCreatorDifferent: thunkCreatorDifferentType = {
    setProfileInfoMeTC: (): thunkDifferentType => async (dispatch) => {
        return await globalAPI.setProfileMe().then((date: any) => {
            dispatch(actionCreatorDifferent.setDateAC(date))
        })
    },

    setLoginTC: (email: string, password: string, rememberMe: any, captcha: any): thunkDifferentType => async (dispatch) => {
        let date = await globalAPI.login(email, password, rememberMe, captcha)
        if (date.resultCode === 0) {
            globalAPI.setProfileMe().then((date: any) => {
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

    logOutTC: (): thunkDifferentType => async (dispatch) => {
        await globalAPI.logOut()
        dispatch(actionCreatorDifferent.deleteDateAC())
    },

    inizializationTC: (): thunkDifferentType => async (dispatch) => {
        await dispatch(thunkCreatorDifferent.setProfileInfoMeTC())
        dispatch(actionCreatorDifferent.inizializationAC())
    },
    getCaptchaUrl: (): thunkDifferentType => async (dispatch) => {
        const respons = await globalAPI.getCaptchaUrl()
        const urlCaptcha = respons.data.url
        dispatch(actionCreatorDifferent.capthaUrlAC(urlCaptcha))
    },
}

// let setProfileInfoMeTC = () => {
//     return thunkCreatorDifferent.setProfileInfoMeTC()
// }
