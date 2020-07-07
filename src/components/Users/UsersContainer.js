import React from "react";
import {connect} from "react-redux";
import { follow, setCurrentPage, setIsFetching,
    setUsers, setTotalUsersCount, unfollow
} from "../../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloder";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setTotalUsersCount (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount (false);
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNamber) => {
        this.props.setCurrentPage(pageNamber);
        this.props.setTotalUsersCount(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNamber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(false);
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}

            />
        </>
    }
}

let mapStateToProps =(state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
}

//let mapDispatchToProps = (dispatch) => {
   // return {
   //      follow: (userId) => {
   //          dispatch(followAC(userId));
   //      },
   //      unFollow: (userId) => {
   //          dispatch(unfollowAC(userId));
   //      },
   //      setUsers: (users) => {
   //          dispatch(setUsersAC(users));
   //      },
   //      setCurrentPage: (pageNumber) => {
   //          dispatch(setCurrentPageAC(pageNumber))
   //      },
   //      setTotalUsersCount: (totalCount) => {
   //          dispatch(setUsersTotalCountAC(totalCount))
   //      },
   //      toggleIsFetching: (isFetching) => {
   //          dispatch(setIsFetchingAC(isFetching));
   //      }
   //  }



export default  connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching,
   })(UsersContainer);

//export default  connect(mapStateToProps, mapDispatchToProps)(UsersContainer);