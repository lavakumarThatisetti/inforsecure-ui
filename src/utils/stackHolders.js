export const WealthScoreOffers = (score) =>{
   if (score>850) return {
            "stackHolders":{
                    "holders":[
                        "All India Wealth Persons PVT LTD",
                        "Large Cap Liquid Fund Capital Group"
                    ],
                    "returns":{
                        1: "33.5",
                        3: "50.5",
                        5: "80.5"
                    }
            },
            "InvestmentHolders":{
                "holders": [
                    "Credit Heros Finance Limited",
                    "Investment Brokers Pvt Limited",
                    "Insurance Cops public limited"
                ],
                "loan":[
                        {"maxAmount":1000000, "intrest":"12%"},
                        {"maxAmount":10000000, "intrest":"10%"},
                        {"maxAmount":50000000, "intrest":"9%"},
                        {"maxAmount":100000000, "intrest":"8%"}
                ]
            },
            "IPO":{
                "Companies":[
                    "Next Billion Private Limited",
                    "Apex Miles Group"
                ]
            },
            "ShareHoldings":{
                "Companies" :[
                    "Next Cap Ventures",
                    "Angel Groups Raisers"
                ],
                "offers":[
                    "10000",
                    "20000",
                    "30000"
                ]
            }
        }
    else if(score>700) return {
            "stackHolders":{
                    "holders":[
                        "Government Backed Share Seed PVT LTD",
                        "Medium Cap Liquid Fund Capital Group"
                    ],
                    "returns":{
                        1: "20.5",
                        3: "40.5",
                        5: "70.5"
                    }
            },
            "InvestmentHolders":{
                "holders": [
                    "Finance Heros Finance Limited",
                    "Investment Stackholders Pvt Limited",
                    "Insurance Brokers public limited"
                ],
                "loan":[
                        {"maxAmount":1000000, "intrest":"12%"},
                        {"maxAmount":25000000, "intrest":"10%"},
                        {"maxAmount":10000000, "intrest":"10%"},
                        {"maxAmount":50000000, "intrest":"10%"}
                ]
            },
            "ShareHoldings":{
                "Companies" :[
                    "Mid Size Group Corpus",
                    "Mid Million Sales Funds"
                ],
                "offers":[
                    "1000",
                    "2000",
                    "3000"
                ]
            }
        }
        else if(score>500) return {
            "stackHolders":{
                    "holders":[
                        "Private Group venture Funds",
                        "Medium Cap Liquid Fund Capital Group"
                    ],
                    "returns":{
                        1: "20.5",
                        3: "40.5",
                        5: "70.5"
                    }
            },
            "InvestmentHolders":{
                "holders": [
                    "Finance Heros Finance Limited",
                    "Investment Stackholders Pvt Limited",
                    "Insurance Brokers public limited"
                ],
                "loan":[
                        {"maxAmount":100000, "intrest":"12%"},
                        {"maxAmount":500000, "intrest":"12%"},
                        {"maxAmount":1000000, "intrest":"12%"},
                        {"maxAmount":2500000, "intrest":"12%"}
                ]
            },
            "ShareHoldings":{
                "Companies" :[
                    "Mid Size Group Corpus",
                    "Mid Million Sales Funds"
                ],
                "offers":[
                    "1000",
                    "2000",
                    "3000"
                ]
            }
        }
        else return {
            "stackHolders":{
                    "holders":[
                        "Private Group venture Funds",
                        "Medium Cap Liquid Fund Capital Group"
                    ],
                    "returns":{
                        1: "20.5",
                        3: "40.5",
                        5: "70.5"
                    }
            },
            "IPO":{
                "Companies":[
                    "Next Billion Private Limited"
                ]
            },
            "InvestmentHolders":{
                "holders": [
                    "Finance Heros Finance Limited",
                    "Investment Stackholders Pvt Limited",
                    "Insurance Brokers public limited"
                ],
                "loan":[
                        {"maxAmount":100000, "intrest":"14%"},
                        {"maxAmount":500000, "intrest":"12%"},
                        {"maxAmount":1000000, "intrest":"11%"},
                        {"maxAmount":2500000, "intrest":"11%"}
                ]
            },
            "ShareHoldings":{
                "Companies" :[
                    "Mid Size Group Corpus",
                    "Mid Million Sales Funds"
                ],
                "offers":[
                    "1000",
                    "2000",
                    "3000"
                ]
            }
        }
};

export const AllOffersOffered = {
    "stackHolders": {
            "holders":[
                "All India Wealth Persons PVT LTD",
                "Large Cap Liquid Fund Capital Group",
                "Government Backed Share Seed PVT LTD",
                "Medium Cap Liquid Fund Capital Group",
                "Private Group venture Funds",
                "Medium Cap Liquid Fund Capital Group"
            ],
            "returns":{
                1: "(20 - 33)",
                3: "(18 - 50)",
                5: "(50 - 100)"
            }
    },
    "InvestmentHolders":{
        "holders": [
            "Credit Heros Finance Limited",
            "Investment Brokers Pvt Limited",
            "Insurance Cops public limited",
            "Finance Heros Finance Limited",
            "Investment Stackholders Pvt Limited",
            "Insurance Brokers public limited",
            "Credit Heros Finance Limited",
            "Investment Brokers Pvt Limited",
            "Insurance Cops public limited"
        ],
        "loan":[
                {"maxAmount":100000, "intrest":"(10 - 14)%"},
                {"maxAmount":1000000, "intrest":"(8 - 14)%"},
                {"maxAmount":5000000, "intrest":"(8 - 14)%"},
                {"maxAmount":100000000, "intrest":"(8 - 14)%"},
                {"maxAmount":500000000, "intrest":"(6- 12)%"},
                {"maxAmount":1000000000, "intrest":"(6- 12)%"}
        ]
    },
    "IPO":{
        "Companies":[
            "Next Billion Private Limited",
            "Apex Miles Group"
        ]
    },
    "ShareHoldings":{
        "Companies" :[
            "Next Cap Ventures",
            "Angel Groups Raisers",
            "Mid Size Group Corpus",
            "Mid Million Sales Funds"
        ],
        "offers":[
            "300000",
            "200000",
            "100000",
            "10000",
            "5000",
            "1000"
        ]
    }
}