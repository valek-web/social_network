import React from 'react'
import { connect } from 'react-redux';
import { ACfollowUsers, ACgetUsers } from '../../../redux/reducer/users_reduser';
import Users from './Users';

let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users
        }
    )
}

let mapDispacthToProps = (dispatch) => {
    return {
        followUnfollowUser: (idUser) => {
            return (dispatch(ACfollowUsers(idUser)))
        },
        getUsers: (newUsers) => {
            return (dispatch(ACgetUsers(newUsers)))
        }
    }
}

const UsersConteiner = connect(mapStateToProps, mapDispacthToProps)(Users)

export default UsersConteiner;