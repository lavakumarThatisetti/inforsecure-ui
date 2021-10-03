import Api from "./Api";

export default {
    getFiData(userId,consentHandle,fromDate,toDate){
        return Api.get(`fiu/fiData/${userId}/${consentHandle}/${fromDate}/${toDate}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    },
    postConsent(consentData){
        return Api.post('fiu/createConsent',
                JSON.stringify(consentData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
        );
    }
}