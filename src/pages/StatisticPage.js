/*
Display the charts:
 Market price   Confirmed transactions per day
You may use/ add other charts if you like
*/
import React, { Component } from 'react';
import BitcoinService from '../services/BitcoinService';
import Chart  from '../cmps/Chart.js';

export default class StatisticPage extends Component {
    state = {
        marketPriceData : null,
        status: null,
    }

    async componentDidMount() {
        const { status,...marketPriceData  } = await BitcoinService.getMarketPrice()
        this.setState({ status, marketPriceData })
        console.log(marketPriceData);
        

    }
    // console.log(navigator.onLine); ==> return true or false

    render() {
        const {status, marketPriceData } = this.state
        const isData = status === "ok" ? true : false


        return (
            <section className="container width-80">

                <h1 className="size-3 hover-white prim-color text-center mar-bottom-3rem">
                    Bitcoin Statistics
                </h1>
                {
                    !isData &&
                    <div>Loading Data...</div>
                }
                {
                    isData &&
                    <Chart data={marketPriceData} color="orange"  
                   
                    
                    />

                }
            </section>
        )
    }

}
