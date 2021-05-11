import React from 'react';
import { actionNewMessagesClick, actionUpdateMessage } from '../../../../redux/dialogs_reducer';
import q from './MessagesText.module.css';

const MessagesText = (props) => {
  let inputPost = React.createRef();
  
  let mapMessage = props.mapMessage;

  let newMessagesClick = () => {
    props.newMessagesClick()
  }

  let updateText = () => {
    let text = inputPost.current.value;
    props.updateText(text);
  }

  let valueText = props.valueMessageText;

  return (
    <div className={q.textMessage}>
      <div>
        {mapMessage}
      </div>
      <div className={q.textarea}>
        <textarea ref={inputPost} onChange={updateText}
          value={valueText}
          placeholder='New messages!' />
        <button onClick={newMessagesClick}>Send message</button>
      </div>
    </div>
  )
}

export default MessagesText;