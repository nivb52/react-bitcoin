import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Home from '../pages/HomePage'
import TodoPage from '../pages/TodoPage'
import StatisticPage from '../pages/StatisticPage'
import SignupPage from '../pages/SignupPage'
import ContactPage from '../pages/ContactPage'
import ContactDetailPage from '../pages/ContactDetailPage'
import ContactEditPage from '../pages/ContactEditPage'


export default function NavHeader() {

    return (
        <Router>

            <NavLink to="/">Home</NavLink>
            <span> &nbsp; | &nbsp; </span>
            <NavLink to="/contacts">Contacts</NavLink>
            <span> &nbsp; | &nbsp; </span>
            <NavLink to="/charts">Charts</NavLink>
            <span> &nbsp; | &nbsp; </span>
            <NavLink to="/signup">Signup</NavLink>
            <span> &nbsp; | &nbsp; </span>
            <NavLink to="/todos">Todos</NavLink>


            <hr />
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