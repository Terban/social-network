import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
            <nav className={s.navbar}>
                <ul className={s.navList}>
                    <li className={s.navListItem}>
                        <NavLink to='/profile' className={s.navLink}>Profile</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/dialogs' className={s.navLink}>Messages</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/news' className={s.navLink}>News</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/music' className={s.navLink}>Music</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/settings' className={s.navLink}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar;