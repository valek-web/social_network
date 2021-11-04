import React from 'react'
import { connect } from 'react-redux'
import { actionAddPost } from '../../../../redux/reducer/profile_reducer'
import PostsBlock from './PostsBlock'

class PostsConteiner extends React.Component {
    addTextPost = text => {
        this.props.addTextPost(text.textPost)
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

let mapDispatchToProps = dispatch => {
    return {
        addTextPost: text => {
            dispatch(actionAddPost(text))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsConteiner)
