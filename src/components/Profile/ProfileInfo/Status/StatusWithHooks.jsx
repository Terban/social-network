import React, {useEffect, useState} from "react";
import s from "./Status.module.css";

const StatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.status}>
            {!editMode && <label onDoubleClick={activateEditMode}
                                 htmlFor="status">{props.status ? props.status : "No status"}</label>}
            {editMode &&
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} id="status" type="text"
                       value={status}/>}
        </div>
    )
}

export default StatusWithHooks