import React, { Component } from 'react';
import UtillService from '../services/UtillService'

import '../css/header/header.css'

export default class Header extends Component {
    render() {
    const month = new Date().getMonth()
    const monthName = UtillService.getMonthByName(month)

        return (

            <header className="header-container flex center pad-1rem">

            
            <h1 className="subtitle size-3 text-white text-center marginless">
                    Coding Academy
            </h1>
            <h2 className="text-white mar-top-halfrem">{monthName} 2019</h2>
            
            

            </header>
        )
    }
}

// this.props.history.location.pathname