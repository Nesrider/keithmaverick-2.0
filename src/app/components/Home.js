import React, {Component} from 'react';
import './Home.scss';
import {homeContent} from '../constants/homeConstants';

export class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			contents: homeContent
		};
	}

	render() {
		const homeBlocks = this.state.contents.map(item =>
			(<div className="row homeBlock" key={item.Name} style={{backgroundImage: `url(${item.ImageDir})`}}>
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
