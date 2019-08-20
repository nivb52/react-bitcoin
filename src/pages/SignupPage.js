

import React, { Component } from 'react';
import UserService from '../services/UserService';
// import UserIcon from '../assets/user.svg';
import { UserIcon } from '../cmps/icons/UserIcon.js';

class SignupPage extends Component {
    constructor() {
        super()
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const currUser = UserService.signup(this.state.value)
        console.log('curr User', currUser);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {

        return (

            <section className="container">
                <form onSubmit={this.handleSubmit}>

                    <div className="flex flex-nowarp mar-1rem align-center justify-center">
                        <UserIcon className='login-user-icon' />
                        <input
                            className="input-box mar-left-1rem"
                            name="username"
                            placeholder="your name goes here"
                            type="text"
                            maxLength="20"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />



                    </div>
                    <div className="flex justify-center align-center mar-2rem ">
                        <input className="login-btn pointer" type="submit" value="Submit" />
                    </div>
                </form>


                <div className="flex justify-center align-center ">
                    <div className="text-grey pointer hover-white mar-1rem">Forget your password?</div>
                    <div className="text-grey pointer hover-white">Dont have an account? Create one</div>
                </div>
            </section>
        )
    }

}

export default SignupPage
