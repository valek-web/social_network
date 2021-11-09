import React from 'react'
import w from './Messages.module.css'
import NameFrends from './NameFrends/NameFrends'
import MessagesBlockConteiner from './MessagesBlog/MessagesBlockConteiner'

const Messages = React.memo(props => {
    return (
        <div className={w.box}>
            <div className={w.nameFrends}>
                <NameFrends />
            </div>
            <div className={w.messagesBlock}>
                <MessagesBlockConteiner />
            </div>
        </div>
    )
})

export default Messages
