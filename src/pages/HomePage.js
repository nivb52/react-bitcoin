// display: User Name and Coins

import React, { Component } from "react";
import { connect } from "react-redux";
import MovesList from "../cmps/MovesList";
import HomeDataShow from "../cmps/HomeDataShow";
import { NavLink } from "react-router-dom";

import BitcoinService from "../services/BitcoinService";

class Home extends Component {
	state = {
		rate: null
	};

	async componentDidMount() {
		let usdToBtcRate;
		try {
			usdToBtcRate = await BitcoinService.getRatePrm(1);
			usdToBtcRate = 1 / usdToBtcRate;
			usdToBtcRate = usdToBtcRate.toFixed(2);
			this.setState({ rate: usdToBtcRate });
		} catch {
			usdToBtcRate = "check again later";
			this.setState({ rate: "" });
		}
	}

	// ============================
	//  RENDER
	// ============================
	render() {
		const { rate } = this.state;

		const { user } = this.props;
		const { moves } = user || [];

		// CUT NAME
		var name = "";
		// check if we have obj user with key name
		if (user && user.name) {
			// trim the name
			name = name.substring(0, 10);
		}

		//DATA1 FOR SHOW
		const rateDisplay = [
			{ text: "1฿", style: "" },
			{ text: "= ", style: "pad-left-1rem" },
			{ text: +rate, style: "pad-left-1rem" },
			{ text: "$", style: "pad-left-halfrem" }
		];

		//DATA2 FOR SHOW
		const coinsDisplay = [
			{ text: user.coins, style: "size-1" },
			{ text: "btc", style: "uppercased text-center size-medium" }
		];

		// ============================
		//  RENDER -> return
		// ============================
		return (
			<section className="flex container center width-90">
				<div className="pad-halfrem">
					<h1 className="title capitalized size-3 text-center">
						hello
						<span className="prim-color"> {name}</span>
					</h1>
				</div>

				{name ? (
					""
				) : (
					<NavLink className="flex center text-black width-inherit max-width-25 pointer " to="/signup">
						<div
							className="bold prim-bcg text-center 
         mar-top-1rem text-black btn btn-small width-inherit "
						>
							<span className="capitalized">
								{name ? "your balance" : "login"}
							</span>
						</div>
					</NavLink>
				)}
				<div className="pad-top-1rem"></div>

				{user && <HomeDataShow data={coinsDisplay} />}

				<HomeDataShow data={rateDisplay} />

				<div className="width-50 mar-top-3rem text-left">
					<MovesList lastMoves={moves} />
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps)(Home);
