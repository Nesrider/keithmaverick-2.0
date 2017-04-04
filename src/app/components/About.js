import React, {Component} from 'react';
import './About.scss';
import {aboutContent} from '../constants/aboutConstants';

export class About extends Component {

	constructor(props) {
		super(props);

		this.state = {
			content: aboutContent
		};
	}

	render() {
		return (
			<div className="container aboutPage">
				<div>
					ABOUT ME
				</div>
			</div>
		);
	}
}
