import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloder";
import ProfileStatusWithHocks from "./ProfileStatusWithHocks";
import userPhoto from "../../../assets/img/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode,setEditMode] = useState (false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
       if (e.target.files.length){
           savePhoto(e.target.files[0]);
       }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg'/>
            </div>


            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input className={s.editStyles} type={"file"} onChange={onMainPhotoSelected}/>}

                { editMode
                    ? <ProfileDataForm initialValues = {profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)}} profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWithHocks status={status} updateStatus={updateStatus}/>
            </div>
        </div>

    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.editButton}>
        {isOwner && <div><button  className={s.editStyles} onClick={goToEditMode}>Edit</button></div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b> Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        { profile.lookingForAJob &&
        <div>
            <b> My professional skills</b>: { profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key}
                            contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
 }


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;
