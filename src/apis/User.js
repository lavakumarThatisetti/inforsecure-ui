import axios from "axios";
import Api from "./Api";

export default {
    getUser(userId){
        return Api.get(process.env.VUE_APP_ROOT_API+`user/getUser/${userId}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    getUserByEmail(email){
        return Api.get(process.env.VUE_APP_ROOT_API+`user/getUserByEmail/${email}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    postUser(userData){
        return axios.post(process.env.VUE_APP_ROOT_API+'user/registerUser',
                JSON.stringify(userData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
        );
    },
    updateUser(userId, userData){
        return Api.put(process.env.VUE_APP_ROOT_API+`user/updateUser/${userId}`,
               JSON.stringify(userData),
               {
                    headers: {
                        'Content-Type': 'application/json',
                    }
               }
        );
    },
    getTop10Users(){
        return Api.get(process.env.VUE_APP_ROOT_API+'user/getTop10Users',
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}