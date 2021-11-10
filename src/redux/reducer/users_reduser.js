import { globalAPI } from '../../api/api'
import { setLoaderAC } from './different_reducer'

const FOLLOW_USER = 'social-network/users/FOLLOW_USER'
const SET_USER = 'social-network/users/GET_USER'
const TOTAL_COUNT = 'social-network/users/TOTAL_COUNT'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOGGLE_FOLLOWING = 'social-network/users/SET_TOGGLE_FOLLOWING'

let initionState = {
    users: [],
    totalUsers: null,
    currentPage: 1,
    pageSize: 3,
    toggleFollowing: [],
}

export const users_reduser = (state = initionState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id === action.id) {
                        i.followed ? (i.followed = false) : (i.followed = true)
                        return { ...i }
                    }
                    return i
                }),
            }
        case SET_USER:
            return {
                ...state,
                users: action.newUsers,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current,
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalUsers: action.value,
            }
        case SET_TOGGLE_FOLLOWING:
            return {
                ...state,
                toggleFollowing: action.boolFollowing
                    ? [...state.toggleFollowing, action.followID]
                    : state.toggleFollowing.filter(id => {
                          return id !== action.followID
                      }),
            }
        default:
            return state
    }
}

// ActionCreator

export let onFollowUnfollowUserAC = id => {
    return { type: FOLLOW_USER, id }
}

export let onSetUsersAC = newUsers => {
    return { type: SET_USER, newUsers }
}

export let onSetTotalCountAC = totalCountNumber => {
    return { type: TOTAL_COUNT, value: totalCountNumber }
}

export let onSetCurrentPage = current => {
    return {
        type: SET_CURRENT_PAGE,
        current,
    }
}

export let toggleFollowingProgressAC = (followID, boolFollowing) => {
    return {
        type: SET_TOGGLE_FOLLOWING,
        followID,
        boolFollowing,
    }
}

// ThunkCreator

export const setUsersTC = (usersLength, pageSize, currentPage) => {
    return dispatch => {
        if (usersLength === 0) {
            dispatch(setLoaderAC(true))
            globalAPI.getUsers(pageSize, currentPage).then(data => {
                dispatch(setLoaderAC(false))
                dispatch(onSetTotalCountAC(data.totalCount))
                dispatch(onSetUsersAC(data.items))
            })
        }
    }
}

export const newPageTC = (bool, onMaxPage, pageNum) => {
    let currentPageNum = bool
        ? pageNum === onMaxPage()
            ? pageNum
            : pageNum + 1
        : pageNum === 1
        ? pageNum
        : pageNum - 1
    return dispatch => {
        dispatch(onSetCurrentPage(currentPageNum))
        dispatch(setLoaderAC(true))
        globalAPI.getUsers(initionState.pageSize, currentPageNum).then(data => {
            dispatch(setLoaderAC(false))
            dispatch(onSetUsersAC(data.items))
        })
    }
}

export const followTC = onID => {
    return dispatch => {
        dispatch(toggleFollowingProgressAC(onID, true))
        globalAPI.follow(onID).then(date => {
            if (date.resultCode === 0) {
                dispatch(onFollowUnfollowUserAC(onID))
                dispatch(toggleFollowingProgressAC(onID, false))
            }
        })
    }
}

export const unfollowTC = onID => {
    return dispatch => {
        dispatch(toggleFollowingProgressAC(onID, true))
        globalAPI.unfollow(onID).then(date => {
            if (date.resultCode === 0) {
                dispatch(onFollowUnfollowUserAC(onID))
                dispatch(toggleFollowingProgressAC(onID, false))
            }
        })
    }
}
