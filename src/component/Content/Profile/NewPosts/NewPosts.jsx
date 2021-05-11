import React from 'react';
import q from './NewPosts.module.css'

const NewPosts = (props) => {
    const newP = React.createRef();
    let addTextPost = () => {
        props.addTextPost()
    }
    let updatePostChangeText = () => {
        let text = newP.current.value;
        props.updatePostChangeText(text)
    }
    return (
        <div>
            <textarea onChange={updatePostChangeText}
                ref={newP}
                className={q.textarea}
                value={props.newPostTexts} 
                placeholder='New post!'/>
            <button onClick={addTextPost}>New post</button>
        </div>)
}

export default NewPosts;