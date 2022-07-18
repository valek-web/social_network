import React from 'react'
import style from './ProfileBlock.module.css'
import Status from './Status/Status'

type propsType ={
    status: string,
    onProfile: any

    logOutTC: () => void,
    setStatusTC: () => void,
}

const ProfileBlock:React.FC<propsType> = React.memo((props) => {
    debugger
    return (
        <>
            <button onClick={props.logOutTC} className='button'>
                log out
            </button>
            <div className={style.profile__flex_blog}>
                <div className={style.profile__ava}>
                    <img
                        src={
                            !props.onProfile.photos.large
                                ? 'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png'
                                : props.onProfile.photos.large
                        }
                        alt='#'
                    />
                </div>
                <div className={style.profile__info}>
                    <h2>{props.onProfile.fullName}</h2>
                    <p>
                        {!props.onProfile.aboutMe
                            ? 'Nol'
                            : props.onProfile.aboutMe}
                    </p>
                    <p>
                        {props.onProfile.lookingForAJob === true
                            ? 'Ищу работу'
                            : 'Не ищу'}
                    </p>
                    <Status
                        status={props.status}
                        onSetStatusTC={props.setStatusTC}
                    />
                </div>
            </div>
        </>
    )
})

export default ProfileBlock
