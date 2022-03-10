import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";

function Dialogs(props) {
    const dialogsItems = props.messagesPage.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id}
                                                                          avatar={dialog.avatar}
                                                                          name={dialog.name}/>)
    const messagesItems = props.messagesPage.messages.map(message => <Message key={message.id} avatar={message.avatar}
                                                                              name={message.name}
                                                                              message={message.message}/>)
    let newMessageRef = React.createRef()
    const addMessage = () => {
        props.addNewMessage()
    }
    const onMessageChange = () => {
        const text = newMessageRef.current.value
        props.updateNewMessageText(text)
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
                        <textarea onChange={onMessageChange} ref={newMessageRef} className={s.newMessageText}
                                  name="newMessage" id=""
                                  placeholder='your message...' value={props.messagesPage.newMessageText}/>
                        <button onClick={addMessage} className={s.send}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;