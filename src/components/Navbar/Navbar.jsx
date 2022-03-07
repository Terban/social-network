import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <NavLink to='/profile' className={({isActive}) => (isActive ? s.active : '')}>Profile</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/dialogs' className={({isActive}) => (isActive ? s.active : '')}>Messages</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/news' className={({isActive}) => (isActive ? s.active : '')}>News</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/music' className={({isActive}) => (isActive ? s.active : '')}>Music</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/settings' className={({isActive}) => (isActive ? s.active : '')}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;