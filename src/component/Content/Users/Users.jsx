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

    onPageClick = (bool, pageNum = this.props.onCurrentPage) => {
        let currentPageNum = bool ? pageNum + 1 : pageNum - 1
        this.props.setCurrentPage(currentPageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onPageSize}&page=${currentPageNum}`)
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

        let current = this.props.onCurrentPage
        let total = this.props.onTotalUsersCount

        return (
            <div>
                <div className={s.countPage}>
                    <div className={s.box_button}>
                        <div className={current == 1 ? s.block : s.btn_next} onClick={() => this.onPageClick(false)}>⇐</div>
                        <div><input className={s.input_current_page} type="text" value={current} onChange={() => alert('x')} /></div>
                        <div className={current == total ? s.block : s.btn_next} onClick={() => this.onPageClick(true)}>⇒</div>
                    </div>
                </div>
                <div className={s.box}>{mapUser}</div>
            </div>
        )
    }
}

export default Users;