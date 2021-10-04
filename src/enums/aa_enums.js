export const CONSENT_MODE = {
    VIEW: 'VIEW',
    STORE: 'STORE',
    QUERY: 'QUERY',
    STREAM: 'STREAM'
  }
  
  export const FETCH_TYPE = {
    ONETIME: 'ONETIME',
    PERIODIC: 'PERIODIC'
  }
  
  export const CONSENT_TYPE = {
    PROFILE: 'PROFILE',
    SUMMARY: 'SUMMARY',
    TRANSACTIONS: 'TRANSACTIONS'
  }
  
  export const FI_TYPE = {
    DEPOSIT: 'DEPOSIT',
    TERM_DEPOSIT: 'TERM DEPOSIT',
    RECURRING_DEPOSIT: 'RECURRING DEPOSIT',
    CREDIT_CARD: 'CREDIT CARD',
    CD: 'Certificates of Deposit',
    SIP: 'Systematic Investment Plan',
    CP: 'Commercial Paper',
    GOVT_SECURITIES: 'GOVT_SECURITIES',
    EQUITIES: 'EQUITIES',
    BONDS: 'BONDS',
    DEBENTURES: 'DEBENTURES',
    MUTUAL_FUNDS: 'MUTUAL_FUNDS',
    ETF: 'Exchange Traded Fund',
    EPF: 'Employees Provident Fund',
    PPF: 'Public Provident Fund',
    IDR: 'Indian Depository Receipt',
    CIS: 'Collective Investment Schemes',
    AIF: 'Alternative Investment Fund',
    INSURANCE_POLICIES: 'INSURANCE_POLICIES',
    ULIP: 'Unit Linked Insurance Plan',
    NPS: 'National Pension Scheme',
    INVIT: 'Infrastructure Investment Trust',
    REIT: 'Real Estate Investment Trust',
    OTHER: 'OTHER'
  }
    
  export const DATA_LIFE_UNIT = {
    MONTH: 'MONTH',
    YEAR: 'YEAR',
    DAY: 'DAY',
    INF: 'INF'
  }
  
  export const FREQUENCY_UNIT = {
    HOUR: 'HOUR',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
    DAY: 'DAY',
    INF: 'INF'
  }
  
  export const DATA_FILTER_TYPE = {
    TRANSACTIONTYPE: 'TRANSACTIONTYPE',
    TRANSACTIONAMOUNT: 'TRANSACTIONAMOUNT'
  }
  
  export const DATA_FILTER_OPERATOR = {
    EQUAL_TO: '=',
    NOT_EQUAL_TO: '!= ',
    GREATER_THAN: '>',
    LESS_THAN: '<',
    GREATER_THAN_EQUAL_TO: '>=',
    LESS_THAN_EQUAL_TO: '<=',
  }
  
  export const PURPOSE_CODE = {
    101 : {
      code: '101',
      description: 'Wealth management service',
      refUri: 'https://api.rebit.org.in/aa/purpose/101.xml',
      category: {
        code: '01',
        name: 'Personal Finance'
      }
    },
    102: {
      code: '102',
      description: 'Customer spending patterns, budget or other reportings',
      refUri: 'https://api.rebit.org.in/aa/purpose/101.xml',
      category: {
        code: '01',
        name: 'Personal Finance'
      }
    },
    103: {
      code: '103',
      description: 'Aggregated statement',
      refUri: 'https://api.rebit.org.in/aa/purpose/101.xml',
      category: {
        code: '02',
        name: 'Financial Reporting'
      }
    },
    104: {
      code: '104',
      description: 'Explicit consent for monitoring of the accounts',
      refUri: 'https://api.rebit.org.in/aa/purpose/101.xml',
      category: {
        code: '03',
        name: 'Account Query and Monitoring'
      }
    },
    105: {
      code: '105',
      description: 'Explicit one-time consent for the accounts',
      refUri: 'https://api.rebit.org.in/aa/purpose/101.xml',
      category: {
        code: '03',
        name: 'Account Query and Monitoring'
      }
    }
  }
  
  export const CONSENT_ARTEFACT_STATUS = {
    READY: 'READY', 
    FAILED: 'FAILED',
    PENDING: 'PENDING'
  }
  
  export const SIGNED_CONSENT_STATUS = {
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED',
    REVOKED: 'REVOKED',
    EXPIRED: 'EXPIRED'
  }
  
  export const DATA_CONSUMER_TYPE = {
    FIU: 'FIU',
    AA: 'AA',
  }
  
  export const DATA_PROVIDE_TYPE = {
    FIP: 'FIP',
    AA: 'AA',
  }
  
  export const CONSENT_NOTIFICATION_STATUS = {
    ACTIVE: 'ACTIVE',
    REVOKED: 'REVOKED',
    PAUSED: 'PAUSED',
    REJECTED: 'REJECTED'
  }
  
  export const FI_NOTIFICATION_DATA_STATUS = {
    READY: 'READY',
    DENIED: 'DENIED',
    PENDING: 'PENDING',
    DELIVERED: 'DELIVERED',
    TIMEOUT: 'TIMEOUT'
  }
  
  export const FI_NOTIFICATION_SESSION_STATUS = {
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED',
    EXPIRED: 'EXPIRED',
    FAILED: 'FAILED'
  }
  
  export const HEART_BEAT_STATUS = {
    UP: 'UP',
    DOWN: 'DOWN'
  }