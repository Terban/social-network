import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers, unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(this.props.pageSize, currentPage)
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching} followingInProgress={this.props.followingInProgress}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}/>
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUserCount: state.usersPage.totalUserCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})


export default connect(mapStateToProps, {
    getUsers, unfollow, follow
})(UsersContainer)