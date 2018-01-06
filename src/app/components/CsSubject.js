import React, {Component} from 'react';
import {Subject} from './Subject';

export class CsSubject extends Component {
	render() {
		return (
			<Subject subjectID="1" path="/cs" subjectName="Computer Science" icon="./images/icons/code.svg" curImage={this.props.params.imageName} albumStyle={false}/>
		);
	}
}

CsSubject.propTypes = {
	params: React.PropTypes.object
};
