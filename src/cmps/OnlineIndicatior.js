import React from 'react';
import '../css/online-indicator.css'

class OnlineIndicator extends React.Component {

    state = {
        isOnline: navigator.onLine,
        isNotMobile : navigator.platform === "Win32" || navigator.vendor ==="Apple Computer, Inc." || navigator.cookieEnabled 
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
        if (this.state.isNotMobile) {

            var isOnline
            fetch("https://myexternalip.com/json")
            // fetch("https://nivb52.github.io/react-bitcoin/favicon.ico")
            .then((response) => {
                if (response.status !== 200 && response.status !== 404) {
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
        } else {
            // NOT MOBILE
            this.setState({
                isOnline: navigator.onLine
            })
        }
    }

    render() {
        return (
            <span className={`dot circle ${this.state.isOnline ? ' prim-bcg' : ' offline'} `}>{' '}</span>
            
        );
    }
}

export default OnlineIndicator;