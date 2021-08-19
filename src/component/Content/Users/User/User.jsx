import React from 'react'
import { NavLink } from 'react-router-dom'
import w from './User.module.css'

const User = props => {
    let followUn = props.onFollow ? 'Unfollow' : 'Follow'

    let followUnfollo = () => {
        let idUser = props.onID
        props.onFollowun(idUser)
    }

    return (
        <div className={w.box}>
            <div className={w.ava}>
                <NavLink to={'/profile/' + props.onID}>
                    <img
                        src={
                            !props.onPhoto
                                ? 'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png'
                                : props.onPhoto
                        }
                        alt="#"
                    />
                </NavLink>
            </div>
            <div className={w.info}>
                <h3>{props.onName}</h3>
                <p>{props.onStatus == null ? 'No status!' : props.onStatus}</p>
                <button onClick={followUnfollo}>{followUn}</button>
            </div>
        </div>
    )
}

export default User
