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
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
                    <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
                    <Dialog id={dialogsData[2].id} name={dialogsData[2].name}/>
                    <Dialog id={dialogsData[3].id} name={dialogsData[3].name}/>
                    <Dialog id={dialogsData[4].id} name={dialogsData[4].name}/>
                    <Dialog id={dialogsData[5].id} name={dialogsData[5].name}/>
                </div>
                <div className={s.messages}>
                    <Message
                        avatar={messagesData[0].avatar}
                        name={messagesData[0].name} message={messagesData[0].message}/>
                    <Message
                        avatar={messagesData[1].avatar}
                        name={messagesData[1].name} message={messagesData[1].message}/>
                    <Message
                        avatar={messagesData[2].avatar}
                        name={messagesData[2].name} message={messagesData[2].message}/>
                    <Message
                        avatar={messagesData[3].avatar}
                        name={messagesData[3].name} message={messagesData[3].message}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;