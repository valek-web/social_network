import React from 'react'

class Status extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            localStatus: !this.props.status ? 'No status' : this.props.status,
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                localStatus: this.props.status,
            })
        }
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
        if (this.state.localStatus !== this.props.status) {
            this.props.onSetStatus(this.state.localStatus)
        }
    }

    onStatusChange = e => {
        if (e.currentTarget.value !== this.state.localStatus) {
            this.setState({
                localStatus: e.currentTarget.value,
            })
        }
    }

    render = () => {
        return (
            <div>
                {this.state.editMode ? (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            value={this.state.localStatus}
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
