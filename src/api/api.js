import React from "react";
import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
      "API-KEY": "86318358-ffab-4e86-a402-63aacef8b734"
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
       return  instance.get(`profile/` + userId);

    },

}

export  const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}