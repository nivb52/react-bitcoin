

import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default class Chart extends Component {
    render() {
        let { name, description, period, points } = this.props.data
        let color = this.props.color || 'black'
        return (
            <div>
                <h2 className="subtitle is-4 text-center text-white">
                    {name} - for a {period}
                </h2>
                <p> {description} </p>

                <Sparklines data={points}
                >
                    <SparklinesLine color={color}
                        style={{ strokeWidth: 1, fillOpacity: .05 }}
                    />
                    <SparklinesSpots style={{ fill: "white" }} />
                </Sparklines>
            </div>
        )
    }
}