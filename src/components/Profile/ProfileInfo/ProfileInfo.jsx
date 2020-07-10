import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloder";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg'/>
            </div>
              <div className={s.descriptionBlock}>
                 <img src={props.profile.photos.large}/>
                       ava + description
                  <div></div>
              </div>

        </div>
    )
};

export default ProfileInfo;
