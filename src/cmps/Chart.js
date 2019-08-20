/*
Render a chart
Props for example -: title, data, description, color
LOOK IN PDF FOR THE APIS
*/

import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default class Chart extends Component {
    render() {
        let { name, description, period, points } = this.props.data
        let color = this.props.color || 'black'
        return (
            <div className="chart">
                <p> {name} - for a {period} </p>
                <p> {description} </p>

                <Sparklines data={points}
                >
                    <SparklinesLine color={color} 
                    style={{ strokeWidth: 1 , fillOpacity: .1}}
                    />
                    <SparklinesSpots  style={{ fill: "black" }} />
                </Sparklines>
            </div>
        )
    }
}