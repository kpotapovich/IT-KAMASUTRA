import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
            <div>
                <div>
                    <img src='https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg'/>
                </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>

            </div>
    )
};

export default ProfileInfo;
