import { globalAPI } from '../../api/api'
import { setDate } from './different_reducer'

const UPDATE_TEXT = 'UPDATE_TEXT'
const ADD_POST = 'ADD_POST'
const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    profile: null,
    boolDate: false,
    post: [
        { message: 'New post!', like: 2, id: 0 },
        { message: "I'm learn Java!", like: 5, id: 1 },
        { message: "I'm learn Python!", like: 33, id: 2 },
        { message: 'I want programmes!', like: 15, id: 3 },
    ],
    newPostText: '',
}

export const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                post: [
                    ...state.post,
                    {
                        message: state.newPostText,
                        like: 0,
                        id: { ...(state.post[state.post.length - 1].id + 1) },
                    },
                ],
                newPostText: '',
            }
        }
        case UPDATE_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_PROFILE: {
            debugger
            return {
                ...state,
                profile: action.date,
                boolDate: true,
            }
        }
        default:
            return state
    }
}

export let actionUpdate = text => {
    return { type: UPDATE_TEXT, newText: text }
}
export let actionAddPost = () => {
    return { type: ADD_POST }
}
export let setProfileInfo = date => {
    return { type: SET_PROFILE, date }
}

export const getProfileInfo = (urlID, myID) => dispatch => {
    if (!urlID && !myID) {
        globalAPI.setProfileMe().then(date => {
            dispatch(setDate(date))
            globalAPI.profileInfo(date.data.id).then(data => {
                dispatch(setProfileInfo(data))
            })
        })
    } else {
        globalAPI.profileInfo(!urlID ? myID : urlID).then(data => {
            dispatch(setProfileInfo(data))
        })
    }
}
