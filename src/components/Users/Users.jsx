import React from "react";
import styles from "./users.module.css";
import Paginator from "../Common/Paginator/paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
                   pageSize={pageSize} onPageChanged={onPageChanged}/>
        <div>
            {
                users.map(u => <User user={u} key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                                     className={styles.userText}
                />)
            }
        </div>
    </div>
}

export default Users;