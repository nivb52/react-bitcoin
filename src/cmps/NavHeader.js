import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import AppHeader from './AppHeader'

import Home from '../pages/HomePage'
import TodoPage from '../pages/TodoPage'
import StatisticPage from '../pages/StatisticPage'
import SignupPage from '../pages/SignupPage'
import ContactPage from '../pages/ContactPage'
import ContactDetailPage from '../pages/ContactDetailPage'
import ContactEditPage from '../pages/ContactEditPage'
import '../css/header/hamburger.css';
import OnlineIndicator from './OnlineIndicatior';



export default function NavHeader() {

    const closeMenu = () => {
        const elMenuToggle = document.querySelector('#menuToggle');
        elMenuToggle.children[0].checked = false;
    }

    const menuRoutes = [
        { path: '/', text: 'home' },
        { path: '/contacts', text: 'contacts' },
        { path: '/charts', text: 'charts' },
        { path: '/signup', text: 'signup' },
        { path: '/todos', text: 'todos' },
    ]


  
    
    return (

        <Router >
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox"
                        id="menuToggleCheckbox"
                    />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu"
                        onClick={closeMenu}
                    >
                        {
                            menuRoutes.map((link, index) =>
                                <NavLink
                                    className="prim-color hover-white"
                                    to={link.path} key={index}>
                                    <li>{link.text}</li>
                                </NavLink>
                            )
                        }

                    </ul>
                </div>
            </nav>


            <OnlineIndicator/>
            <AppHeader />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/todos" component={TodoPage} />
                <Route exact path="/charts" component={StatisticPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route path="/contacts" component={ContactPage} />
                <Route path="/contact/edit/:contactId?" component={ContactEditPage} />
                <Route path="/contact/:contactId" component={ContactDetailPage} />
                {/* <Route path="/404" component={NotFoundPage} /> */}
            </Switch>


        </Router >
    )


}