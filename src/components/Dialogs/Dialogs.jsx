import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.container}>
                <div className={s.dialogs}>
                    <NavLink to='/dialogs/1'
                             className={({isActive}) => (isActive ? `${s.dialog} ${s.active}` : s.dialog)}>Illia
                    </NavLink>
                    <NavLink to='/dialogs/2'
                             className={({isActive}) => (isActive ? `${s.dialog} ${s.active}` : s.dialog)}>Kolja
                    </NavLink>
                    <NavLink to='/dialogs/3'
                             className={({isActive}) => (isActive ? `${s.dialog} ${s.active}` : s.dialog)}>Wasil
                    </NavLink>
                    <NavLink to='/dialogs/4'
                             className={({isActive}) => (isActive ? `${s.dialog} ${s.active}` : s.dialog)}>Sveta
                    </NavLink>
                    <NavLink to='/dialogs/5'
                             className={({isActive}) => (isActive ? `${s.dialog} ${s.active}` : s.dialog)}>Galina
                    </NavLink>
                    <NavLink to='/dialogs/6'
                             className={({isActive}) => (isActive ? `${s.dialog} ${s.active}` : s.dialog)}>Ivan
                    </NavLink>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>
                        <div className={s.user}>
                            <div className={s.avatar}>
                                <img
                                    src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                                    alt=""/>
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
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png"
                                     alt=""/>
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
                                <img
                                    src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                                    alt=""/>
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
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png"
                                     alt=""/>
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