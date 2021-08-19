const LOADER = 'LOADER'
const SET_MY_DATE = 'SET_MY_DATE'

let initialState = {
    imgAva: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg',
    preloader: true,
    myDate: null,
    login: false,
}

export const different_reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER:
            return {
                ...state,
                preloader: action.newBool,
            }
        case SET_MY_DATE:
            debugger
            return {
                ...state,
                myDate: action.date.data,
                login: !action.date.resultCode,
            }
        default:
            return state
    }
}

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
