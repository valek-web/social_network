import React from 'react'
import w from './Post.module.css'

const Posts = (props) => {
    return (
        <div className={w.post}>
            <div className={w.ava}>
                <img src={props.onImgAva} alt='' />
            </div>
            <div className={w.info}>
                <p>{props.text}</p>
                <div className={w.like}>{props.like}</div>
            </div>
        </div>
    )
}

export default Posts
