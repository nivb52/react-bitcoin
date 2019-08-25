
import React from 'react';
import ContactService from '../services/ContactService'
import '../css/contact/contact-animation.css';

export default class ContactEditPage extends React.Component {

    async componentDidMount() {
        const { contactId } = this.props.match.params
        const contact = await ContactService.getContactById(contactId)
        // console.log(contact);
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
            <section className="container" >
                <div className="flex align-center justify-center">
                    <button className=" btn btn--small btn-center-press transparent"
                        onClick={this.props.history.goBack}>
                        back
                    </button>
                </div>

                {contact &&
                    <div className="container width-80 mar-top-2rem " >

                        <h1 className="subtitle is-3 text-center text-white"> Edit Contact</h1>

                    </div>
                }
                {!contact &&
                    <div className="mar-top-3rem">
                        <h1 className="subtitle is-3 text-center text-white"> Add New Contact</h1>
                    </div>
                }
                <div className="container width-80 contact-edit">

                    <form className="flex justify-evenly mar-1rem" onSubmit={this.handleSubmit}>

                        <input name="name"
                        placeholder="name"
                        type="text" maxLength="50" minLength="3"

                            className="input-box mar-1rem"
                            onChange={this.handleChange}
                            value={(contact && contact.name) ? contact.name : ''}
                        />

                        <input name="email" type="email"
                        placeholder="email"
                            className="input-box mar-1rem"
                            onChange={this.handleChange}
                            value={(contact && contact.email) ? contact.email : ''}
                        />

                        <input name="phone" type="phone"
                        placeholder="phone 000-000-0000"

                            className="input-box mar-1rem"
                            onChange={this.handleChange}
                            value={(contact && contact.phone) ? contact.phone : ''}

                        />

                        <button className="pad-1rem prim-bcg prim-bcg-hover text-black-light text-white-hover bold">Save</button>

                    </form>
                </div>



            </section>
        )
    }
}
