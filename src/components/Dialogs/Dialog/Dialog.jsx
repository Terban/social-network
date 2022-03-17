import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <NavLink to={'/dialogs/' + props.id}
                 className={s.dialog} activeClassName={s.active}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            {props.name}
        </NavLink>
    )
}

export default Dialog;