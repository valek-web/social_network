import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    addMessagesTC,
    deleteErrorTC,
} from '../../../../redux/reducer/dialogs_reducer'
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
        this.props.addMessagesTC(value.newMessage)
    }

    render = () => {
        return (
            <MessagesBlock
                {...this.props}
                onAddMessage={this.addMessage}
                deleteErrorChange={this.props.deleteErrorTC}
            />
        )
    }
}

let mapStateToProps = state => {
    return {
        messageMap: getMessageText(state),
        textValue: getTextNewMessage(state),
        auth: getLogin(state),
    }
}
export default compose(
    connect(mapStateToProps, { addMessagesTC, deleteErrorTC }),
    AuthRedirect
)(MessagesBlockContainer)
