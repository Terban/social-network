import s from  './Navbar.module.css'

function Navbar() {
    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <a className={`${s.navListLink} ${s.active}`}>Profile</a>
                </li>
                <li className={s.navListItem}>
                    <a className={s.navListLink}>Messages</a>
                </li>
                <li className={s.navListItem}>
                    <a className={s.navListLink}>News</a>
                </li>
                <li className={s.navListItem}>
                    <a className={s.navListLink}>Music</a>
                </li>
                <li className={s.navListItem}>
                    <a className={s.navListLink}>Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;