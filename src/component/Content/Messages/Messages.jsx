import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import q from './Messages.module.css';
import MessagesText from './MessagesText/MessagesText';
import NameMessage from './NameMessage/NameMessage'


const Messages = (props) => {
  debugger
  let mapMessagesName = props.nameMessage.messagesPage.userNameMessage.map(u => <NameMessage name={u.name} id={u.id} />)
  return (
    <div className={q.messagesGrid}>
      <div className={q.nameUsers}>
        {mapMessagesName}
      </div>
      <div className={q.textM}>
        <MessagesText textMessages={props.nameMessage.messagesPage} dispatch={props.dispatch} />
      </div>
    </div>
  )
}

export default Messages; 