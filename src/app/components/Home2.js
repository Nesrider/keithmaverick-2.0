import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import './Home2.scss';
// import $ from 'jquery';

export class Home2 extends Component {

	render() {
		return (
			<div className="Home2">
				<div className="HomeImage">
					<img src="../images/home_opt.png"/>
					<div className="HomeImageOpacity"/>
				</div>
				<ReactSVG path="../images/logo.svg" className="logoHome"/>
				<div className="HomeWords">
					<div className="HomeTitle">
						{"It's A New Style"}
					</div>
					<div className="HomeBlurb">
						{"Software engineer, designer, adventurer, but definitely not a doctor."}
					</div>
				</div>
			</div>
		);
	}
}
