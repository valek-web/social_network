import { globalAPI } from '../../api/api'
import { actionCreatorDifferent } from './different_reducer'

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

export const setUsersTC =
    (usersLength, pageSize, currentPage) => async dispatch => {
        if (usersLength === 0) {
            dispatch(actionCreatorDifferent.setLoaderAC(true))
            let data = await globalAPI.getUsers(pageSize, currentPage)
            dispatch(actionCreatorDifferent.setLoaderAC(false))
            dispatch(onSetTotalCountAC(data.totalCount))
            dispatch(onSetUsersAC(data.items))
        }
    }

export const newPageTC = (bool, onMaxPage, pageNum) => async dispatch => {
    let currentPageNum = bool
        ? pageNum === onMaxPage()
            ? pageNum
            : pageNum + 1
        : pageNum === 1
        ? pageNum
        : pageNum - 1

    dispatch(onSetCurrentPage(currentPageNum))
    dispatch(actionCreatorDifferent.setLoaderAC(true))
    let data = await globalAPI.getUsers(initionState.pageSize, currentPageNum)
    dispatch(actionCreatorDifferent.setLoaderAC(false))
    dispatch(onSetUsersAC(data.items))
}

export const followTC = onID => async dispatch => {
    dispatch(toggleFollowingProgressAC(onID, true))
    let date = await globalAPI.follow(onID)
    if (date.resultCode === 0) {
        dispatch(onFollowUnfollowUserAC(onID))
        dispatch(toggleFollowingProgressAC(onID, false))
    }
}

export const unfollowTC = onID => async dispatch => {
    dispatch(toggleFollowingProgressAC(onID, true))
    let date = await globalAPI.unfollow(onID)
    if (date.resultCode === 0) {
        dispatch(onFollowUnfollowUserAC(onID))
        dispatch(toggleFollowingProgressAC(onID, false))
    }
}
