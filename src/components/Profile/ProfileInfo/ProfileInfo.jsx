import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloder";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHocks from "./ProfileStatusWithHocks";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg'/>*/}
            {/*</div>*/}
              <div className={s.descriptionBlock}>
                 <img src={props.profile.photos.large}/>
                      <ProfileStatusWithHocks status={props.status}
                                     updateStatus={props.updateStatus}/>
              </div>
        </div>
    )
};

export default ProfileInfo;
