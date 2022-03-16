import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


function Navbar(props) {
    const friends = props.navbar.friends.map(friend => <Friend key={friend.id} avatar={friend.avatar}
                                                               name={friend.name}/>)
    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navListItem}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/users' activeClassName={s.active}>Find users</NavLink>
                </li>
                <li className={s.navListItem}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
            <div className={s.friends}>
                <div className={s.title}>Friends</div>
                <div className={s.friendsBlock}>
                    {friends}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;