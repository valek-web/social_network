/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { thunkCreatorUsers } from '../../../redux/reducer/users_reduser'
import Users from './Users'
import Preloader from '../../different/preloader/preloader'
import load from './../../../img/load_book.gif'
import { AuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'

const UsersConteinerAPI = React.memo((props) => {
    useEffect(() => {
        props.setUsersTC(props.users.length, props.pageSize, props.currentPage)
    }, [])

    const onPageClick = (bool, onMaxPage, pageNum = props.currentPage) => {
        props.newPageTC(bool, onMaxPage, pageNum)
    }

    return props.loader ? (
        <Preloader loading={load} />
    ) : (
        <Users
            users={props.onUsers}
            onTotalUsersCount={props.totalUsersCount}
            onPageSize={props.pageSize}
            onCurrentPage={props.currentPage}
            {...props}
            onClickBtn={onPageClick}
        />
    )
})

let mapStateToProps = (state) => {
    return {
        onUsers: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        loader: state.differentPage.preloader,
        toggleFollowing: state.usersPage.toggleFollowing,
        auth: state.differentPage.login,
    }
}

export default compose(
    connect(mapStateToProps, {
        ...thunkCreatorUsers,
    }),
    AuthRedirect
)(UsersConteinerAPI)
