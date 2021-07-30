const FOLLOW_USER = 'FOLLOW_USER'
const GET_USER = 'GET_USER'

let initionState = {
    users: []
}

export const users_reduser = (state = initionState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id == action.id) {
                        i.follow ? i.follow = false :
                            i.follow = true
                        return { ...i }
                    }
                    return i;
                })
            }
        case GET_USER:
            return ({
                ...state,
                users: [...action.newUsers]
            })
        default:
            return (state)
    }
}

export let ACfollowUsers = (id) => {
    return (
        { type: FOLLOW_USER, id }
    )
}

export let ACgetUsers = (newUsers) => {
    return (
        { type: GET_USER, newUsers }
    )
}