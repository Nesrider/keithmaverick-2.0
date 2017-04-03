import React, {Component} from 'react';
import $ from 'jquery';
import {subProject} from './subProject';

export class Projects extends Component {

	static propTypes = {
		parentSubs: React.PropTypes.node
	}

	render() {
		const subPanels = this.props.parentSubs.map(item =>
			(<div>
					<subProject curSub={item.SUBJECT_ID}/>
				</div>
			)
		);

		return (
			<div>
				{subPanels}
			</div>
		)
	}

}