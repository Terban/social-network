import s from './Header.module.css'

function Header() {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img
                    src="https://cdn2.iconfinder.com/data/icons/scenarium-vol-1-2/128/021_team_work_contacts_social_friends_messages_workplace-128.png"
                    alt=""/>
            </div>
        </header>
    )
}

export default Header;