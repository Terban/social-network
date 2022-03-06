import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.content}>
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
            <div className={s.posts}>
                <div className={s.postsTitle}>My posts</div>
                <div className={s.newPost}>
                            <textarea className={s.newPostText} name="newPost" id=""
                                      placeholder='your news...'></textarea>
                    <button className={s.send}>Send</button>
                </div>
                <div className={s.postsItems}>
                    <div className={s.post}>
                        <div className={s.userAvatar}>
                            <img
                                src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png'
                                alt=""/>
                        </div>
                        <div className={s.postText}>Hello world!</div>
                    </div>
                    <div className={s.post}>
                        <div className={s.userAvatar}>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU'
                                alt=""/>
                        </div>
                        <div className={s.postText}>How are you?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;