import React, {Component} from 'react';
import './ProjectThumbnail.scss';
import $ from 'jquery';

export class ProjectThumbnail extends Component {

	fadeIn() {
		const imgId = `thumb${this.props.imageId}`;
		return () => $(`#${imgId}`).fadeIn(200);
	}

	render() {
		const imgId = `thumb${this.props.imageId}`;
		return (
			<div className="col projectBlock col-xs-12 col-sm-6 col-mid-3 col-lg-3">
				<div className="projectBlockImg">
					<img id={imgId} className="thumb" src={this.props.thumbnail} onLoad={this.fadeIn()}/>
				</div>
				<div className="projectTitle">
					{this.props.projectName}
				</div>
			</div>
		);
	}

}

ProjectThumbnail.propTypes = {
	thumbnail: React.PropTypes.string,
	projectName: React.PropTypes.string,
	imageId: React.PropTypes.number
};
