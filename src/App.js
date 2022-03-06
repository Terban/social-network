import './App.css';

function App() {
    return (
        <div className='wrapper'>
            <header className='header'>
                <div className='logo'>
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/scenarium-vol-1-2/128/021_team_work_contacts_social_friends_messages_workplace-128.png"
                        alt=""/>
                </div>
            </header>
            <main className='main'>
                <nav className='navbar'>
                    <ul className='navList'>
                        <li className='navListItem'>Profile</li>
                        <li className='navListItem'>Messages</li>
                        <li className='navListItem'>News</li>
                        <li className='navListItem'>Music</li>
                        <li className='navListItem'>Settings</li>
                    </ul>
                </nav>
                <div className='content'>
                    <div className='screen'>
                        <img
                            src="https://user-images.githubusercontent.com/88069082/149702536-10902d67-e4b2-4d4d-89bf-097a04286e93.jpg"
                            alt=""/>
                    </div>
                    <div className='profile'>
                        <div className='avatar'>
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png"
                                alt=""/>
                        </div>
                        <div className='info'>
                            <div className='userName'>Terban I.</div>
                            <div className='description'>
                                <div className='birth'>Date of Birth: 2 August</div>
                                <div className='city'>City: Kiev</div>
                                <div className='education'>Education: UzNU'13</div>
                            </div>
                        </div>
                    </div>
                    <div className='posts'>
                        <div className='postsTitle'>My posts</div>
                        <div className='newPost'>
                            <textarea className='newPostText' name="newPost" id=""
                                      placeholder='your news...'></textarea>
                            <button className='send'>Send</button>
                        </div>
                        <div className='postsItems'>
                            <div className='post'>
                                <div className='userAvatar'>
                                    <img
                                        src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png'
                                        alt=""/>
                                </div>
                                <div className='postText'>Hello world!</div>
                            </div>
                            <div className='post'>
                                <div className='userAvatar'>
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU'
                                        alt=""/>
                                </div>
                                <div className='postText'>How are you?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;