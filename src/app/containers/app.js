import React, {Component} from 'react';
import {Header} from '../components/Header';

export class app extends Component {

	constructor(props) {
		super(props);

		this.state = {
			subject: -1
		};

		this.onhandleChangeSub = this.onhandleChangeSub.bind(this);
	}

	updateSubjects(subjects) {
		this.props.subjects = subjects;
	}

	onhandleChangeSub(item) {
		console.log(`IN HERE\n\n${item.SUBJECT_NAME}`);
		this.setState({
			subject: item.SUBJECT_ID
		});
	}

	render() {
		console.log(this.state.subject);

		return (
			<div>
				<Header changeSub={this.onhandleChangeSub} curSub={this.props.subject} parentSub={this.updateSubjects}/>
				{this.props.children}
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
	children: React.PropTypes.node
};
