// Use UserService.getUser and BitcoinService and display:
//  User Name and Coins
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {


  render() {
    return (
      <section className="container width-80">
        <h1>Home</h1>

        <div> TODO:
          - MovesList  props: title, moves
          - TransferFund   props: contact, maxCoins, onTransferCoins
          <p className="width-50 mar-top-2rem">
            
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