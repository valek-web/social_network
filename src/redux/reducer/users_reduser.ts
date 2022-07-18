import { globalAPI } from '../../api/api'
import { actionCreatorDifferent } from './different_reducer'

const FOLLOW_USER = 'social-network/users/FOLLOW_USER'
const SET_USER = 'social-network/users/GET_USER'
const TOTAL_COUNT = 'social-network/users/TOTAL_COUNT'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOGGLE_FOLLOWING = 'social-network/users/SET_TOGGLE_FOLLOWING'

type photosType = {
    small: string | null,
    large: string | null
}
type usersType = {
    followed: boolean
    id: number
    name: string
    photos: photosType
    status: string | null
    uniqueUrlName: null | any
}

let initionState = {
    users: [] as Array<usersType>,
    totalUsers: null as number | null,
    currentPage: 1 as number,
    pageSize: 3 as number,
    toggleFollowing: [] as any,
}

type initionStateType = typeof initionState

export const users_reduser = (state = initionState, action: any): initionStateType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((i: any) => {
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
                    : state.toggleFollowing.filter((id: any) => {
                        return id !== action.followID
                    }),
            }
        default:
            return state
    }
}

// ActionCreator

type onFollowUnfollowUserType = {
    type: typeof FOLLOW_USER, id: number
}

type onSetUsersType = {
    type: typeof SET_USER, newUsers: Array<usersType>
}

type onSetTotalCountType = {
    type: typeof TOTAL_COUNT, value: number
}

type onSetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    current: number,
}

type toggleFollowingProgressType = {
    type: typeof SET_TOGGLE_FOLLOWING,
    followID: number,
    boolFollowing: boolean,
}

let actionCreatorUsers = {
    onFollowUnfollowUserAC: (id: number): onFollowUnfollowUserType => {
        return { type: FOLLOW_USER, id }
    },

    onSetUsersAC: (newUsers: Array<usersType>): onSetUsersType => {
        return { type: SET_USER, newUsers }
    },

    onSetTotalCountAC: (totalCountNumber: number): onSetTotalCountType => {
        return { type: TOTAL_COUNT, value: totalCountNumber }
    },

    onSetCurrentPageAC: (current: number): onSetCurrentPageType => {
        return {
            type: SET_CURRENT_PAGE,
            current,
        }
    },

    toggleFollowingProgressAC: (followID: number, boolFollowing: boolean): toggleFollowingProgressType => {
        return {
            type: SET_TOGGLE_FOLLOWING,
            followID,
            boolFollowing,
        }
    },
}

// ThunkCreator

export let thunkCreatorUsers = {
    setUsersTC: (usersLength: any, pageSize: number, currentPage: number) => async (dispatch: any) => {
        if (usersLength === 0) {
            dispatch(actionCreatorDifferent.setLoaderAC(true))
            let data = await globalAPI.getUsers(pageSize, currentPage)
            dispatch(actionCreatorDifferent.setLoaderAC(false))
            dispatch(actionCreatorUsers.onSetTotalCountAC(data.totalCount))
            dispatch(actionCreatorUsers.onSetUsersAC(data.items))
        }
    },

    newPageTC: (bool: boolean, onMaxPage: any, pageNum: number) => async (dispatch: any) => {
        let currentPageNum = bool
            ? pageNum === onMaxPage()
                ? pageNum
                : pageNum + 1
            : pageNum === 1
                ? pageNum
                : pageNum - 1

        dispatch(actionCreatorUsers.onSetCurrentPageAC(currentPageNum))
        dispatch(actionCreatorDifferent.setLoaderAC(true))
        let data = await globalAPI.getUsers(
            initionState.pageSize,
            currentPageNum
        )
        dispatch(actionCreatorDifferent.setLoaderAC(false))
        dispatch(actionCreatorUsers.onSetUsersAC(data.items))
    },

    followTC: (onID: number) => async (dispatch: any) => {
        dispatch(actionCreatorUsers.toggleFollowingProgressAC(onID, true))
        let date = await globalAPI.follow(onID)
        if (date.resultCode === 0) {
            dispatch(actionCreatorUsers.onFollowUnfollowUserAC(onID))
            dispatch(actionCreatorUsers.toggleFollowingProgressAC(onID, false))
        }
    },

    unfollowTC: (onID: number) => async (dispatch: any) => {
        dispatch(actionCreatorUsers.toggleFollowingProgressAC(onID, true))
        let date = await globalAPI.unfollow(onID)
        if (date.resultCode === 0) {
            dispatch(actionCreatorUsers.onFollowUnfollowUserAC(onID))
            dispatch(actionCreatorUsers.toggleFollowingProgressAC(onID, false))
        }
    },
}
