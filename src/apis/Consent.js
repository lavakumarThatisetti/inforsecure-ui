import Api from "./Api";

export default {
    getFiData(userId,consentHandle,fromDate,toDate){
        return Api.get(process.env.VUE_APP_ROOT_API+`fiu/fiData/${userId}/${consentHandle}/${fromDate}/${toDate}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    getAllConsentsOfUser(userId){
        return Api.get(process.env.VUE_APP_ROOT_API+`fiu/getConsents/${userId}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    postConsent(consentData){
        return Api.post(process.env.VUE_APP_ROOT_API+'fiu/createConsent',
                JSON.stringify(consentData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
        );
    }
}