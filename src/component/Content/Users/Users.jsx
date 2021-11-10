import React from 'react'
import User from './User/User'
import s from './Users.module.css'

const Users = React.memo(props => {
    let onMaxPage = () => {
        return Math.ceil(props.onTotalUsersCount / props.onPageSize)
    }

    let clickBtnPage = (bool, onMaxPages = onMaxPage) => {
        props.onClickBtn(bool, onMaxPages)
    }

    let mapUser = props.users.map(i => {
        return (
            <User
                onName={i.name}
                onPhoto={i.photos.large}
                onStatus={i.status}
                onFollow={i.followed}
                onID={i.id}
                onFollowun={props.onFollowUnfollowUser}
                following={props.toggleFollowing}
                key={i.id}
                onToggleFollowingProgress={props.toggleFollowingProgress}
                onFollowOn={props.followTC}
                onUnfollowOn={props.unfollowTC}
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
                            current !== 1 ? () => clickBtnPage(false) : null
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
                                ? () => clickBtnPage(true)
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
})

export default Users
