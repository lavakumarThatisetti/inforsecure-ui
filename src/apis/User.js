import Api from "./Api";

export default {
    getUser(userId){
        return Api.get(`api/user/getUser/${userId}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    getUserByEmail(email){
        return Api.get(`api/user/getUserByEmail/${email}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    postUser(userData){
        return Api.post('api/user/registerUser',
                JSON.stringify(userData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
        );
    },
    updateUser(userId, userData){
        return Api.put(`api/user/updateUser/${userId}`,
               JSON.stringify(userData),
               {
                    headers: {
                        'Content-Type': 'application/json',
                    }
               }
        );
    },
    getTop10Users(){
        return Api.get('api/user/getTop10Users',
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}