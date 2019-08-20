
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
                    <div className="flex justify-center align-center">
                        <button className="mar-1rem pad-halfrem" onClick={this.props.history.goBack}> back  </button>
                        <h3 className="subtitle text-white marginless">  {contact.name} </h3>
                        <img alt={contact.name} width="50vmin"
                            src={`https://robohash.org/${contact.name}.png`}></img>

                        <span className="mar-1rem">{contact.email} </span>
                        <span> {contact.phone}  </span>

                    </div>

                }

                <div className="flex-row justify-evenly mar-2rem">
                <button className="pad-halfrem" onClick={this.handleEdit}> Edit </button>
                <button className="pad-halfrem" onClick={this.deleteContact}>Delete</button>
                </div>

                {
                    // EDIT CONTACT


                }
            </section>
        )

    }

}