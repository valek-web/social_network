import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import q from './Messages.module.css';
import MessagesText from './MessagesText/MessagesText';
import NameMessage from './NameMessage/NameMessage'


const Messages = (props) => {
  debugger
  let mapMessagesName = props.nameMessage.messagesPage.userNameMessage.map(u => <NameMessage name={u.name} id={u.id} />)
  return (
    <div className={q.mess}>
      <div className={q.textM}>
        <MessagesText textMessages={props.nameMessage.messagesPage} dispatchMessage={props.dispatchMessage} />
      </div>
      <div className={q.nameM}>
        {
          mapMessagesName
        }
      </div>
    </div>
  )
}

export default Messages; 