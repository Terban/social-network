import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 21855
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})





export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))