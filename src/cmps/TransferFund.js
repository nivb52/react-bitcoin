// - TransferFund   props: contact, maxCoins, onTransferCoins
/* - show a Transfer Fund form (with an amount field).
- when submitted (call to onTransferCoins):
1) call to UserService to add a move.
2) reduce from the user balance (this money goes nowhere!) using the
UserService.
*/

// LETS BUILD REACT HOOK
import React from 'react'
import '../css/transfer-fund.css'

const transferFund = props => {
    return (
    <React.Fragment>
        <section className="container">
            <div className="is-medium">
                <span > Transfer coins to</span>
                <span className="capitalized"> Name</span>
            </div>
            <div className="flex-row">

                <input className="input-box transfer-input"
                    placeholder="฿"
                    type="number" min="0" max="25" required
                />
                <span> &nbsp;&nbsp;&nbsp;</span>
                <button
                    className="transfer-btn btn-outline prim-bcg capitalized width-medium pointer">
                    ↪
                    {/* → */}
                    {/* ⇒ */}
                    {/* ⇾ */}
                    {/* ฿ */}
                </button>
            </div>
        </section>


    </React.Fragment>
    );
}


export default transferFund