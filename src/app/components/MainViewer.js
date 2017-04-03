import React, {Component} from 'react';
import './MainViewer.scss';
import {Home} from './Home';

export class MainViewer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			curSub: -1
		};
	}

	homepage() {
		return (
			<div className="mainParent">
				<Home/>
			</div>
		);
	}

	render() {
		if (this.state.curSub === -1) {
			return this.homepage();
		}
	}

}
