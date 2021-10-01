import Api from "./Api";

export default {
    getUser(userId){
        return Api.get(`user/getUser/${userId}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    getUserByEmail(email){
        return Api.get(`user/getUserByEmail/${email}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    postUser(userData){
        return Api.post('user/registerUser',
                JSON.stringify(userData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
        );
    },
    updateUser(userId, userData){
        return Api.put(`user/updateUser/${userId}`,
               JSON.stringify(userData),
               {
                    headers: {
                        'Content-Type': 'application/json',
                    }
               }
        );
    }
}