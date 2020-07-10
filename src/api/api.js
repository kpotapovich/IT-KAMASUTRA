import React from "react";
import * as axios from "axios";





const instance = axios.create({

    withCredentials: true,
    baseUEL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: (
        "Api"
        )

});
export  const UsersAPI = {
    getUsers (currentPage = 1,pageSize = 10) {
        return instance.get(  `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}




export const  getUsers = (currentPage = 1,pageSize = 10) => {
    return instance.get(  `users?page=${currentPage}&count=${pageSize}`,
       )
        .then(response => {
            return response.data;
        })

}

 export const  getUsers2 = (currentPage = 1,pageSize = 10) => {
     return instance.get(`follow?page=${currentPage}&count=${pageSize}`,
        )
           .then(response => {
             return response.data;
      })

 }

