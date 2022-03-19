import './App.css';
import {Route,} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <div className='wrapper'>
            <HeaderContainer/>
            <main className='main'>
                <NavbarContainer/>
                <div className='content'>
                        <Route path="/profile/:userId?" component={ProfileContainer}/>
                        <Route path="/dialogs"
                               component={DialogsContainer}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/login" component={Login}/>
                </div>
            </main>
        </div>
    )
}

export default App;