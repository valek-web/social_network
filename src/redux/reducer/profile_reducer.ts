import { stopSubmit } from 'redux-form'
import { globalAPI } from '../../api/api'
import { actionCreatorDifferent } from './different_reducer'
// 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
const ADD_POST = 'social-network/profile/ADD_POST'
const SET_PROFILE = 'social-network/profile/SET_PROFILE'
const GET_STATUS = 'social-network/profile/GET_STATUS'

type postType = {
    message: string,
    like: number,
    id: number
}

let initialState = {
    profile: null,
    boolDate: false,
    post: [
        { message: 'New post!', like: 2, id: 0 },
        { message: "I'm learn Java!", like: 5, id: 1 },
        { message: "I'm learn Python!", like: 33, id: 2 },
        { message: 'I want programmes!', like: 15, id: 3 },
    ] as Array<postType>,
    newPostText: '' as string,
    status: '' as string
}

type initialStateType = typeof initialState

export const profile_reducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [
                    ...state.post,
                    {
                        message: action.text,
                        like: 0,
                        id: state.post[state.post.length - 1].id + 1,
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

type addPostType = {
    type: typeof ADD_POST,
    text: string
}

type getProfileStatusType = {
    type: typeof GET_STATUS,
    date: string
}

type setProfileInfoType = {
    type: typeof SET_PROFILE, date: any
}

let actionCreator = {
    addPostAC: (text: string): addPostType => {
        return { type: ADD_POST, text }
    },
    setProfileInfoAC: (date: any): setProfileInfoType => {
        return { type: SET_PROFILE, date }
    },

    getProfileStatusAC: (date: string): getProfileStatusType => {
        return { type: GET_STATUS, date }
    },
}

// thunk creator

export let thunkCreatorProfile = {
    getProfileInfoTC: (urlID: any, myID: any) => async (dispatch: any) => {
        if (!urlID && !myID) {
            let respons = await globalAPI.setProfileMe()
            dispatch(actionCreatorDifferent.setDateAC(respons))
            let data = await globalAPI.profileInfo(respons.data.id)
            dispatch(actionCreator.setProfileInfoAC(data))
        } else {
            let data = await globalAPI.profileInfo(!urlID ? myID : urlID)
            dispatch(actionCreator.setProfileInfoAC(data))
        }
    },
    getStatusTC: (urlID: any, myID: any) => async (dispatch: any) => {
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
    setStatusTC: (newStatus: any) => async (dispatch: any) => {
        if (!!newStatus) {
            let date = await globalAPI.setStatus(newStatus)
            if (date.data.resultCode === 0) {
                dispatch(actionCreator.getProfileStatusAC(newStatus))
            }
        }
    },
    addTextPostTC: (textPost: any) => (dispatch: any) => {
        if (!textPost) {
            dispatch(
                stopSubmit('post', { _error: 'Unable to create empty post' })
            )
        } else {
            dispatch(actionCreator.addPostAC(textPost))
        }
    },

    deleteErrorChangeTC: () => (dispatch: any) => {
        dispatch(stopSubmit('post', { _error: null }))
    },
}
