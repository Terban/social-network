import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = (e) => {
        this.setState({editMode: false})
        this.props.updateStatus(e.currentTarget.value)
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <label onDoubleClick={this.activateEditMode}
                           htmlFor="status">{this.props.status ? this.props.status : "No status"}</label>}
                {this.state.editMode &&
                    <input onBlur={this.deactivateEditMode} autoFocus={true} id="status" type="text"
                           onChange={this.onStatusChange} value={this.state.status}/>}
            </div>
        )
    }
}

export default Status