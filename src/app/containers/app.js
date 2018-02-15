import React, {Component} from 'react';
import {Header} from '../components/Header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './app.scss';
import {routes} from '../constants/routeConstants';
import $ from 'jquery';

export class app extends Component {

	constructor(props) {
		super(props);

		this.state = {
			subject: -1,
			transitionType: "pageSwap"
		};

		this.onhandleChangeSub = this.onhandleChangeSub.bind(this);

		$(window).resize(() =>
			this.resizePageViewer()
		);
	}

	componentDidMount() {
		this.resizePageViewer();
	}

	resizePageViewer() {
		console.log("resizing page viewer");
		$('.pageViewer').height($(window).height() - $('header').height());
	}

	getIndex(segment) {
		for (let i = 0; i < routes.length; i++) {
			if (routes[i] === segment) {
				return i;
			}
		}

		return -1;
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
		const curIndex = this.state.subject;
		const nextIndex = item.SUBJECT_ID;
		let nextTransition = "";

		if (nextIndex > curIndex) {
			nextTransition = "pageSwap";
		} else {
			nextTransition = "reversePageSwap";
		}

		this.setState({
			subject: nextIndex,
			transitionType: nextTransition
		});
	}

	render() {
		const path = this.props.location.pathname;
		const segment = path.split('/')[1] || 'root';

		return (
			<div>
				<Header changeSub={this.onhandleChangeSub} curSub={this.props.subject} parentSub={this.updateSubjects}/>
				<ReactCSSTransitionGroup component="div" className="pageViewer" transitionName={this.state.transitionType} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, {key: segment})}
				</ReactCSSTransitionGroup>
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
