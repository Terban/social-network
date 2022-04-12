import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img
                    src="https://cdn2.iconfinder.com/data/icons/scenarium-vol-1-2/128/021_team_work_contacts_social_friends_messages_workplace-128.png"
                    alt=""/>
            </div>
            {props.isAuth ?
                <div className={s.login}>
                    <div className={s.loginName}>{props.login}</div>
                    <button onClick={() => props.logout()} className={s.logout}>Logout</button>
                </div> :
                <NavLink className={s.login} to="/login">Login</NavLink>}
        </header>
    )
}

export default Header;