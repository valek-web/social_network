import React from 'react'
import PostsBlockConteiner from './PostsBlock/PostsBlockConteiner'
import ProfileBlockContainer from './ProfileBlock/ProfileBlockContainer'
import style from './Profile.module.css'

const Profile = React.memo((props) => {
    return (
        <div>
            <div className={style.profile}>
                <ProfileBlockContainer />
            </div>
            <div className={style.posts}>
                <PostsBlockConteiner />
            </div>
        </div>
    )
})

export default Profile
