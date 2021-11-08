import { connect } from 'react-redux'
import { compose } from 'redux'
import { actionNewMessagesClick } from '../../../../redux/reducer/dialogs_reducer'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import MessagesBlock from './MessagesBlock'
import React from 'react'
import {
    getLogin,
    getMessageText,
    getTextNewMessage,
} from '../../../../redux/selects'

class MessagesBlockContainer extends React.Component {
    addMessage = value => {
        this.props.addMessage(value.newMessage)
    }

    render = () => {
        return <MessagesBlock {...this.props} onAddMessage={this.addMessage} />
    }
}

let mapStateToProps = state => {
    return {
        messageMap: getMessageText(state),
        textValue: getTextNewMessage(state),
        auth: getLogin(state),
    }
}

let mapDispacthToProps = dispatch => {
    return {
        addMessage: value => {
            dispatch(actionNewMessagesClick(value))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispacthToProps),
    AuthRedirect
)(MessagesBlockContainer)
