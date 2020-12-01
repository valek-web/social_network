import React from 'react';
import { actionAddPost, actionUpdate } from '../../../../redux/state';
import q from './NewPosts.module.css'

const NewPosts = (props) => {
    const newP = React.createRef()
    let updatePostChangeText = () => {
        let text = newP.current.value;
        props.dispatchProfile(actionUpdate(text))
    }

    let addTextPost = () => {
        props.dispatchProfile(actionAddPost())
    }
    
    return (
        <div>
            <textarea onChange={updatePostChangeText}
                ref={newP}
                className="q.textarea"
                value={props.postsMap.profilePage.newPostText} />
            <button onClick={addTextPost}>New post</button>
        </div>)
}

export default NewPosts;