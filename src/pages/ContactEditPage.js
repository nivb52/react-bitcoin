
import React from 'react';
import ContactService from '../services/ContactService'

export default class ContactEditPage extends React.Component {

    async componentDidMount() {
        const { contactId } = this.props.match.params
        const contact = await ContactService.getContactById(contactId)
        console.log(contact);
        this.setState({ contact })
    }

    handleSubmit = async e => {
        e.preventDefault();
        // const isSure = confim('Are you sure');
        // if (!isSure) return 
        await ContactService.saveContact(this.state.contact);
        const { history } = this.props;
        history.push('/contacts');
    };

    handleChange = e => {
        if (!e.target.value) return
        this.setState({ contact: { ...this.state.contact, [e.target.name]: e.target.value } });
    };


    render() {
        const { contact } = this.state || false
        return (
            <section >
                <button className="back-arrow" 
                onClick={this.props.history.goBack}> back  </button>

                {contact &&
                    <div>

                        <h1 className="title is-2"> Edit Contact</h1>
                        
                    </div>
                }
                {!contact &&
                    <div>
                        <h1> Add New Contact</h1>
                    </div>
                }
                <form  onSubmit={this.handleSubmit}>

                    <input name="name"
                    className="text-black"
                        type="text" maxLength="50" minLength="3"
                        onChange={this.handleChange}
                        value={(contact && contact.name) ? contact.name : ''}
                    />

                    <input name="email" type="email"
                    className="text-black"
                        onChange={this.handleChange}
                        value={(contact && contact.email) ? contact.email : ''}
                    />

                    <input name="phone" type="phone"
                    className="text-black"
                        onChange={this.handleChange}
                        value={(contact && contact.phone) ? contact.phone : ''}

                    />

                    <button>Save</button>

                </form>



            </section>
        )
    }
}
