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


export default function NavHeader() {

    return (
        <Router >
            <div className="mar-top-1rem mar-right-1rem text-end ">
                <NavLink className="prim-color hover-white" to="/">Home</NavLink>
                <span> &nbsp; | &nbsp; </span>
                <NavLink className="prim-color hover-white" to="/contacts">Contacts</NavLink>
                <span> &nbsp; | &nbsp; </span>
                <NavLink className="prim-color hover-white" to="/charts">Charts</NavLink>
                <span> &nbsp; | &nbsp; </span>
                <NavLink className="prim-color hover-white" to="/signup">Signup</NavLink>
                <span> &nbsp; | &nbsp; </span>
                <NavLink className="prim-color hover-white" to="/todos">Todos</NavLink>
            </div>

            <hr className="bcg-grey" />

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