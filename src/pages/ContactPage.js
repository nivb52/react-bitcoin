// Gets contacts from ContactService and renders 
// a <ContactList> component, passing down
// the contacts.

import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter'
import '../css/contact-page.css';
import '../css/contact-animation.css';


export default class ContactPage extends Component {
    state = {
        contacts: [],
        filterBy: { term: '', sortTerm: 'name', isAscending: true },
    }

    async componentDidMount() {
        this.loadContacts()
    }

    onFilter = (term) => {
        this.setState({ filterBy: { ...this.state.filterBy, term } }, this.loadContacts)
    }

    onSort = (sortTerm, isAscending) => {
        this.setState(
            { filterBy: { ...this.state.filterBy, sortTerm, isAscending } }
            , this.loadContacts
        )
    }

    async loadContacts() {
        const filterBy = this.state.filterBy
        const contacts = await ContactService.getContacts(filterBy)
        this.setState({ contacts })
    }


    render() {
        const { contacts } = this.state;
        // const { filterBy } = this.state;

        return (
            <section >
                <div className="container">
                    <ContactFilter onSort={this.onSort} onFilter={this.onFilter} filterBy={this.state.filterBy}
                    />
                    <ContactList contacts={contacts} />
                </div>

            </section>
        )
    }


}