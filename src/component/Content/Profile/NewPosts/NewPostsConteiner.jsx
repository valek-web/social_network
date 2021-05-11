import React from 'react';
import { actionAddPost, actionUpdate } from '../../../../redux/profile_reducer';
import NewPosts from './NewPosts';

const NewPostsConteiner = (props) => {
    let updatePostChangeText = (text) => {
        props.dispatch(actionUpdate(text))
    }

    let addTextPost = () => {
        props.dispatch(actionAddPost())
    }
    
    return (
        <NewPosts addTextPost={addTextPost} updatePostChangeText={updatePostChangeText} /*newP={newP}*/ newPostTexts={props.postsMap.newPostText}/>
    )
}

export default NewPostsConteiner;