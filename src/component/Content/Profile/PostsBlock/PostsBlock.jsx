import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Posts from './Post/Post'
import q from './PostsBlock.module.css'

const PostsBlock = props => {
    let mapPosts = props.posts.map(i => {
        return (
            <Posts
                onImgAva={props.imgAva}
                text={i.message}
                key={i.id}
                like={i.like}
            />
        )
    })

    return (
        <div>
            <form onSubmit={props.handleSubmit} className={q.box}>
                <div className={q.input}>
                    <Field
                        className={q.textarea}
                        value={props.newPostTexts}
                        placeholder='New post!'
                        component='textarea'
                        name='textPost'
                    />
                </div>
                <div className={q.buttons}>
                    <button>Add post</button>
                </div>
            </form>
            <div className={q.scrool}>{mapPosts}</div>
        </div>
    )
}

export default reduxForm({ form: 'post' })(PostsBlock)
