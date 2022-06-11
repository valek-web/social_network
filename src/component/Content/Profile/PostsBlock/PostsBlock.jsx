import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Posts from './Post/Post'
import style from './PostsBlock.module.css'

const PostsBlock = (props) => {
    let mapPosts = props.posts.map((i) => {
        return (
            <Posts
                onProfile={props.onProfile}
                text={i.message}
                key={i.id}
                like={i.like}
            />
        )
    })
    return (
        <>
            {!props.error ? (
                ''
            ) : (
                <div className={style.posts__error}>{props.error}</div>
            )}
            <form onSubmit={props.handleSubmit} className={style.posts__form}>
                <div className={style.posts__input}>
                    <Field
                        className={style.posts__textarea}
                        value={props.newPostTexts}
                        placeholder='New post!'
                        component='textarea'
                        name='textPost'
                        onChange={props.deleteErrorChangeTC}
                    />
                </div>
                <button className='button'>Add post</button>
            </form>
            <div className={style.scrool}>{mapPosts}</div>
        </>
    )
}

export default reduxForm({ form: 'post' })(PostsBlock)
