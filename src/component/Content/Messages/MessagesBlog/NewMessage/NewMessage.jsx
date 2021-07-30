import React from "react";
import w from "./NewMessage.module.css";

const NewMessage = (props) => {
  const inputMessage = React.createRef();

  let valueText = props.onValueText;

  let updateTextMessage = () => {
    let text = inputMessage.current.value;
    props.updateTextareaText(text);
  };

  let newMessageAdded = () => {
    props.onAddMessage();
  };

  return (
    <div className={w.box_text}>
      <div className={w.box_textarea}>
        <textarea
          className={w.textarea}
          onChange={updateTextMessage}
          value={valueText}
          ref={inputMessage}
          placeholder="Write a message..."
        ></textarea>
      </div>
      <div className={w.button}>
        <button onClick={newMessageAdded}>Send message!</button>
      </div>
    </div>
  );
};

export default NewMessage;
