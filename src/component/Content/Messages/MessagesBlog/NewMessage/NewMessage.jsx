import React from 'react'
import { Field, reduxForm } from 'redux-form'
import w from './NewMessage.module.css'

const NewMessage = props => {
    debugger
    // let newMessageAdded = () => {
    //     props.onAddMessage()
    // }
    return (
        <div>
            <form onSubmit={props.handleSubmit} className={w.box_text}>
                <Field
                    name='newMessage'
                    component='textarea'
                    className={w.textarea}
                    placeholder='Write a message...'
                />
                <div className={w.button}>
                    <button>Send message!</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({ form: 'message' })(NewMessage)
