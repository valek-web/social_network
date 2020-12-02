import React from 'react';
import { actionNewMessagesClick, actionUpdateMessage } from '../../../../redux/state';
import q from './MessagesText.module.css';

const MessagesText = (props) => {

  let inputPost = React.createRef();
  debugger
  let mapMessage = props.textMessages.messageText.map(w => <p className={q.message}>{w}</p>)

  let newMessagesClick = () => {
    props.dispatch(actionNewMessagesClick)
  }

  let updateText = () => {
    let text = inputPost.current.value;
    props.dispatch(actionUpdateMessage(text))
  }

  return (
    <div className={q.textMessage}>
      <div>
      {mapMessage}
      </div>
      <div className={q.textarea}>
      <textarea ref={inputPost} onChange={updateText}
        value={props.textMessages.textMessage}
        placeholder='New messages!' />
      <button onClick={newMessagesClick}>Send message</button>
      </div>
    </div>
  )
}

export default MessagesText;