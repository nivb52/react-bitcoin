import React from 'react';
import { withRouter } from "react-router-dom";


class ContactPreview extends React.Component {

    // This syntax ensures `this` is bound within handleClick.
    // With the Arrow Function
    handleClick = () => {
        // this.props.history.push(`/contacts/`);
        this.props.history.push(`/contact/${this.props.contact._id}`);
    }

    render() {
        const { contact } = this.props;

        return (
            <section className="contact-user flex flex-row mar-auto " 
                onClick={this.handleClick}>
                <div className="contact-img mar-left-1rem">
                    <img alt={contact.name} 
                        src={`https://robohash.org/${contact.name}.png`}></img>
                </div>
                <div className="contact-name text-start">
                    {contact.name}
                    <div className="contact-mail">
                        {contact.email}
                    </div>
                </div>
                <span className="contact-phone"> {contact.phone}  </span>

            </section>
        )
    }
}

export default withRouter(ContactPreview)