import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {
    onFollowUnfollowUser,
    onSetUsers,
    onSetTotalCount,
    onSetCurrentPage,
} from '../../../redux/reducer/users_reduser'
import Users from './Users'
import Preloader from '../../different/preloader/preloader'
import load from './../../../img/load_book.gif'
import { setLoader } from '../../../redux/reducer/different_reducer'

class UsersConteinerAPI extends React.Component {
    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.props.setLoader(true)
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
                )
                .then(respons => {
                    this.props.setLoader(false)
                    this.props.onSetTotalCount(respons.data.totalCount)
                    this.props.onSetUsers(respons.data.items)
                })
        }
    }

    onPageClick = (bool, onMaxPage, pageNum = this.props.currentPage) => {
        let currentPageNum = bool
            ? pageNum === onMaxPage()
                ? pageNum
                : pageNum + 1
            : pageNum === 1
            ? pageNum
            : pageNum - 1

        this.props.onSetCurrentPage(currentPageNum)
        this.props.setLoader(true)

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPageNum}`
            )
            .then(respons => {
                this.props.setLoader(false)
                this.props.onSetUsers(respons.data.items)
            })
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
                followUnfollowUser={this.props.onFollowUnfollowUser}
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
    }
}

const UsersConteiner = connect(mapStateToProps, {
    onFollowUnfollowUser,
    onSetUsers,
    onSetCurrentPage,
    onSetTotalCount,
    setLoader,
})(UsersConteinerAPI)

export default UsersConteiner
