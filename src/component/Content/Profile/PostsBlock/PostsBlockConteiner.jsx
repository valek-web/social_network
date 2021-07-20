import React from 'react';
import { connect } from 'react-redux';
import { actionAddPost, actionUpdate } from '../../../../redux/reducer/profile_reducer';
import PostsBlock from './PostsBlock';

let mapStateToProps = (state) => {
    return (
        {
            newPostTexts: state.profilePage.newPostText,
            posts: state.profilePage.post,
            imgAva: state.differentPage.imgAva
        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return(
        {
            updatePostChangeText: (text) => {
                dispatch(actionUpdate(text));
            },
            addTextPost: () => {
                dispatch(actionAddPost())
            },
        }
    )
}

const NewPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(PostsBlock)

export default NewPostsConteiner;