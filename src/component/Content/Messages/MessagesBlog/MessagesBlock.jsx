import React from 'react'
import w from './MessagesBlock.module.css'
import MessagesText from './MessageText/MessageText'
import NewMessage from './NewMessage/NewMessage'

const MessagesBlock = React.memo(props => {
    return (
        <div>
            <div className={w.box_message}>
                <MessagesText message={props.messageMap} />
            </div>
            <div className={w.new_message}>
                <NewMessage
                    onSubmit={props.onAddMessage}
                    deleteError={props.deleteErrorChange}
                />
            </div>
        </div>
    )
})

export default MessagesBlock
