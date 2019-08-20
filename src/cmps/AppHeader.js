import React, { Component } from 'react';
import UtillService from '../services/UtillService'
import '../css/header.css';
 
export default class Header extends Component {
    render() {
    const month = new Date().getMonth()
    const monthName = UtillService.getMonthByName(month)
    
        return (

            <header 
            className="logo-container flex justify-center 
            align-center pad-1rem">

                <h1 className="subtitle is-3 text-white marginless">Coding Academy</h1>
                <h2 className="text-white">{monthName} 2019</h2>
                
            </header>
        )
    }
}