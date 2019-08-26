// display: User Name and Coins

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovesList from '../cmps/MovesList';

class Home extends Component {


  render() {
    const {moves} = this.props;
    const {user} = this.props
    const {_id} = this.props

    // if (!_id)  this.props.history.push('/signup')

    return (
   <section className="flex container center width-90">
      <div className="pad-1rem">
        <h1 className="title capitalized size-3 text-center"> 
        hello 
        <span className="prim-color"> {user.name}</span>
        </h1>
        <div className="bold prim-bcg text-center 
         mar-top-1rem text-black btn  width-inherit"> 
          <span className="capitalized">
            your balance
            </span>
        </div>
        <div className="pad-top-2rem"></div>
        <div className="flex-row justify-evenly ">
          <span className="size-1"> {user.coines} </span>
          <span className=" uppercased text-center size-medium"> btc </span>
        </div>
        <div className="flex-row justify-evenly size-6 pad-top-2rem">
          <span className="capitalized">rate </span>
          <span> 1 </span>
          <span> $ </span>
        </div>
      </div>

        <div className="width-50 mar-top-3rem text-left">
            
        <MovesList lastMoves={moves}/>
          </div>
    </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    user : state.user
  }
}



export default connect(mapStateToProps)(Home)