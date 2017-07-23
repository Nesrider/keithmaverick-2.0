import React, {Component} from 'react';
import {TweenMax} from 'gsap';
import './ProjectDescription.scss';

export class ProjectDescription extends Component {

	constructor(props) {
		super(props);
		this.containerAdd = this.containerAdd.bind(this);
	}

	componentWillEnter(callback) {
		const el = this.container;
		TweenMax.fromTo(el, 0.2, {opacity: 0}, {opacity: 1, onComplete: callback});
	}

	componentWillLeave(callback) {
		const el = this.container;
		TweenMax.fromTo(el, 0.2, {opacity: 1}, {opacity: 0, onComplete: callback});
	}

	containerAdd(container) {
		this.container = container;
	}

	render() {
		const imageObject = this.props.imageObject;

		return (
			<div className="descriptionBox" style={{display: "initial"}}ref={this.containerAdd}>
				<div className="descriptionBoxInner col col-xs-10 col-lg-8 center-block">
					<div className="ProjectTitle">
						{imageObject.IMAGE_NAME}
					</div>
					<div className="ProjectBlurb">
						{imageObject.IMAGE_BLURB}
					</div>
					<div className="ProjectTool">
						{imageObject.IMAGE_TOOL}
					</div>
					<div className="ProjectDescription">
						{imageObject.IMAGE_DESCRIPTION}
					</div>
				</div>
			</div>
		);
	}

}

ProjectDescription.propTypes = {
	imageObject: React.PropTypes.object
};
