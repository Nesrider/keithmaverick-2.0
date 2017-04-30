import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import './Home2.scss';
// import $ from 'jquery';

export class Home2 extends Component {

	render() {
		return (
			<div className="Home2">
				<ReactSVG path="../images/logo.svg" className="logoHome"/>
				<div className="HomeTitle">
					{"It's A New Style"}
				</div>
			</div>
		);
	}
}
