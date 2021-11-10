import { stopSubmit } from 'redux-form'
import { globalAPI } from '../../api/api'
import { setDateAC } from './different_reducer'

const ADD_POST = 'social-network/profile/ADD_POST'
const SET_PROFILE = 'social-network/profile/SET_PROFILE'
const GET_STATUS = 'social-network/profile/GET_STATUS'

let initialState = {
    profile: null,
    boolDate: false,
    post: [
        { message: 'New post!', like: 2, id: 0 },
        { message: "I'm learn Java!", like: 5, id: 1 },
        { message: "I'm learn Python!", like: 33, id: 2 },
        { message: 'I want programmes!', like: 15, id: 3 },
    ],
}

export const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [
                    ...state.post,
                    {
                        message: action.text,
                        like: 0,
                        id: { ...(state.post[state.post.length - 1].id + 1) },
                    },
                ],
                newPostText: '',
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.date,
                boolDate: true,
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.date,
            }
        }
        default:
            return state
    }
}

// action Creator

let addPostAC = text => {
    return { type: ADD_POST, text }
}
let setProfileInfoAC = date => {
    return { type: SET_PROFILE, date }
}

let getProfileStatusAC = date => {
    return { type: GET_STATUS, date }
}

// thunk creator

export const getProfileInfoTC = (urlID, myID) => dispatch => {
    if (!urlID && !myID) {
        globalAPI.setProfileMe().then(date => {
            dispatch(setDateAC(date))
            globalAPI.profileInfo(date.data.id).then(data => {
                dispatch(setProfileInfoAC(data))
            })
        })
    } else {
        globalAPI.profileInfo(!urlID ? myID : urlID).then(data => {
            dispatch(setProfileInfoAC(data))
        })
    }
}
export const getStatusTC = (urlID, myID) => dispatch => {
    if (!urlID && !myID) {
        globalAPI.setProfileMe().then(respons => {
            dispatch(setDateAC(respons))
            globalAPI.getProfileStatus(respons.data.id).then(date => {
                dispatch(getProfileStatusAC(date.data))
            })
        })
    } else {
        globalAPI.getProfileStatus(!urlID ? myID : urlID).then(date => {
            if (!date.data) {
                dispatch(getProfileStatusAC('No status!'))
            } else {
                dispatch(getProfileStatusAC(date.data))
            }
        })
    }
}
export const setStatusTC = newStatus => dispatch => {
    if (!!newStatus) {
        globalAPI.setStatus(newStatus).then(date => {
            if (date.data.resultCode === 0) {
                dispatch(getProfileStatusAC(newStatus))
            }
        })
    }
}
export const addTextPostTC = textPost => dispatch => {
    if (!textPost) {
        dispatch(stopSubmit('post', { _error: 'Unable to create empty post' }))
    } else {
        dispatch(addPostAC(textPost))
    }
}

export const deleteErrorChangeTC = () => dispatch => {
    dispatch(stopSubmit('post', { _error: null }))
}
