import React from 'react'
import w from './ProfileBlock.module.css'
import Status from './Status/Status'

const ProfileBlock = props => {
    return (
        <div className={w.flex_blog}>
            <div className={w.ava}>
                <img
                    src={
                        !props.onProfile.photos.large
                            ? 'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png'
                            : props.onProfile.photos.large
                    }
                    alt='#'
                />
            </div>
            <div className={w.info}>
                <h2>{props.onProfile.fullName}</h2>
                <p>
                    {!props.onProfile.aboutMe ? 'Nol' : props.onProfile.aboutMe}
                </p>
                <p>
                    {props.onProfile.lookingForAJob === true
                        ? 'Ищу работу'
                        : 'Не ищу'}
                </p>
                <Status status={props.status} onSetStatus={props.setStatus} />
            </div>
        </div>
    )
}

export default ProfileBlock
