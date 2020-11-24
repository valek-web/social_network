import React from 'react';
import q from './MessagesText.module.css';

const MessagesText = (props) => {

  let inputPost = React.createRef();
  let newPostClick = () => {
      let text = inputPost.current.value;
      alert(text)
  }
  
    return (
      <div className={q.minW}>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
        <p>TExt</p>
        <textarea ref={inputPost}>///</textarea>
        <button onClick={newPostClick}>Otp</button>
      </div>
    )
  }

  export default MessagesText;