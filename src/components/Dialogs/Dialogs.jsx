import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {
    const dialogsItems = props.messagesPage.dialogs.map(dialog => <Dialog id={dialog.id} avatar={dialog.avatar}
                                                                          name={dialog.name}/>)
    const messagesItems = props.messagesPage.messages.map(message => <Message avatar={message.avatar}
                                                                              name={message.name}
                                                                              message={message.message}/>)
    let newMessageRef = React.createRef()
    const addMessage = () => {
        const text = newMessageRef.current.value
        alert(text)
    }
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    {dialogsItems}
                </div>
                <div className={s.messages}>
                    {messagesItems}
                    <div className={s.newMessage}>
                        <textarea ref={newMessageRef} className={s.newMessageText} name="newMessage" id=""
                                  placeholder='your message...'></textarea>
                        <button onClick={addMessage} className={s.send}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;