const FOLLOW_USER = 'FOLLOW_USER'
const SET_USER = 'GET_USER'
const TOTAL_COUNT = 'TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initionState = {
    users: [],
    totalUsers: null,
    currentPage: 1,
    pageSize: 3,
}

window.x = initionState

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
