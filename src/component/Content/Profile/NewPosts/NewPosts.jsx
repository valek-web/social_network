import React from 'react';
import { actionAddPost, actionUpdate } from '../../../../redux/state';
import q from './NewPosts.module.css'

const NewPosts = (props) => {
    const newP = React.createRef()
    let updatePostChangeText = () => {
        let text = newP.current.value;
        props.dispatch(actionUpdate(text))
    }

    let addTextPost = () => {
        props.dispatch(actionAddPost())
    }
    
    return (
        <div>
            <textarea onChange={updatePostChangeText}
                ref={newP}
                className="q.textarea"
                value={props.postsMap.profilePage.newPostText} 
                placeholder='New post!'/>
            <button onClick={addTextPost}>New post</button>
        </div>)
}

export default NewPosts;