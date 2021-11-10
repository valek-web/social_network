import React from 'react'
import PostsBlockConteiner from './PostsBlock/PostsBlockConteiner'
import ProfileBlockContainer from './ProfileBlock/ProfileBlockContainer'

const Profile = React.memo(props => {
    return (
        <div>
            <ProfileBlockContainer />
            <PostsBlockConteiner />
        </div>
    )
})

export default Profile
