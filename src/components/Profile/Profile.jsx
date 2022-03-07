import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div className={s.screen}>
                <img
                    src="https://user-images.githubusercontent.com/88069082/149702536-10902d67-e4b2-4d4d-89bf-097a04286e93.jpg"
                    alt=""/>
            </div>
            <div className={s.profile}>
                <div className={s.avatar}>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png"
                        alt=""/>
                </div>
                <div className={s.info}>
                    <div className={s.userName}>Terban I.</div>
                    <div className={s.description}>
                        <div className={s.birth}>Date of Birth: 2 August</div>
                        <div className={s.city}>City: Kiev</div>
                        <div className={s.education}>Education: UzNU'13</div>
                    </div>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;