/* eslint-disable no-unused-expressions */
import React from 'react'
import User from './User/User'
import s from './Users.module.css'

const Users = props => {
    let onMaxPage = () => {
        return Math.ceil(props.onTotalUsersCount / props.onPageSize)
    }

    console.log(onMaxPage())

    let clickBtnPage = (bool, onMaxPage) => {
        props.onClickBtn(bool, onMaxPage)
    }

    let mapUser = props.users.map(i => {
        return (
            <User
                onName={i.name}
                onPhoto={i.photos.large}
                onStatus={i.status}
                onFollow={i.followed}
                onID={i.id}
                onFollowun={props.followUnfollowUser}
                key={i.id}
            />
        )
    })

    let current = props.onCurrentPage
    return (
        <div>
            <div className={s.countPage}>
                <div className={s.box_button}>
                    <div
                        className={current === 1 ? s.block : s.btn_next}
                        onClick={
                            current !== 1
                                ? () => clickBtnPage(false, onMaxPage)
                                : null
                        }
                    >
                        ⇐
                    </div>
                    <div>{current}</div>
                    <div
                        className={
                            current === onMaxPage() ? s.block : s.btn_next
                        }
                        onClick={
                            current !== onMaxPage()
                                ? () => clickBtnPage(true, onMaxPage)
                                : null
                        }
                    >
                        ⇒
                    </div>
                </div>
            </div>
            <div className={s.box}>{mapUser}</div>
        </div>
    )
}

export default Users
