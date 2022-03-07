import s from './Dialogs.module.css'

function Dialogs() {
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    <div className={s.dialog}>Illia</div>
                    <div className={s.dialog + ' ' + s.active}>Kolja</div>
                    <div className={s.dialog}>Wasil</div>
                    <div className={s.dialog}>Sveta</div>
                    <div className={s.dialog}>Galina</div>
                    <div className={s.dialog}>Ivan</div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt=""/>
                            </div>
                            <div className={s.userName}>Kolja</div>
                        </div>
                        <div className={s.messageText}>
                            Hi there! How are you?
                        </div>
                    </div>
                    <div className={s.message}>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" alt=""/>
                            </div>
                            <div className={s.userName}>Me</div>
                        </div>
                        <div className={s.messageText}>
                            Normally. And how are you?
                        </div>
                    </div>
                    <div className={s.message}>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt=""/>
                            </div>
                            <div className={s.userName}>Kolja</div>
                        </div>
                        <div className={s.messageText}>
                            The same. I'll be there soon
                        </div>
                    </div>
                    <div className={s.message}>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" alt=""/>
                            </div>
                            <div className={s.userName}>Me</div>
                        </div>
                        <div className={s.messageText}>
                            We are waiting
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;