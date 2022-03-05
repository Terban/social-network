import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    )
}

function Header() {
    return (
        <ul>
            <li>
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
                <a href="#">Link4</a>
            </li>
        </ul>
    )
}

function Technologies() {
    return (
        <ul>
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>react</li>
        </ul>
    )
}

export default App;