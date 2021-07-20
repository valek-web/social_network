import React from 'react'
import w from './MessagesBlock.module.css'
import MessagesText from './MessageText/MessageText'
import NewMessage from './NewMessage/NewMessage'

const MessagesBlock = (props) => {
    return(
        <div>
            <div className={w.box_message}>
                <MessagesText message={props.messageMap}/>
            </div>
            <div className={w.new_message}>
                <NewMessage  onValueText={props.textValue} updateTextareaText={props.updateTextarea} onAddMessage={props.addMessage}/>
            </div>
        </div>
    )
}

export default MessagesBlock;