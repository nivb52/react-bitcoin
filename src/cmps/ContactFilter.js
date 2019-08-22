/*
Props: onFilter Allows free text search by name / phone
and calls onFilter()  passing a filter object e.g. : {term: 'puk'}
*/

import React from 'react'
// import './contact-filter.css';

let isAscending = true
let lastSort = null

export default class ContactFilter extends React.Component {


    setFilter = (el) => {
        this.props.onFilter(el.target.value)
    }

    handleSort = (el) => {
        const sortTerm = el.target.innerText.toLowerCase()
        // TAKE CARE ON isAscending
        if (sortTerm === lastSort) isAscending = !isAscending
        else isAscending = true
        lastSort = sortTerm
        // END isAscending
        
        this.props.onSort(sortTerm,isAscending)  
    }

    render() {

        return (

            <section className="flex flex-row justify-center">
                <div className="text-grey">
                    {
                        <input className="input-box"
                            type="text"
                            onChange={this.setFilter} />
                    }


                    <div className="inline mar-left-1rem  ">
                        Sort By:
                    </div>

                    <button onClick={this.handleSort}
                        className="inline transparent text-grey mar-left-1rem mar-top-1rem pointer">
                        Name
                    </button>

                    <span>&nbsp;&nbsp;/</span>

                    <button onClick={this.handleSort}
                        className="inline transparent text-grey mar-left-1rem mar-top-1rem pointer">
                        Email
                    </button>
                </div>
            </section>
        )
    }

}

