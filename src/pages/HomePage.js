// Use UserService.getUser and BitcoinService and display:
//  User Name and Coins
import React, { Component } from 'react';

import { connect } from 'react-redux';

class Home extends Component {


  render() {
    return (
   <section className="flex container center width-90">
      <div className="pad-1rem">
        <h1 className="title capitalized size-3"> hello <span> name</span></h1>
        
        <div className="flex-row justify-evenly size-6 pad-top-2rem">
          <span className="capitalized "> coines </span>
          <span> 100 </span>
        </div>
        <div className="flex-row justify-evenly size-6 pad-top-2rem">
          <span className="uppercased"> btc </span>
          <span> 1 </span>
        </div>
      </div>

        <div>
          <p className="width-50 mar-top-3rem">
           TODO: <br/>
          - MovesList  props: title, moves
          - TransferFund   props: contact, maxCoins, onTransferCoins
            
        </p>

        </div>
    </section>
    );
  }
};

const mapStateToProps = state => {
  return {

  }
}

// const mapDispatchToProps

export default Home