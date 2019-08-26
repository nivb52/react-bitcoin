// - TransferFund   props: contact, maxCoins, onTransferCoins
/* - show a Transfer Fund form (with an amount field).
- when submitted (call to onTransferCoins):
1) call to UserService to add a move.
2) reduce from the user balance (this money goes nowhere!) using the
UserService.
          - TransferFund   props: contact, maxCoins, onTransferCoins

*/


import React from 'react'
import '../css/transfer-fund.css'

class transferFund extends React.Component {

    state = {
        amount: ''
    }

    handleTransfer = e => {
        console.log(this.state.amount, 'to ', this.props.id);
        //maxCoins
        //- when submitted (call to onTransferCoins):

    }

    handleChange = e => {
        this.setState({ amount: e.target.value });
    }

    render() {
        /* ฿ → ⇒ ⇾ ↪*/
        const buttonChar = navigator.platform === "Win32" ? '↪' : '⇒'
        return (

            <section className="container">
                <div className="size-medium mar-bottom-2rem text-center">
                    <span className=""> Transfer coins to</span>
                    <span className="capitalized"> {this.props.name}</span>
                </div>
                <div className="flex-row">

                    <input onChange={this.handleChange}
                        className="input-box transfer-input"
                        placeholder="฿"
                        type="number" min="0" max="25" required
                    />
                    <span> &nbsp;&nbsp;&nbsp;</span>
                    <button
                        onClick={this.handleTransfer}
                        className="transfer-btn btn-outline prim-bcg capitalized width-medium pointer">
                        
                        {buttonChar}

                    </button>
                </div>
            </section>


        );
    }
}

export default transferFund