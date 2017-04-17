import React, {Component} from 'react';
import './ProjectThumbnail.scss';

export class ProjectThumbnail extends Component {

	render() {
		return (
			<div className="col projectBlock col-xs-12 col-sm-6 col-mid-3 col-lg-3">
				<div className="projectBlockImg">
					<img src={this.props.thumbnail}/>
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
	projectName: React.PropTypes.string
};
