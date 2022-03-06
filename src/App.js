import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <main className='main'>
                <Navbar/>
                <Profile/>
            </main>
        </div>
    )
}

export default App;