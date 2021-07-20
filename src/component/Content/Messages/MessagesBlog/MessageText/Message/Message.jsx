import React from 'react'
import w from './Message.module.css'

const Message = (props) => {
    return(
    <div className={w.message}>
        <p>{props.onMessage}</p>
    </div>)
}

export default Message;