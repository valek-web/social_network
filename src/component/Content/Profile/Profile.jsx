import React from 'react'
import PostsBlockConteiner from './PostsBlock/PostsBlockConteiner'
import ProfileBlockConteiner from './ProfileBlock/ProfileBlockContainer'

const Profile = React.memo(props => {
    return (
        <div>
            <ProfileBlockConteiner />
            <PostsBlockConteiner />
        </div>
    )
})

export default Profile
