import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs() {
    const dialogsData = [
        {id: 1, name: 'Illia'},
        {id: 2, name: 'Kolja'},
        {id: 3, name: 'Wasil'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Galina'},
        {id: 6, name: 'Ivan'}
    ]
    const messagesData = [
        {
            id: 1,
            avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
            name: 'Kolja',
            message: 'Hi there! How are you?'
        },
        {
            id: 2,
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
            name: 'Me',
            message: 'Normally. And how are you?'
        },
        {
            id: 3,
            avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
            name: 'Kolja',
            message: 'The same. I\'ll be there soon'
        },
        {
            id: 4,
            avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
            name: 'Me',
            message: 'We are waiting'
        },
    ]
    const dialogsItems = dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>)
    const messagesItems = messagesData.map(message => <Message avatar={message.avatar}
                                                               name={message.name} message={message.message}/>)
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    {dialogsItems}
                </div>
                <div className={s.messages}>
                    {messagesItems}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;