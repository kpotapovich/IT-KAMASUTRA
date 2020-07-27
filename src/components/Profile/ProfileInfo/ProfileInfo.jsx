import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloder";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHocks from "./ProfileStatusWithHocks";
import userPhoto from "../../../assets/img/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
       if (e.target.files.length){
           savePhoto(e.target.files[0]);
       }
    }
    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg'/>
            </div>
              <div className={s.descriptionBlock}>
                 <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                  {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                 <ProfileStatusWithHocks status={status} updateStatus={updateStatus}/>
              </div>
        </div>
    )
};

export default ProfileInfo;
