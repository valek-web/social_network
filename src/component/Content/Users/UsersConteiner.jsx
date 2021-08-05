import React from 'react'
import { connect } from 'react-redux';
import { ACfollowUsers, ACgetUsers, ACtotalCount, ACsetCurrentPage } from '../../../redux/reducer/users_reduser';
import Users from './Users';

let mapStateToProps = (state) => {
    return (
        {
            users: state.usersPage.users,
            onTotalUsersCount: state.usersPage.totalUsersCount,
            onPageSize: state.usersPage.pageSize,
            onCurrentPage: state.usersPage.currentPage,
            onPageSize: state.usersPage.pageSize
        }
    )
}

let mapDispacthToProps = (dispatch) => {
    return {
        followUnfollowUser: (idUser) => {
            dispatch(ACfollowUsers(idUser))
        },
        setUsers: (newUsers) => {
            dispatch(ACgetUsers(newUsers))
        },
        setCurrentPage: (currentPage) => {
            dispatch(ACsetCurrentPage(currentPage))
        },
        setTotalCount: (totalUsersCount) => {
            dispatch(ACtotalCount(totalUsersCount))
        }
    }
}

const UsersConteiner = connect(mapStateToProps, mapDispacthToProps)(Users)

export default UsersConteiner;