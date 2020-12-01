import React from 'react';
import Posts from './Posts/Post';
import q from './Profile.module.css';
import ProfileBlok from './ProfileBlok/ProfileBlok';
import NewPosts from './NewPosts/NewPosts';

const Profile = (props) => {
  let mapPosts = props.postsMap.profilePage.post.map(i => <Posts message={i.message} like={i.like} />);
  return (
    <content className={q.con}>
      <ProfileBlok />
      <NewPosts postsMap={props.postsMap} dispatchProfile={props.dispatchProfile} />
      { mapPosts}
    </content>
  )
}

export default Profile; 