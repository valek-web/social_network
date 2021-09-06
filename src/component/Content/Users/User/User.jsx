import React from 'react'
import { NavLink } from 'react-router-dom'
import w from './User.module.css'
import * as axios from 'axios'

const User = props => {
    let followUn = props.onFollow ? 'Unfollow' : 'Follow'

    let followUnfollo = () => {
        if (props.onFollow === true) {
            axios
                .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${props.onID}`,
                    {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'd66327ed-6b77-485d-934e-ec9d8785c19c',
                            // SameSite: 'None',
                        },
                    }
                )
                .then(respons => {
                    if (respons.data.resultCode === 0) {
                        debugger
                        let idUser = props.onID
                        props.onFollowun(idUser)
                    }
                })
        } else if (props.onFollow === false) {
            axios
                .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${props.onID}`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'd66327ed-6b77-485d-934e-ec9d8785c19c',
                        },
                    }
                )
                .then(respons => {
                    debugger
                    if (respons.data.resultCode === 0) {
                        let idUser = props.onID
                        props.onFollowun(idUser)
                    }
                })
        }
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
                <p>{!props.onStatus ? 'No status!' : props.onStatus}</p>
                <button onClick={followUnfollo}>{followUn}</button>
            </div>
        </div>
    )
}

export default User
