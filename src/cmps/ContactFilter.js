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
        isAscending = !isAscending
        lastSort = sortTerm
        // END isAscending

        this.props.onSort(sortTerm, isAscending)
    }

    render() {

        return (

            <section className="flex-row justify-center container width-80">
                <div className="text-grey-light">
                    {
                        <input className="input-box text-center"
                            // placeholder="search here"
                            type="search"
                            onChange={this.setFilter} />
                    }


                    <div className="inline pad-left-1rem mar-bottom-2rem ">
                        Sort By:

                    <button onClick={this.handleSort}
                            className="inline transparent text-grey-light mar-left-1rem mar-top-1rem pointer">
                            Name
                    </button>

                        <span>&nbsp;&nbsp;/</span>

                        <button onClick={this.handleSort}
                            className="inline transparent text-grey-light mar-left-1rem mar-top-1rem pointer">
                            Email
                    </button>
                    </div>

                </div>
            </section>
        )
    }

}

