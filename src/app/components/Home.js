import React, {Component} from 'react';
import './Home.scss';
import {homeContent} from '../constants/homeConstants';
import $ from 'jquery';

export class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			contents: homeContent,
			hovered: -1
		};

		$('.homeBlock').mouseover(() =>
			$(this).animate({
				opacity: '0'
			}, 25));
	}

	style(item, i) {
		if (this.state.hovered === i) {
			return {backgroundImage: `url(${item.ImageHover})`};
		}
		return {backgroundImage: `url(${item.ImageDir})`};
	}

	render() {
		const homeBlocks = this.state.contents.map((item, i) =>
			(<div id={item.Name} className="row homeBlock" style={this.style(item, i)} key={item.Name} >
				<div className="blockGradient">
				</div>
				<div className="blockColor">
				</div>
				<div className="blockText blockRight">
					<div className="blockTitle">
						{item.Name}
					</div>
					<div className="blockDesc">
						{item.Description}
					</div>
				</div>
			</div>)
		);

		return (
			<div className="container homeBlocks">
				{homeBlocks}
			</div>
		);
	}

}
