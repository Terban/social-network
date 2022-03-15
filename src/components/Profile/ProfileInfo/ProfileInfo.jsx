import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import unknown from "../../../assets/images/unknown.webp"

function ProfileInfo(props) {
    if(!props.profile) return <Preloader/>
    return (
        <div>
            <div className={s.screen}>
                <img
                    src={props.profile.photos.large ? props.profile.photos.large :
                        "https://user-images.githubusercontent.com/88069082/149702536-10902d67-e4b2-4d4d-89bf-097a04286e93.jpg"}
                    alt=""/>
            </div>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img
                        src={props.profile.photos.small ? props.profile.photos.small : unknown}
                        alt=""/>
                </div>
                <div className={s.info}>
                    <div className={s.userName}>{props.profile.fullName}</div>
                    <div className={s.description}>
                        <div className={s.birth}>{props.profile.lookingForAJob ? 'Ищу работу' : 'Работу не ищу'}</div>
                        <div className={s.city}>{props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;