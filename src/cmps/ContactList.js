
import React from 'react';
import ContactPreview from './ContactPreview'
import { withRouter } from "react-router-dom";


class ContactList extends React.Component {

    handleNew = () => {
        this.props.history.push('/contact/edit/')
    }

    render() {
        return (
            <section className="contact-center" >
                <div className="add-user-pos">
                    <button 
                        className="add-user prim-bcg" 
                        onClick={this.handleNew}
                        >
                            &#43;
                    </button>
                </div>
                { this.props.contacts &&
                    this.props.contacts.map(currContact =>
                    <ContactPreview contact={currContact}
                        key={currContact._id} >

                    </ContactPreview>

                )
                }
            </section>
        )
    }
}
export default withRouter(ContactList)