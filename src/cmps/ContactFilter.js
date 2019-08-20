/*
Props: onFilter
Allows free text search by name / phone and calls onFilter() 
on every keypress (onChange),passing a filter object e.g. : {term: 'puk'}
*/
import React from 'react'
// import './contact-filter.css';

export default class ContactFilter extends React.Component {
    
    render() {
        
        return (

            <section className="flex flex-row justify-center">
                <div  className="text-grey">
                    {
                        <input className="input-box"
                            onChange={this.handleChange}
                        />
                    }
                    <div className="inline mar-left-1rem">Sort By:</div>
                    <div className="inline mar-left-1rem pointer">Name</div> /
                <div className="inline mar-left-1rem pointer">Email</div>
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

