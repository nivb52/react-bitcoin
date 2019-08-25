import React from 'react';
import '../css/online-indicator.css'

class OnlineIndicator extends React.Component {

    state = {
        isOnline: navigator.onLine
    }
    componentDidMount() {
        this.OnlineID = setInterval(
            () => this.tick()
            , 3500 // RUN EVERY 3.5 SEC
        );
    }

    componentWillUnmount() {
        clearInterval(this.OnlineID)
    }

    tick() {
        // IN CHROME AND SAFARI 4+ YOU CANNOT KNOW FOR SURE 
        //IF YOU ARE ONLINE OR OFFLINE BY navigator.onLine
        var isOnline

        fetch("http://myexternalip.com/json")
        .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a probelem. Status Code:' + response.status);
                return
            }
            isOnline = response.ok ? true : false
            return isOnline
        }).catch(() => {
                console.log('Fetching Error');
        }).finally(() => {
            // UPDTE THE NETWORK STATUS
            this.setState({
                isOnline
            })
        })
    }

    render() {
        return (
            <span className={`dot circle ${this.state.isOnline ? ' prim-bcg' : ' offline'} `}>{' '}</span>
            
        );
    }
}

export default OnlineIndicator;