import React, {Component} from 'react';
import {Header} from '../components/Header';
import {MainViewer} from '../components/MainViewer';

export class app extends Component {

	updateSubjects(subjects) {
		this.props.subjects = subjects;
	}

	onhandleChangeSub() {

	}

	render() {
		return (
			<div>
				<Header changeSub={this.onhandleChangeSub} curSub={this.props.subject} parentSub={this.updateSubjects}/>
				<MainViewer/>

			</div>
		);
	}

}

app.defaultProps = {
	subject: -1,
	subjects: []
};

app.propTypes = {
	subject: React.PropTypes.number,
	subjects: React.PropTypes.node
};
