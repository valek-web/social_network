import React from 'react'
import style from './Post.module.css'

const Posts = (props) => {
    return (
        <div className={style.post}>
            <div className={style.post__ava}>
                <img
                    src={
                        !props.onProfile.photos.large
                            ? 'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png'
                            : props.onProfile.photos.large
                    }
                    alt=''
                />
            </div>
            <div className={style.post__info}>
                <p>{props.text}</p>
                <div className={style.post__like}>{props.like}</div>
            </div>
        </div>
    )
}

export default Posts
