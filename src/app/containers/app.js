import React, {Component} from 'react';
import {Header} from '../components/Header';
import './app.scss';

export class app extends Component {

	constructor(props) {
		super(props);

		this.state = {
			subject: -1
		};

		this.onhandleChangeSub = this.onhandleChangeSub.bind(this);
	}

	getChildContext() {
		return {
			location: this.props.location
		};
	}

	updateSubjects(subjects) {
		this.props.subjects = subjects;
	}

	onhandleChangeSub(item) {
		this.setState({
			subject: item.SUBJECT_ID
		});
	}

	render() {
		return (
			<div>
				<Header changeSub={this.onhandleChangeSub} curSub={this.props.subject} parentSub={this.updateSubjects}/>
				<div className="pageViewer">
					{this.props.children}
				</div>
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
	subjects: React.PropTypes.node,
	children: React.PropTypes.node,
	location: React.PropTypes.object
};

app.childContextTypes = {
	location: React.PropTypes.object
};
