import { stopSubmit } from 'redux-form'
import { globalAPI } from '../../api/api'
import { actionCreatorDifferent } from './different_reducer'
// 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
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

let actionCreator = {
    addPostAC: text => {
        return { type: ADD_POST, text }
    },
    setProfileInfoAC: date => {
        return { type: SET_PROFILE, date }
    },

    getProfileStatusAC: date => {
        return { type: GET_STATUS, date }
    },
}

// thunk creator

export let thunkCreatorProfile = {
    getProfileInfoTC: (urlID, myID) => async dispatch => {
        if (!urlID && !myID) {
            let respons = await globalAPI.setProfileMe()
            dispatch(actionCreator.actionCreatorDifferent.setDateAC(respons))
            let data = await globalAPI.profileInfo(respons.data.id)
            dispatch(actionCreator.setProfileInfoAC(data))
        } else {
            let data = await globalAPI.profileInfo(!urlID ? myID : urlID)
            dispatch(actionCreator.setProfileInfoAC(data))
        }
    },
    getStatusTC: (urlID, myID) => async dispatch => {
        if (!urlID && !myID) {
            let respons = await globalAPI.setProfileMe()
            dispatch(actionCreatorDifferent.setDateAC(respons))
            let date = await globalAPI.getProfileStatus(respons.data.id)
            dispatch(actionCreator.getProfileStatusAC(date.data))
        } else {
            let date = await globalAPI.getProfileStatus(!urlID ? myID : urlID)
            if (!date.data) {
                dispatch(actionCreator.getProfileStatusAC('No status!'))
            } else {
                dispatch(actionCreator.getProfileStatusAC(date.data))
            }
        }
    },
    setStatusTC: newStatus => async dispatch => {
        if (!!newStatus) {
            let date = await globalAPI.setStatus(newStatus)
            if (date.data.resultCode === 0) {
                dispatch(actionCreator.getProfileStatusAC(newStatus))
            }
        }
    },
    addTextPostTC: textPost => dispatch => {
        if (!textPost) {
            dispatch(
                stopSubmit('post', { _error: 'Unable to create empty post' })
            )
        } else {
            dispatch(actionCreator.addPostAC(textPost))
        }
    },

    deleteErrorChangeTC: () => dispatch => {
        dispatch(stopSubmit('post', { _error: null }))
    },
}
