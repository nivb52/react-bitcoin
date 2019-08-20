
import React from 'react';
import ContactService from '../services/ContactService'


export default class ContactDetailPage extends React.Component {

    async componentDidMount() {
        const { contactId } = this.props.match.params
        const contact = await ContactService.getContactById(contactId)
        this.setState({ contact })
    }

    handleEdit = () => {
        const { contactId } = this.props.match.params
        this.props.history.push(`/contact/edit/${contactId}`);
    }

    deleteContact = async () => {
        const { contactId } = this.props.match.params

        // const isSure = confirm('Are you sure')
        // if (!isSure) return
        ContactService.deleteContact(contactId)
    }


    render() {
        const { contact } = this.state || false

        return (

            // SHOW CONTACT
            <section>
                {
                    contact &&
                    <div className="details">
                        <div className="back-arrow" onClick={this.props.history.goBack}> back  </div>
                        <h3>  {contact.name} </h3>
                        <img alt={contact.name} width="50px"
                            src={`https://robohash.org/${contact.name}.png`}></img>

                        <span>{contact.email} </span>
                        <span> {contact.phone}  </span>

                    </div>

                }
                <button onClick={this.handleEdit}> Edit </button>
                <button onClick={this.deleteContact}>Delete</button>

                {
                    // EDIT CONTACT


                }
            </section>
        )

    }

}