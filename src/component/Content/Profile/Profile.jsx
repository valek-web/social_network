import React from 'react';
import PostsBlockConteiner from './PostsBlock/PostsBlockConteiner';
import ProfileBlock from './ProfileBlock/ProfileBlock';

const Profile = (props) => {
    return(
        <div>
            <ProfileBlock onState={props.stateProfile}/>
            <PostsBlockConteiner onState={props.stateProfile}/>
        </div>
    )
}

export default Profile;