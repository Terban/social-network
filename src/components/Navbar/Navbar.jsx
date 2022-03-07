import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
            <nav className={s.navbar}>
                <ul className={s.navList}>
                    <li className={s.navListItem}>
                        <NavLink to='/profile' className={s.navListLink}>Profile</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/dialogs' className={s.navListLink}>Messages</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/news' className={s.navListLink}>News</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/music' className={s.navListLink}>Music</NavLink>
                    </li>
                    <li className={s.navListItem}>
                        <NavLink to='/settings' className={s.navListLink}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar;