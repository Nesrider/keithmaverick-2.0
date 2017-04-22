import React, {Component} from 'react';
import {TweenMax} from 'gsap';
import './ProjectImage.scss';
import {Link} from 'react-router';
import $ from 'jquery';

export class ProjectImage extends Component {

	constructor(props) {
		super(props);
		this.buildImage = this.buildImage.bind(this);
		this.buildDescription = this.buildDescription.bind(this);
		this.containerAdd = this.containerAdd.bind(this);
		this.state = {
			infoClicked: false
		};
	}

	buildVideo() {
		return (
			<div>
			</div>
		);
	}

	buildImage() {
		const image = this.props.imageObject;

		if (image.IMAGE_TYPE === 2) {
			return this.buildVideo();
		}

		return (
			<div className="projectImageWrapper">
				<img src={image.IMAGE_SOURCE}/>
			</div>

		);
	}

	buildDescription() {
		if (this.state.infoClicked) {
			return (
				<div>
				</div>
			);
		}

		return (
			<div>
			</div>
		);
	}

	handleInfo() {
		if ($(".info").hasClass("infoClicked")) {
			$(".info".removeClass("infoClicked"));
		} else {
			$(".info".addClass("infoClicked"));
		}

		const isInfoClicked = this.state.infoClicked;
		this.setState({
			infoClicked: !isInfoClicked
		});
	}

	componentDidMount() {
		console.log("PROJECT IMAGE COMPONENT DID MOUNT");
	}

	addImage() {
		$(".Subject").addClass("imagePopped");
	}

	componentWillEnter(callback) {
		console.log("PROJECT IMAGE ENTERED");
		const el = this.container;

		const newCallback = () => {
			$(".Subject").addClass("imagePopped");
			callback();
		};

		TweenMax.fromTo(el, 0.4, {opacity: 0, height: "0vh"}, {opacity: 1, height: "57vh", onComplete: newCallback});
	}

	componentWillLeave(callback) {
		console.log("PROJECT IMAGE LEAVED");
		const el = this.container;
		$(".Subject").removeClass("imagePopped");
		TweenMax.fromTo(el, 0.4, {opacity: 1, height: "57vh"}, {opacity: 0, height: "0vh", onComplete: callback});
	}

	containerAdd(container) {
		this.container = container;
	}

	render() {
		const image = this.buildImage();

		return (
			<div className="row projectImage" ref={this.containerAdd}>
				<div className="col col-xs-11 col-sm-5 col-mid-5 col-lg-5 center-block">
					{image}
				</div>
				<div className="close">
					<Link to={this.props.location}>
						<i className="fa fa-times-thin fa-lg closeIcon" aria-hidden="true"></i>
					</Link>
				</div>
				<div className="info" onClick={this.handleInfo}>
					<i className="fa fa-info-circle fa-2x infoIcon" aria-hidden="true"></i>
				</div>
			</div>
		);
	}
}

ProjectImage.propTypes = {
	imageObject: React.PropTypes.object,
	location: React.PropTypes.string
};
