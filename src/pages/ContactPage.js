// Gets contacts from ContactService and renders 
// a <ContactList> component, passing down
// the contacts.

import React, { Component } from 'react';
import ContactService from '../services/ContactService'
import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter/ContactFilter'


export default class ContactPage extends Component {
    state = {
        contacts: [],
        filterBy: { term: '' },
    }

    async componentDidMount() {
        const contacts = await ContactService.getContacts();
        this.setState({ contacts })

    }


    render() {

        const { contacts } = this.state;
        // const { filterBy } = this.state;

        return (
            <section >
                <h1 className="title text-white"> Contact List </h1>
                <div className="container">

                        <ContactFilter filterBy={this.state.filterBy}
                        />
                        <ContactList contacts={contacts} />
                </div>

            </section>
        )
    }


}