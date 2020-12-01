import React from 'react';
import { actionNewMessagesClick, actionUpdateMessage } from '../../../../redux/state';
import q from './MessagesText.module.css';

const MessagesText = (props) => {

  let inputPost = React.createRef();
  debugger
let mapMessage = props.textMessages.messageText.map(w => <p className={q.message}>{w}</p>)

  let newMessagesClick = () => {
    props.dispatchMessage(actionNewMessagesClick)
  }

  let updateText = () => {
    let text = inputPost.current.value;
    props.dispatchMessage(actionUpdateMessage(text))
  }

  return (
    <div className={q.minW}>
      {mapMessage}
      <textarea ref={inputPost} onChange={updateText} value={props.textMessages.textMessage} />
      <button onClick={newMessagesClick}>Send message</button>
    </div>
  )
}

export default MessagesText;