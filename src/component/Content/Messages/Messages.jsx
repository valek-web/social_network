import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import q from './Messages.module.css';
import NameMessage from './NameMessage/NameMessage'
import MessagesTextConteiner from './MessagesText/MessagesTextConteiner';


const Messages = (props) => {
  let mapMessagesName = props.nameMessage.messagesPage.userNameMessage.map(u => <NameMessage name={u.name} id={u.id} />)
  return (
    <div className={q.messagesGrid}>
      <div className={q.nameUsers}>
        {mapMessagesName}
      </div>
      <div className={q.textM}>
        <MessagesTextConteiner textMessages={props.nameMessage.messagesPage} dispatch={props.dispatch} />
      </div>
    </div>
  )
}

export default Messages;