import { globalAPI } from '../../api/api'
import { setLoader } from './different_reducer'

const FOLLOW_USER = 'FOLLOW_USER'
const SET_USER = 'GET_USER'
const TOTAL_COUNT = 'TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOGGLE_FOLLOWING = 'SET_TOGGLE_FOLLOWING'

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

export let onFollowUnfollowUser = id => {
    return { type: FOLLOW_USER, id }
}

export let onSetUsers = newUsers => {
    return { type: SET_USER, newUsers }
}

export let onSetTotalCount = totalCountNumber => {
    return { type: TOTAL_COUNT, value: totalCountNumber }
}

export let onSetCurrentPage = current => {
    return {
        type: SET_CURRENT_PAGE,
        current,
    }
}

export let toggleFollowingProgress = (followID, boolFollowing) => {
    return {
        type: SET_TOGGLE_FOLLOWING,
        followID,
        boolFollowing,
    }
}

export const setUsersThunkCreator = (usersLength, pageSize, currentPage) => {
    return dispatch => {
        if (usersLength === 0) {
            dispatch(setLoader(true))
            globalAPI.getUsers(pageSize, currentPage).then(data => {
                dispatch(setLoader(false))
                dispatch(onSetTotalCount(data.totalCount))
                dispatch(onSetUsers(data.items))
            })
        }
    }
}

export const newPageThunkCreator = (bool, onMaxPage, pageNum) => {
    let currentPageNum = bool
        ? pageNum === onMaxPage()
            ? pageNum
            : pageNum + 1
        : pageNum === 1
        ? pageNum
        : pageNum - 1
    return dispatch => {
        dispatch(onSetCurrentPage(currentPageNum))
        dispatch(setLoader(true))
        globalAPI.getUsers(initionState.pageSize, currentPageNum).then(data => {
            dispatch(setLoader(false))
            dispatch(onSetUsers(data.items))
        })
    }
}

export const followThunkCreator = onID => {
    return dispatch => {
        dispatch(toggleFollowingProgress(onID, true))
        globalAPI.follow(onID).then(date => {
            if (date.resultCode === 0) {
                dispatch(onFollowUnfollowUser(onID))
                dispatch(toggleFollowingProgress(onID, false))
            }
        })
    }
}

export const unfollowThunkCreator = onID => {
    return dispatch => {
        dispatch(toggleFollowingProgress(onID, true))
        globalAPI.unfollow(onID).then(date => {
            if (date.resultCode === 0) {
                dispatch(onFollowUnfollowUser(onID))
                dispatch(toggleFollowingProgress(onID, false))
            }
        })
    }
}
