import React, {Component} from 'react';
import './NotFound.scss';

export class NotFound extends Component {

	render() {
		return (
			<div className="container NotFoundPage">
				<div className="col NotFoundBox">
					<h1>{'404 This page does not exist!'}</h1>
				</div>
			</div>
		);
	}
}

