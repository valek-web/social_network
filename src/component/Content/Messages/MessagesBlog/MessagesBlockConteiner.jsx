import React from 'react'
import { connect } from 'react-redux'
import { actionNewMessagesClick, actionUpdateMessage } from '../../../../redux/reducer/dialogs_reducer';
import MessagesBlock from './MessagesBlock';

let mapStateToProps = (state) => {

    return(
        {
        messageMap: state.messagesPage.messageText,
        textValue: state.messagesPage.textNewMessage
    })
}

let mapDispacthToProps = (dispatch) => {
    return({
        updateTextarea: (text) => {
            dispatch(actionUpdateMessage(text))
        },
        addMessage: () => {
            dispatch(actionNewMessagesClick())
        }
    })
}

const MessagesBlockConteiner = connect(mapStateToProps, mapDispacthToProps)(MessagesBlock)

export default MessagesBlockConteiner;