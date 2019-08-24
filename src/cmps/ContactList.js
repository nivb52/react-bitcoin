
import React from 'react';
import ContactPreview from './ContactPreview'
import { withRouter } from "react-router-dom";


class ContactList extends React.Component {

    handleNew = () => {
        this.props.history.push('/contact/edit/')
    }

    render() {
        return (
            <section className="flex justify-center align-center" >
                
                { this.props.contacts &&
                    this.props.contacts.map(currContact =>
                    <ContactPreview contact={currContact}
                        key={currContact._id} >

                    </ContactPreview>

                )
                }
                
                <div className="add-user-pos">
                    <button 
                        className="add-user prim-bcg pointer" 
                        onClick={this.handleNew}
                        >
                            &#43;
                    </button>
                </div>
            </section>
        )
    }
}
export default withRouter(ContactList)