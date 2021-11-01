import React from 'react'

class Status extends React.Component {
    state = {
        editMode: false,
    }

    activeEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    onStatusChange = e => {
        alert(e.currentTarget.value)
    }

    render = () => {
        debugger
        return (
            <div>
                {this.state.editMode ? (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            value={this.props.status}
                            onBlur={() => {
                                this.deactiveEditMode()
                            }}
                            autoFocus={true}
                        />
                    </div>
                ) : (
                    <div>
                        <span
                            onDoubleClick={() => {
                                this.activeEditMode()
                            }}
                        >
                            {this.props.status}
                        </span>
                    </div>
                )}
            </div>
        )
    }
}

export default Status
