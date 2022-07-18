import React from 'react'
import PostsBlockConteiner from './PostsBlock/PostsBlockConteiner'
import ProfileBlockContainer from './ProfileBlock/ProfileBlockContainer'
import style from './Profile.module.css'
import Preloader from '../../different/preloader/preloader'
import load from './../../../img/load_book.gif'

type propsType = {
    boolProfile: boolean,
    status: string
}

const Profile: React.FC<propsType> = React.memo((props) => {
    debugger
    return !props.boolProfile || !props.status ? (
        <>{<Preloader loading={load} />}</>
    ) : (
        <div className={style.profile}>
            <div className={style.profile__info}>
                <ProfileBlockContainer />
            </div>
            <div className={style.profile__posts}>
                <PostsBlockConteiner />
            </div>
        </div>
    )
})

export default Profile
