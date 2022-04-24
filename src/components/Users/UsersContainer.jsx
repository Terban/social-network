import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers, unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    selectCurrentPage, selectFollowingInProgress,
    selectIsFetching,
    selectPageSize,
    selectTotalUserCount,
    reselectUsers
} from "../../redux/users-selectors";

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
    users: reselectUsers(state),
    pageSize: selectPageSize(state),
    currentPage: selectCurrentPage(state),
    totalUserCount: selectTotalUserCount(state),
    isFetching: selectIsFetching(state),
    followingInProgress: selectFollowingInProgress(state)
})


export default compose(
    connect(mapStateToProps, {getUsers, unfollow, follow}),
    withAuthRedirect
)(UsersContainer)