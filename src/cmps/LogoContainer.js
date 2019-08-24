import React, { Component } from 'react';
import {Logo} from './icons/LogoIcon.js'
import '../css/header/header.css';

export default class LogoContainer extends Component {
    render() {

        return (

                <div className="flex justify-center 
                                 align-center">
                    <Logo/>
                </div>
                )
             }
}