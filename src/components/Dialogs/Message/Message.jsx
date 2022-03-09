import s from './Message.module.css'

function Message(props) {
    return (
        <div className={s.message}>
            <div className={s.user}>
                <div className={s.avatar}>
                    <img
                        src={props.avatar} alt=""/>
                </div>
                <div className={s.userName}>{props.name}</div>
            </div>
            <div className={s.messageText}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;