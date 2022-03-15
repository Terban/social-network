import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <main className='main'>
                <NavbarContainer/>
                <div className='content'>
                    <Routes>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default App;