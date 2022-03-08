import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    <Dialog id='1' name='Illia'/>
                    <Dialog id='2' name='Kolja'/>
                    <Dialog id='3' name='Wasil'/>
                    <Dialog id='4' name='Sveta'/>
                    <Dialog id='5' name='Galina'/>
                    <Dialog id='6' name='Ivan'/>
                </div>
                <div className={s.messages}>
                    <Message
                        avatar='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
                        name='Kolja' message='Hi there! How are you?'/>
                    <Message
                        avatar='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png'
                        name='Me' message='Normally. And how are you?'/>
                    <Message
                        avatar='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
                        name='Kolja' message="The same. I'll be there soon"/>
                    <Message
                        avatar='https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png'
                        name='Me' message="We are waiting"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;