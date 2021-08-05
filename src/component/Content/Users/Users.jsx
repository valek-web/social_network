import * as axios from 'axios';
import React from 'react'
import User from './User/User';
import s from './Users.module.css';

class Users extends React.Component {

    componentDidMount = () => {
        if (this.props.users.length == 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onPageSize}&page=${this.props.onCurrentPage}`)
                .then(respons => {
                    this.props.setTotalCount(respons.data.totalCount)
                    this.props.setUsers(respons.data.items)
                }
                )
        }
    }

    onPageClick = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onPageSize}&page=${pageNum}`)
            .then(respons => {
                this.props.setUsers(respons.data.items)
            }
            )
    }

    render = () => {
        let mapUser = this.props.users.map(i => {
            return (
                <User
                    onName={i.name}
                    onPhoto={i.photos.large}
                    onStatus={i.status}
                    onFollow={i.followed}
                    onID={i.id}
                    onFollowun={this.props.followUnfollowUser}
                    key={i.id} />
            )
        })

        let amountPage = Math.ceil(this.props.onTotalUsersCount / this.props.onPageSize)
        let arrayPage = []
        for (let index = 1; index <= amountPage; index++) {
            arrayPage.push(index)
        }

        let mapArryaPage = arrayPage.map(i => {
            return (
                <span className={i == this.props.onCurrentPage ? s.active : s.spn}
                    onClick={() => this.onPageClick(i)}
                    key={i}>{i}</span>
            )
        })
        return (
            <div>
                <div className={s.countPage}>{mapArryaPage}</div>
                <div className={s.box}>{mapUser}</div>
            </div>
        )
    }
}

export default Users;