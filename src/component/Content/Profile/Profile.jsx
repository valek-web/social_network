import React from 'react';
import Posts from './Posts/Post';
import q from './Profile.module.css';
import ProfileBlok from './ProfileBlok/ProfileBlok';
import NewPosts from './NewPosts/NewPosts';

const Profile = (props) => {
  let mapPosts = props.postsMap.profilePage.post.map(i => <Posts messag={i.messag} like={i.like}/>);
  return (
    <content className={q.con}>
      <ProfileBlok />
      <NewPosts postsMap={props.postsMap} newPostClick={props.newPostClick} updatePostText={props.updatePostText}/>
      { mapPosts }
    </content>
  )
}

export default Profile; 