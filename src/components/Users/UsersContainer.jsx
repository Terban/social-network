import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
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
                       isFetching={this.props.isFetching}/>
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
    })


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUserCount,
    toggleIsFetching
})(UsersContainer)