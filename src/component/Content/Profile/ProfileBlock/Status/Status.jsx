import React, { useState } from 'react'

const Status = props => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onStatusChange = e => {
        if (e.currentTarget.value !== status) {
            setStatus(e.currentTarget.value)
        }
    }

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deactiveEditMode = () => {
        setEditMode(false)
        if (status !== props.status) {
            props.onSetStatus(status)
        }
    }

    return (
        <div>
            {editMode ? (
                <div>
                    <input
                        onChange={onStatusChange}
                        value={status}
                        onBlur={() => {
                            deactiveEditMode()
                        }}
                        autoFocus={true}
                    />
                </div>
            ) : (
                <div>
                    <span
                        onDoubleClick={() => {
                            activeEditMode()
                        }}
                    >
                        {props.status}
                    </span>
                </div>
            )}
        </div>
    )
}

export default Status
