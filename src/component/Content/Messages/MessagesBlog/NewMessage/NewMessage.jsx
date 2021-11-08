import React from 'react'
import { Field, reduxForm } from 'redux-form'
import w from './NewMessage.module.css'

const NewMessage = props => {
    return (
        <div>
            {!props.error ? '' : <div className={w.error}>{props.error}</div>}
            <form onSubmit={props.handleSubmit} className={w.box_text}>
                <Field
                    name='newMessage'
                    component='textarea'
                    className={w.textarea}
                    placeholder='Write a message...'
                    onChange={props.deleteError}
                />
                <div className={w.button}>
                    <button>Send message!</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({ form: 'message' })(NewMessage)
