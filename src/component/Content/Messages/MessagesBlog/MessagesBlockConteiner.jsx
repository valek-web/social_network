import { connect } from 'react-redux'
import { compose } from 'redux'
import { thunkCreatorDialogs } from '../../../../redux/reducer/dialogs_reducer'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import MessagesBlock from './MessagesBlock'
import React from 'react'
import {
    getLogin,
    getMessageText,
    getTextNewMessage,
} from '../../../../redux/selects'

const MessagesBlockContainer = React.memo((props) => {
    const addMessage = (value) => {
        this.props.addMessagesTC(value.newMessage)
    }
    return (
        <MessagesBlock
            {...props}
            onAddMessage={addMessage}
            deleteErrorChange={props.deleteErrorTC}
        />
    )
})

let mapStateToProps = (state) => {
    return {
        messageMap: getMessageText(state),
        textValue: getTextNewMessage(state),
        auth: getLogin(state),
    }
}
export default compose(
    connect(mapStateToProps, { ...thunkCreatorDialogs }),
    AuthRedirect
)(MessagesBlockContainer)
