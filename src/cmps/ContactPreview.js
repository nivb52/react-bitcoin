import React from 'react';
import { withRouter } from "react-router-dom";


class ContactPreview extends React.Component {

    handleClick = () => {
        // this.props.history.push(`/contacts/`);
        this.props.history.push(`/contact/${this.props.contact._id}`);
    }

    //https://www.javascriptstuff.com/detect-image-load/
    handleImageErrored = () => {
        console.log('error loading image');
      }
    render() {
        const { contact } = this.props;

        return (
            <section className="contact-user flex-row mar-auto "
                onClick={this.handleClick}>
                <div className="contact-img mar-left-1rem">
                    <img alt={contact.name} data-src='/images/placeholders/48x48.png'
                        src={`https://robohash.org/${contact.name}.png`}
                        onError={this.handleImageErrored}
                        ></img>
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