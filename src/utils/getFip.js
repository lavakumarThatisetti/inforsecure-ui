

export const getFiP = (fiType) =>{
    switch(fiType){
        case "DEPOSIT":
        case "RECURRING_DEPOSIT":
        case "CREDIT_CARD":
        case "TERM_DEPOSIT":
        case "CD":
        case "IDR":
            return "Apna Bank";
        case "INSURANCE_POLICIES":
        case "ULIP":
            return "Apna Insurance"
        case "EPF":
        case "PPF":
            return "Apna Pension";
        case "SIP":
        case "CP":
        case "GOVT_SECURITIES":
        case "EQUITIES":
        case "BONDS":
        case "DEBENTURES":
        case "MUTUAL_FUNDS":
        case "ETF":
        case "AIF":
        case "NPS":
        case "INVIT":
        case "REIT":
            return "Apna Investments"            
    }
    return "Others"
}