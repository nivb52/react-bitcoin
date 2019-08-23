

import React, { Component } from 'react';
import UserService from '../services/UserService';
import LogoContainer from '../cmps/LogoContainer'

import { UserIcon } from '../cmps/icons/UserIcon.js';
class SignupPage extends Component {

    //ONE WAY IN REACT TO USE THIS
    constructor() {
        super()
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const currUser = UserService.signup(this.state.value)
        console.log('curr User', currUser);
        const { history } = this.props;
        history.push('/contacts');
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleLogout() {
        const currUser = UserService.logout()
        const { history } = this.props;
        history.push('/');
    }

    render() {

        return (

            <section className="container">

                <LogoContainer />

                <form onSubmit={this.handleSubmit}>

                    <div className="flex flex-nowarp mar-1rem align-center justify-center">
                        <UserIcon className='login-user-icon prim-color' />
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
                        <input className="login-btn prim-bcg pointer" type="submit" value="Submit" />
                    </div>
                </form>


                <div className="flex justify-center align-center ">
                    <div className="text-grey-light pointer hover-white underline">Don't have an account? Just enter your name</div>
                    <div className="text-grey-light pointer hover-white mar-1rem"
                        onClick={this.handleLogout}>
                            logout ?
                    </div>
                    {/* TODO-IN-APP: add full signup
                    <div className="text-grey-light pointer hover-white mar-1rem">Forgot your password?</div>
                    <div className="text-grey-light pointer hover-white">Don't have an account? Create one</div>
                    */}
                </div>

            </section>
        )
    }

}

export default SignupPage
