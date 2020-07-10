import React from "react";
import {connect} from "react-redux";
import {
    follow, setCurrentPage, setIsFetching,
    setUsers, setTotalUsersCount, unFollow, setFollowingProgress
} from "../../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloder";
import {UsersAPI as usersAPI} from "../../api/api";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.setIsFetching (true);

       usersAPI.getUsers(this.props.currentPage, this.props.pageSize ).then(data => {
                this.props.setIsFetching (false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items)
            });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     follow={this.props.follow}
                     unfollow={this.props.unFollow}
                     setFollowingProgress={this.props.setFollowingProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        setFollowingProgress: state.usersPage.setFollowingProgress,
        followingInProgress: state.usersPage.followingInProgress


    }
}

export default  connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage,setFollowingProgress,
        setTotalUsersCount, setIsFetching,
   })(UsersContainer);
