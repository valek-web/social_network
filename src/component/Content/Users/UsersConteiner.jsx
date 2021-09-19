import React from 'react'
import { connect } from 'react-redux'
import {
    onFollowUnfollowUser,
    onSetUsers,
    onSetTotalCount,
    onSetCurrentPage,
    toggleFollowingProgress,
    setUsersThunkCreator,
    newPageThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
} from '../../../redux/reducer/users_reduser'
import Users from './Users'
import Preloader from '../../different/preloader/preloader'
import load from './../../../img/load_book.gif'
import { setLoader } from '../../../redux/reducer/different_reducer'

class UsersConteinerAPI extends React.Component {
    componentDidMount = () => {
        this.props.setUsersThunkCreator(
            this.props.users.length,
            this.props.pageSize,
            this.props.currentPage
        )
    }

    onPageClick = (bool, onMaxPage, pageNum = this.props.currentPage) => {
        this.props.newPageThunkCreator(bool, onMaxPage, pageNum)
    }

    render = () => {
        return this.props.loader ? (
            <Preloader loading={load} />
        ) : (
            <Users
                users={this.props.onUsers}
                onTotalUsersCount={this.props.totalUsersCount}
                onPageSize={this.props.pageSize}
                onCurrentPage={this.props.currentPage}
                {...this.props}
                onClickBtn={this.onPageClick}
            />
        )
    }
}

let mapStateToProps = state => {
    return {
        onUsers: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        loader: state.differentPage.preloader,
        toggleFollowing: state.usersPage.toggleFollowing,
    }
}

const UsersConteiner = connect(mapStateToProps, {
    onFollowUnfollowUser,
    onSetUsers,
    onSetCurrentPage,
    onSetTotalCount,
    setLoader,
    toggleFollowingProgress,
    setUsersThunkCreator,
    newPageThunkCreator,
    followThunkCreator,
    unfollowThunkCreator,
})(UsersConteinerAPI)

export default UsersConteiner
