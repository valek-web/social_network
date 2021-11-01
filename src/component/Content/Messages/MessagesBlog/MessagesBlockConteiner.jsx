import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    actionNewMessagesClick,
    actionUpdateMessage,
} from '../../../../redux/reducer/dialogs_reducer'
import { AuthRedirect } from '../../../hoc/AuthRedirect'
import MessagesBlock from './MessagesBlock'

let mapStateToProps = state => {
    return {
        messageMap: state.messagesPage.messageText,
        textValue: state.messagesPage.textNewMessage,
        auth: state.differentPage.login,
    }
}

let mapDispacthToProps = dispatch => {
    return {
        updateTextarea: text => {
            dispatch(actionUpdateMessage(text))
        },
        addMessage: () => {
            dispatch(actionNewMessagesClick())
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispacthToProps),
    AuthRedirect
)(MessagesBlock)
