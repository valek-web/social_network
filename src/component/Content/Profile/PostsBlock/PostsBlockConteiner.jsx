import React from 'react'
import { connect } from 'react-redux'
import { thunkCreatorProfile } from '../../../../redux/reducer/profile_reducer'
import PostsBlock from './PostsBlock'

class PostsConteiner extends React.Component {
    addTextPost = valueNewPost => {
        this.props.addTextPostTC(valueNewPost.textPost)
    }

    render = () => {
        return <PostsBlock onSubmit={this.addTextPost} {...this.props} />
    }
}

let mapStateToProps = state => {
    return {
        newPostTexts: state.profilePage.newPostText,
        posts: state.profilePage.post,
        imgAva: state.differentPage.imgAva,
    }
}

export default connect(mapStateToProps, { ...thunkCreatorProfile })(
    PostsConteiner
)
