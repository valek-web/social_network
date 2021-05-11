import React from 'react';
import { actionNewMessagesClick, actionUpdateMessage } from '../../../../redux/dialogs_reducer';
import q from './MessagesText.module.css';
import MessagesText from './MessagesText';

const MessagesTextConteiner = (props) => {
    let mapMessage = props.textMessages.messageText.map(w => <p className={q.message}>{w}</p>)

    let newMessagesClick = () => {
        props.dispatch(actionNewMessagesClick)
    }

    let updateText = (text) => {
        props.dispatch(actionUpdateMessage(text))
    }

    let valueMessageText = props.textMessages.textMessage; 

    return (
        <MessagesText mapMessage={mapMessage} newMessagesClick={newMessagesClick} updateText={updateText} valueMessageText={valueMessageText}/>
    )
}

export default MessagesTextConteiner;