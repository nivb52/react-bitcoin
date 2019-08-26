

import React, { Component } from 'react';
import UserService from '../services/UserService';
import { connect } from 'react-redux';

import LogoContainer from '../cmps/LogoContainer';
import '../css/signup-and-login.css';
import { UserIcon } from '../cmps/icons/UserIcon.js';


class SignupPage extends Component {

    //ONE WAY IN REACT TO USE 'THIS'
    constructor() {
        super()
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const currUser = UserService.signup(this.state.value)
        console.log('curr User', currUser);
        // REDIRECT
        this.props.history.push('/');
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleLogout() {
        UserService.logout()
        // REDIRECT
        this.props.history.push('/charts');
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
                        <input className="login-btn prim-bcg text-black-light btn-outline pointer" 
                        type="submit" value="Sign up" />
                    </div>
                </form>


                <div className="flex justify-center align-center ">
                    <div className="text-grey-light pointer hover-white 
                    tooltip tooltip--white tooltip--right">
                            Don't have an account?

                        <span className="tooltiptext tooltiptext--white 
                        tooltiptext--right">
                        Just enter your name
                        </span> 
                    </div>
                    <div className="text-grey-light pointer capitalized hover-white mar-1rem"
                        onClick={this.handleLogout}>
                            logout
                    </div>
                </div>

            </section>
        )
    }

    
}

const mapStateToProps = state => {
    return {
      user : state.user
    }
  }
    
const mapDispatchToProps = dispatch => {
    return {
        loginUser: () => dispatch({type: 'LOGIN', currUser: 'Muki' })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupPage)
