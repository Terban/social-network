import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, setCurrentPage, setTotalUserCount, setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            })
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, currentPage)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                       users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching} followingInProgress={this.props.followingInProgress}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}/>
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
    follow, unfollow, setUsers, setCurrentPage, setTotalUserCount,
    toggleIsFetching, toggleFollowingInProgress
})(UsersContainer)