import React from 'react';
import Posts from './Posts/Post';
import q from './Profile.module.css';
import ProfileBlok from './ProfileBlok/ProfileBlok';
import NewPostsConteiner from './NewPosts/NewPostsConteiner';

const Profile = (props) => {
  let mapPosts = props.postsMap.profilePage.post.map(i => <Posts message={i.message} like={i.like} />);
  return (
    <content className={q.con}>
      <ProfileBlok />
      <NewPostsConteiner postsMap={props.postsMap.profilePage} dispatch={props.dispatch} />
      { mapPosts}
    </content>
  )
}

export default Profile; 