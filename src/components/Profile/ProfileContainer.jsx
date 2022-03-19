import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 21855
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
)(ProfileContainer)