import React from 'react'
import { connect } from 'react-redux'
import { thunkCreatorProfile } from '../../../../redux/reducer/profile_reducer'
import PostsBlock from './PostsBlock'

const PostsConteiner = React.memo((props) => {
    const addTextPost = (valueNewPost) => {
        props.addTextPostTC(valueNewPost.textPost)
    }
    return <PostsBlock onSubmit={addTextPost} {...props} />
})

let mapStateToProps = (state) => {
    return {
        newPostTexts: state.profilePage.newPostText,
        posts: state.profilePage.post,
        imgAva: state.differentPage.imgAva,
        onProfile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, { ...thunkCreatorProfile })(
    PostsConteiner
)
