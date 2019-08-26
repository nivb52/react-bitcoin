// - MovesList  props: title, moves

import React from 'react'
// import '../css/moves-list.css'

class movesList extends React.Component {


    render() {
        const { lastMoves } = this.props
        const title = lastMoves ? 'last 3 transactions' : ' no last moves'
        
        return (
            <section>
                
                <h3 className="size-5 text-center capitalized"> {title} </h3>
                <ol>
                {
                        lastMoves &&
                        lastMoves.map((move, index) =>
                        <li key={index}>{move}</li>
                        )   
                    }
                </ol>



            </section>

        );

    }

}

export default movesList
