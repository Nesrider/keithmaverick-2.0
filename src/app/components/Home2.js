import React, {Component} from 'react';
import ReactSVG from 'react-svg';
import './Home2.scss';
import $ from 'jquery';

export class Home2 extends Component {

	constructor(props) {
		super(props);

		$(window).resize(() =>
			this.resizeHome()
		);
	}

	resizeHome() {
		$('.Home2').height($(window).height() - $('header').height());
	}

	componentDidMount() {
		this.resizeHome();
	}

	handleFadeIn() {
		$('#home_back').fadeIn(200);
	}

	render() {
		return (
			<div className="Home2">
				<div className="HomeImage">
					<img id="home_back" src="./images/home_opt.png" onLoad={this.handleFadeIn}/>
					<div className="HomeImageOpacity"/>
				</div>
				<ReactSVG path="./images/logo.svg" className="logoHome"/>
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
