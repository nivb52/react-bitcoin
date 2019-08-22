/*
Props: onFilter
Allows free text search by name / phone and calls onFilter() 
on every keypress (onChange),passing a filter object e.g. : {term: 'puk'}
*/
import React from 'react'
// import './contact-filter.css';

export default class ContactFilter extends React.Component {
    handleChange(el) {
        console.log(el.target.value);
        // this.props.filterBy.term = el.target.value
        // this.setState({ filterBy: {term: el.target.value} });
    }

    handleSort(el) {
        console.log('handleSort', el.currentTarget);
        // this.props.filterBy.term = el.target.value
        // this.setState({ filterBy: {term: el.target.value} });
    }
    render() {

        return (

            <section className="flex flex-row justify-center">
                <div className="text-grey">
                    {
                        <input className="input-box"
                            onChange={this.handleChange}
                        />
                    }
                    <div className="inline  mar-left-1rem  ">
                        Sort By:
                    </div>

                    <button onClick={this.handleSort} data-sort="name"
                        className="inline  transparent text-grey mar-left-1rem  mar-top-1rem pointer">
                            Name
                    </button>
                    <span>&nbsp;/</span>
                <button onClick={this.handleSort} data-sort="email"
                        className="inline  transparent text-grey mar-left-1rem  mar-top-1rem pointer">
                        Email
                        </button>
                </div>
            </section>
        )
    }
    



}

