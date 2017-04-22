import React, {Component} from 'react';
import {Subject} from './Subject';

export class ArchSubject extends Component {
	render() {
		return (
			<Subject subjectID="3" path="/archi" subjectName="Architecture" curImage={this.props.params.imageName} albumStyle/>
		);
	}
}

ArchSubject.propTypes = {
	params: React.PropTypes.object
};
