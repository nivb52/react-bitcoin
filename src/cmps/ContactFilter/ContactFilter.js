/*
Props: onFilter
Allows free text search by name / phone and calls onFilter() 
on every keypress (onChange),passing a filter object e.g. : {term: 'puk'}
*/
import React from 'react'
import './contact-filter.css';

export default class ContactFilter extends React.Component {
    
    render() {
        
        return (

            <section>
                <div className="flex flex-row text-grey">

                    {
                        <input className="text-black"
                            onChange={this.handleChange}
                        />
                    }
                    <div className="inline mar-left-1rem">Sort By:</div>
                    <div className="inline mar-left-1rem">Name</div> /
                <div className="inline mar-left-1rem">Email</div>
                </div>
            </section>
        )
    }
    handleChange(el) {
        console.log(el.target.value);
        // this.props.filterBy.term = el.target.value
        // this.setState({ filterBy: {term: el.target.value} });
    }
 


}

