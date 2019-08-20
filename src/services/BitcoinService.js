import { storageService } from './StorageService.js'
import axios from 'axios'
// const axios = require('axios');

const RATE_KEY = 'btc_rate'
const MARKET_KEY = 'market_price'
const LAST_VISIT_KEY = 'date'


export default {
    // getRate,
    getRatePrm,
    getMarketPrice,
    getConfirmedTransactions
}


function getRatePrm(coins) {
    var rate = storageService.load(RATE_KEY)

    if (!rate || _is24hrFromLastFetch()) {
        return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`)
            .then(res => {
                rate = res.data
                storageService.store(RATE_KEY, rate)
                storageService.store(LAST_VISIT_KEY, Date.now())

                return rate
            })
    }
    return rate
}

// ::::::::::::::::::::::::::::::
// ::::::: CHART DATA :::::::::::
// ::::::::::::::::::::::::::::::
async function getMarketPrice() {
    // https://api.blockchain.info/charts/market-cap?format=json
    var marketPrice = storageService.load(MARKET_KEY)

    if (!marketPrice || _is24hrFromLastFetch()) {
        const res = await axios.get(`https://api.blockchain.info/charts/market-price?format=json&cors=true`)
        marketPrice = res.data
        // DOT VALUS IS THE DATA OF CHART
        storageService.store(MARKET_KEY, marketPrice)
        storageService.store(LAST_VISIT_KEY, Date.now())
    }
    
    return {
        status: marketPrice.status,
        name: marketPrice.name,
        description: marketPrice.description,
        period: marketPrice.period,
        points: marketPrice.values.map(coord => coord.y)
    } 
}

function getConfirmedTransactions() {

}




// FETCH ONCE A DAY 
function _is24hrFromLastFetch() {
    const lastVisit = storageService.load(LAST_VISIT_KEY) || 0
    const currDate = Date.now()

    // 86400000 = 24 HOURS
    if (currDate >= lastVisit + 86400000) return true
    else return false
}