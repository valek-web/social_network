import React from 'react';
import Posts from './Post/Post';
import q from './PostsBlock.module.css'

const PostsBlock = (props) => {
    let mapPosts =  props.posts.map(i => {
        return(
            <Posts onImgAva={props.imgAva} text={i.message} key={i.id} like={i.like}/>
        )
    })
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
            <div className={q.box}>
                <div className={q.input}>
                    <textarea onChange={updatePostChangeText}
                        ref={newP}
                        className={q.textarea}
                        value={props.newPostTexts} 
                        placeholder='New post!'/>
                </div>
                <div className={q.buttons}>
                    <button onClick={addTextPost}>Add post</button>
                </div>
            </div>
            <div className={q.scrool}>
                {mapPosts}
            </div>
        </div>)
}

export default PostsBlock;