import React, {Component} from 'react';
import './Log.scss';
import {logs} from '../constants/logConstants';
import {TweenMax} from 'gsap';
import $ from 'jquery';

export class Log extends Component {
	constructor(props) {
		super(props);
		this.containerAdd = this.containerAdd.bind(this);
	}

	componentWillEnter(callback) {
		const el = this.container;
		const logHeight = $(".logs").height();
		const logPxHeight = `${logHeight}px`;
		TweenMax.fromTo(el, 0.4, {opacity: 0, height: "0px"}, {opacity: 1, height: logPxHeight, onComplete: callback});
	}

	componentWillLeave(callback) {
		const el = this.container;
		const logHeight = $(".logs").height();
		const logPxHeight = `${logHeight}px`;
		TweenMax.fromTo(el, 0.4, {opacity: 1, height: logPxHeight}, {opacity: 0, height: "0px", onComplete: callback});
	}

	containerAdd(container) {
		this.container = container;
	}

	render() {
		const logTable = logs.map(item =>
			(<tr key={item.vers}>
				<td className="logVers">{item.vers}</td>
				<td className="logNote">{item.logNote}</td>
				<td className="logDate">{item.date}</td>
			</tr>
			)
		);

		return (
			<div className="logs" ref={this.containerAdd}>
				<table className="logTable">
					<tbody>
						<tr>
							<th className="logVers">
								Version
							</th>
							<th className="logNote">
								Log
							</th>
							<th className="logDate">
								{"Date"}
							</th>
						</tr>
						{logTable}
					</tbody>
				</table>
			</div>
		);
	}

}
