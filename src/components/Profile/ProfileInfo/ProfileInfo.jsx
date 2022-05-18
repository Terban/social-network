import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import unknown from "../../../assets/images/unknown.webp"
import StatusWithHooks from "./Status/StatusWithHooks";

function ProfileInfo(props) {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) props.savePhoto(e.target.files[0])
    }

    if (!props.profile) return <Preloader/>
    return (
        <div>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large : unknown}
                        alt=""/>
                    {props.isOwner && <input onChange={onMainPhotoSelected} type="file"/>}
                </div>
                <div className={s.info}>
                    <div className={s.userName}>{props.profile.fullName}</div>

                    <StatusWithHooks {...props}/>

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