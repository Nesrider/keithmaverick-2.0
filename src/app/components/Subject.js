import React, {Component} from 'react';
import {getImagesBySubId, getProjectsBySubId} from '../constants/dbConstants';
import {ProjectThumbnail} from './ProjectThumbnail';
import {ProjectImage} from './ProjectImage';
import {Link} from 'react-router';
import "./Subject.scss";
import $ from 'jquery';

export class Subject extends Component {

	constructor(props) {
		super(props);
		this.state = {
			subProjects: null,
			subImages: null,
			numPerRow: 4,
			curLocation: null
		};
	}

	setImages(images) {
		this.setState({
			subImages: images.IMAGE
		});
	}

	setProjects(projects) {
		this.setState({
			subProjects: projects.PROJECT
		});
	}

	componentDidMount() {
		const getImages = getImagesBySubId +
		this.props.subjectID;

		const getProjects = getProjectsBySubId +
		this.props.subjectID;

		$.ajax({
			url: getImages,
			datatype: 'jsonp',
			success: response =>
				this.setImages(response)
		});

		$.ajax({
			url: getProjects,
			datatype: 'jsonp',
			success: response =>
				this.setProjects(response)
		});

		this.setState({
			curLocation: this.context.location.pathname
		});
	}

	getProjectName(projectId) {
		const subProjects = this.state.subProjects;
		const base = subProjects[0].PROJECT_NAME;

		return this.state.subProjects.reduce(((output, curProject) =>
			curProject.PROJECT_ID === projectId ? curProject.PROJECT_NAME : output), base);
	}

	buildProjects() {
		const curLocation = this.state.curLocation;
		const subImages = this.state.subImages;
		const numPerRow = this.state.numPerRow;
		const output = [];
		const isAlbumStyle = this.props.albumStyle;
		let pushCount = -1;

		if (subImages === null) {
			return (
				<div>
				</div>
			);
		}

		const subLength = subImages.length;
		let curProjectId = subImages[0].PROJECT_ID;

		if (isAlbumStyle) {
			pushCount += 1;
			output.push(
				<div key={-1}>
					<div className="projectName">
						{this.getProjectName(curProjectId)}
					</div>
					<hr/>
				</div>
			);
		}

		let row = [];

		for (let i = 0; i < subLength; i++) {
			const curImageProjectId = subImages[i].PROJECT_ID;
			const curImageBack = subImages[i].IMAGE_BACK;
			const curImageName = subImages[i].IMAGE_NAME;
			const curThumbnail = (
				<Link key={i} to={`${curLocation}/${i}`}>
					<ProjectThumbnail thumbnail={curImageBack} projectName={curImageName}/>
				</Link>
			);

			if (row.length < numPerRow && (curProjectId === curImageProjectId || !isAlbumStyle)) {
				row.push(curThumbnail);
			} else if (row.length < numPerRow && curProjectId !== curImageProjectId) {
				curProjectId = curImageProjectId;

				pushCount += 1;
				output.push((
					<div key={i + subLength} className="row">
						{row}
					</div>
				));

				pushCount += 1;
				output.push((
					<div key={i + (subLength * 2)}>
						<div className="projectName">
							{this.getProjectName(curProjectId)}
						</div>
						<hr/>
					</div>
				));

				row = [curThumbnail];
			} else {
				pushCount += 1;
				output.push((
					<div key={i + subLength} className="row">
						{row}
					</div>
				));
				row = [curThumbnail];
			}

			if (i === (subLength - 1)) {
				pushCount += 1;
				output.push((
					<div key={i + subLength * 3} className="row">
						{row}
					</div>
				));
			}
		}

		if (pushCount === 100) {
			return 1;
		}

		return output;
	}

	buildImage() {
		const curImage = this.props.curImage;

		if (curImage === undefined) {
			return (<div></div>);
		}

		const index = parseInt(this.props.curImage);
		const imageObj = this.state.subimages[index];
		return (
			<div>
				<ProjectImage imageObject={imageObj}/>
			</div>
		);
	}

	render() {
		const projects = this.buildProjects();

		return (
			<div className="container">
				<div className="container projectImage">
				</div>
				<div className="container Subject">
					<div className="row subjectName">
						<div className="col">
							{this.props.subjectName}
						</div>
					</div>
					{projects}
				</div>
			</div>
		);
	}

}

Subject.propTypes = {
	subjectID: React.PropTypes.string,
	albumStyle: React.PropTypes.bool,
	subjectName: React.PropTypes.string,
	curImage: React.PropTypes.string,
	location: React.PropTypes.object
};

Subject.contextTypes = {
	location: React.PropTypes.object
};
