import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <main className='main'>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="dialogs" element={<Dialogs/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Settings/>}/>
                        <Route path="*" element={<Profile/>}/>
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default App;