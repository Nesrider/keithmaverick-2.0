import React, {Component} from 'react';
import {Subject} from './Subject';

export class PhotoSubject extends Component {
	render() {
		return (
			<Subject subjectID="4" path="/photo" subjectName="Photography" curImage={this.props.params.imageName} albumStyle/>
		);
	}
}

PhotoSubject.propTypes = {
	params: React.PropTypes.object
};
