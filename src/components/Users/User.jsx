import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/paginator";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div className={styles.userText}>
                <span>
                   <div>
                      <NavLink to={'/profile'}>
                          <img src={user.photos.small != null ? user.photos.small : userPhoto}
                               className={styles.userPhoto}/>
                      </NavLink>
                   </div>
                  <div>
                      {user.followed
                          ? <button disabled={followingInProgress
                              .some(id => id === user.id)}
                                    onClick={ () => {unfollow(user.id) }}>
                              Unfollow</button>

                          : <button disabled={followingInProgress
                              .some(id => id === user.id)}
                                    onClick={ () => {follow(user.id) }}>
                              Follow</button>
                      }
                  </div>
              </span>
            <span className={styles.location}>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.id}</div>
                    </span>
                </span>
        </div>)

}

export default User;