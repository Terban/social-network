import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {getInitialization} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component {
    componentDidMount() {
        this.props.getInitialization()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='wrapper'>
                <HeaderContainer/>
                <main className='main'>
                    <NavbarContainer/>
                    <div className='content'>
                        <Switch>
                            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/users" render={withSuspense(UsersContainer)}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Redirect from="/" to="/profile" /> внутри Switch
                            <Route path="*" render={() => <div>404 Not Found</div>}/>
                        </Switch>
                    </div>
                </main>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {getInitialization})(App);