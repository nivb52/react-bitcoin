import React, { Component } from 'react';
import {Logo} from './icons/LogoIcon.js'
import '../css/logo-container.css';

export default class LogoContainer extends Component {
    render() {

        return (
                <div className="logo-img">
                    <Logo/>
                </div>
                )
             }
}