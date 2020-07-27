import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redax/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



class ProfileContainer  extends React.Component {

 refreshPtofile(){
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = this.props.authorizedUserId;
        if (!userId){
            this.props.history.push("/login");
        }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
}


    componentDidMount() {

        this.refreshPtofile();
    }
componentDidUpdate(prevProps, prevState, snapshot) {
     if (this.props.match.params.userId != prevProps.match.params.userId) {
    this.refreshPtofile();
     }
 }


    render() {
        return (
            <Profile {...this.props}
                     savePhoto={this.props.savePhoto}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}

            />
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus,
        updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer);



