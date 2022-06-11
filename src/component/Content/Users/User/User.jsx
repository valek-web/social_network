import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './User.module.css'

const User = React.memo((props) => {
    let followUn = props.onFollow ? 'Unfollow' : 'Follow'

    let followUnfollo = () => {
        if (props.onFollow === true) {
            props.onUnfollowOn(props.onID)
        } else if (props.onFollow === false) {
            props.onFollowOn(props.onID)
        }
    }

    return (
        <div className={style.user}>
            <div className={style.user__ava}>
                <NavLink to={'/profile/' + props.onID}>
                    <img
                        src={
                            !props.onPhoto
                                ? 'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png'
                                : props.onPhoto
                        }
                        alt='#'
                    />
                </NavLink>
            </div>
            <div className={style.user__info}>
                <h3>{props.onName}</h3>
                <p>{!props.onStatus ? 'No status!' : props.onStatus}</p>
                <button
                    disabled={props.following.some((id) => id === props.onID)}
                    onClick={followUnfollo}
                    className='button'
                >
                    {followUn}
                </button>
            </div>
        </div>
    )
})

export default User
