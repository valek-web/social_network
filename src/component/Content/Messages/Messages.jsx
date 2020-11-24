import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import q from './Messages.module.css';
import MessagesText from './MessagesText/MessagesText';
import NameMessage from './NameMessage/NameMessage'


const Messages = (props) => {
  let mapMessagesName = props.nameMess.messagesPage.map((u) => <NameMessage name={u.name} id={u.id} />)
  return (
    <BrowserRouter>
      <div className={q.mess}>
        <div className={q.textMesss}>
          <MessagesText/>
        </div>
        <div className={q.nameMesss}>
          {//mapMessagesName
          mapMessagesName
          }
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Messages; 