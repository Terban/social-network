import React from "react";
import {addNewMessageAC, updateNewMessageAC} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    const state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addNewMessageAC())
    }
    const updateNewMessage = (newMessageText) => {
        props.store.dispatch(updateNewMessageAC(newMessageText))
    }
    return (
        <Dialogs messagesPage={state.messagesPage} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
    )
}

export default DialogsContainer;