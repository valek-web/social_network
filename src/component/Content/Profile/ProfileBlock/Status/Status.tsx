import React, { useState, useEffect } from 'react'

type propsType = {
    status: string,
    onSetStatusTC: (status: string) => void
}

const Status: React.FC<propsType> = React.memo((props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e: any) => {
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
            props.onSetStatusTC(status)
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
})

export default Status
