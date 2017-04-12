import React, {Component} from 'react';
import {getImagesBySubId, getProjectsBySubId} from '../constants/dbConstants';
import {ProjectThumbnail} from './ProjectThumbnail';
import "./Subject.scss";
import $ from 'jquery';

export class Subject extends Component {

	constructor(props) {
		super(props);
		this.state = {
			subProjects: null,
			subImages: null,
			numPerRow: 4
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
	}

	getProjectName(projectId) {
		const subProjects = this.state.subProjects;
		const base = subProjects[0].PROJECT_NAME;

		return this.state.subProjects.reduce(((output, curProject) =>
			curProject.PROJECT_ID === projectId ? curProject.PROJECT_NAME : output), base);
	}

	buildProjects() {
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
			console.log(`PUSH COUNT: ${pushCount}`);
			output.push(
				<div key={-1}>
					{this.getProjectName(curProjectId)}
				</div>
			);
		}

		let row = [];

		for (let i = 0; i < subLength; i++) {
			const curImageProjectId = subImages[i].PROJECT_ID;
			const curImageBack = subImages[i].IMAGE_BACK;
			const curImageName = subImages[i].IMAGE_NAME;
			const curThumbnail = (<ProjectThumbnail key={i} thumbnail={curImageBack} projectName={curImageName}/>);

			if (row.length < numPerRow && (curProjectId === curImageProjectId || !isAlbumStyle)) {
				row.push(curThumbnail);
				console.log("IF STATEMENT");
			} else if (row.length < numPerRow && curProjectId !== curImageProjectId) {
				curProjectId = curImageProjectId;

				console.log("IF ELSE STATEMENT");
				pushCount += 1;
				console.log(`PUSH COUNT: ${pushCount}`);
				output.push((
					<div key={i + subLength} className="row">
						{row}
					</div>
				));

				pushCount += 1;
				console.log(`PUSH COUNT: ${pushCount}`);
				output.push((
					<div key={i + (subLength * 2)}>
						{this.getProjectName(curProjectId)}
					</div>
				));

				row = [curThumbnail];
			} else {
				console.log("ELSE STATEMENT");
				pushCount += 1;
				console.log(`PUSH COUNT: ${pushCount}`);
				output.push((
					<div key={i + subLength} className="row">
						{row}
					</div>
				));
				row = [curThumbnail];
			}

			if (i === (subLength - 1)) {
				console.log("OUT STATEMENT");
				pushCount += 1;
				console.log(`PUSH COUNT: ${pushCount}`);
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

		console.log(output);
		return output;
	}

	render() {
		const projects = this.buildProjects();

		return (
			<div>
				<div className="container Subject">
					{projects}
				</div>
			</div>
		);
	}

}

Subject.propTypes = {
	subjectID: React.PropTypes.string,
	albumStyle: React.PropTypes.bool
};
