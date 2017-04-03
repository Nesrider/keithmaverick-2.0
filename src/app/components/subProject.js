import React, {Component} from 'react';
import $ from 'jquery';
import {getProjectsBySubId, getImagesBySubId} from '../constants/dbConstants';

export class subProject extends Component {

	setProjectResult(response) {
		this.projects = response;
	}

	setImageResult(response) {
		this.projectImages = response;
	}

	constructor(props) {
		super(props);
		this.projectImages = [];
		this.projects = [];
		this.subjectId = this.props.curSub;
	}

	projectList(item, images) {
		const projectImage = images.filter(el =>
			el.PROJECT_ID === item.PROJECT_ID
		);

		const curImages = projectImage.map(curImage =>
			(<li key={curImage.IMAGE_ID} className={'col'}>
				{curImage.IMAGE_NAME}
			</li>)
		);

		return (
			<div>
				<div className={'projectTitle'}>
					{item.PROJECT_NAME}
				</div>
				<ul className={'row'}>
					{curImages}
				</ul>
			</div>
		);
	}


	render() {
		$.ajax({
			url: `${getProjectsBySubId}{this.subjectId}`,
			datatype: 'jsonp',
			success: response =>
				setProjectResult(response)
		});

		$.ajax({
			url: `${getImagesBySubId}{this.subjectId}`,
			datatype: 'jsonp',
			success: response =>
				setImageResult(response)
		});

		const curProjects = this.projects.map(item => 
			this.projectList(item, this.projectImages));

		return (
			<div className={'container'}>
				{curProjects}
			</div>
		);
	}

}