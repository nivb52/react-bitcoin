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
import '../css/hamburger.css';


export default function NavHeader() {

const closeMenu = () => {
    const elMenuToggle = document.querySelector('#menuToggle');
    elMenuToggle.children[0].checked = false;
}

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
                        <NavLink className="prim-color hover-white" to="/"><li>Home</li></NavLink>
                        <NavLink className="prim-color hover-white" to="/contacts"><li>Contacts</li></NavLink>
                        <NavLink className="prim-color hover-white" to="/charts"><li>Charts</li></NavLink>
                        <NavLink className="prim-color hover-white" to="/signup"><li>Signup</li></NavLink>
                        <NavLink className="prim-color hover-white" to="/todos"><li>Todos</li></NavLink>
                    </ul>
                </div>
            </nav>



            <AppHeader />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/todos" component={TodoPage} />
                <Route exact path="/charts" component={StatisticPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route path="/contacts" component={ContactPage} />
                <Route path="/contact/edit/:contactId?" component={ContactEditPage} />
                <Route path="/contact/:contactId" component={ContactDetailPage} />
            </Switch>


        </Router >
    )


}