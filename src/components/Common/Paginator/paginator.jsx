import React from "react";
import styles from "./paginator.module.css";
import userPhoto from "../../../assets/img/user.png";
import {NavLink} from "react-router-dom";



let Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil (totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div className ={styles.over}>
            {pages.map(p => {
                return (
                    <span
                        key={p}
                        className = {currentPage === p ? styles.selectedPage:''}
                        onClick={(e) => {
                            onPageChanged(p); }}>{p}
                    </span>)
            })
            };

        </div>
    )
}

export default Paginator;