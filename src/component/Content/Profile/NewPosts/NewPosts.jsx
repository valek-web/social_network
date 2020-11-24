import React from 'react';
import q from './NewPosts.module.css'

const NewPosts = (props) => {
    debugger
    let newP = React.createRef()
    let updatePostChangeText = () => {
        let text = newP.current.value;
        props.updatePostText(text)
    }
    debugger
    return (
        <div>
            <textarea onChange={updatePostChangeText} 
            ref={newP} 
            className="q.textarea" 
            value={props.postsMap.profilePage.newPostText}/>
            <button onClick={props.newPostClick}>New post</button>
        </div>)
}

debugger

export default NewPosts;