import React from "react";
import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
      "API-KEY": "797cb4d2-9594-4045-9630-12b624d6debb"
        // "API-KEY": "d7e2cd72-d7ea-47d6-9156-962002bb73c6"
     }
});


export  const UsersAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
      return   instance.post(`follow/${userId}`)
    },

    unFollow(userId){
       return instance.delete(`follow/${userId}`)

    },
    getProfile(userId){
        console.warn('используется устаревший метод profileAPI');
       return  profileAPI.getProfile(userId);

    },

}

export  const profileAPI = {
    getProfile(userId){
        return  instance.get(`profile/` + userId);

    },
    getStatus(userId) {
        return  instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return  instance.put(`profile/status`,{status:status});
    },
    savePhoto(photoFile) {
       const formData = new FormData();
        formData.append("image",photoFile);

        return  instance.put(`profile/photo`,formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return  instance.put(`profile`, profile);
    }
}

export  const authAPI = {
    me () {
        return instance.get(`auth/me`);
    },
     login (email,password,rememberMe= false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout () {
        return instance.delete(`auth/login`);
    },

}