import React, {Component} from 'react';

export class ProjectThumbnail extends Component {

	render() {
		return (
			<div>
				<img className="thumbnail" src={this.props.thumbnail}/>
				<div>
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
