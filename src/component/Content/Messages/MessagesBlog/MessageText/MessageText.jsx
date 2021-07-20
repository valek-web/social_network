import React from 'react'
import Message from './Message/Message'
import w from './MessageText.module.css'

const MessagesText = (props) => {
    let mapMessage = props.message.map(i => {
        return(
            <Message onMessage={i.textMessage} key={i.id}/>
        )
    })

    return(
        <div className={w.hiden}>
            {mapMessage}
        </div>
    )
}

export default MessagesText;