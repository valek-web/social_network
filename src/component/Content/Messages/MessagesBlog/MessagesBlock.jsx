import React from 'react'
import w from './MessagesBlock.module.css'
import MessagesText from './MessageText/MessageText'
import NewMessage from './NewMessage/NewMessage'

const MessagesBlock = props => {
    return (
        <div>
            <div className={w.box_message}>
                <MessagesText message={props.messageMap} />
            </div>
            <div className={w.new_message}>
                <NewMessage onSubmit={props.onAddMessage} />
            </div>
        </div>
    )
}

export default MessagesBlock
