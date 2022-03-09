import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <NavLink to={'/dialogs/' + props.id}
                 className={({isActive}) => (isActive ? `${s.dialog} ${s.active}` : s.dialog)}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            {props.name}
        </NavLink>
    )
}

export default Dialog;