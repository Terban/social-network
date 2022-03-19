import React from "react";
import s from "./Status.module.css";

class Status extends React.Component {
    state = {
        editMode: false,
        status: "My status"
    }

    activateEditMode = () => this.setState({editMode: true})
    deactivateEditMode = () => this.setState({editMode: false})

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <label onDoubleClick={this.activateEditMode} htmlFor="status">{this.state.status}</label>}
                {this.state.editMode &&
                    <input onBlur={this.deactivateEditMode} autoFocus={true} id="status" type="text"
                           value={this.state.status}/>}
            </div>
        )
    }
}

export default Status