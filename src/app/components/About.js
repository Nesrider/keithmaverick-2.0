import React, {Component} from 'react';
import './About.scss';
import {aboutContent, aboutPic} from '../constants/aboutConstants';

export class About extends Component {

	constructor(props) {
		super(props);

		this.state = {
			content: aboutContent
		};
	}

	addNewLine(contentLength, i) {
		if (i !== contentLength) {
			return (<br/>);
		}

		return (<div></div>);
	}

	render() {
		const content = this.state.content;
		const experienceLength = content.Experience.length - 1;

		const experience = content.Experience.map((item, i) =>
			(<div key={item.Company}>
				<div className="aboutTextTitle">
					<b>{item.Company}</b>, {item.Position} | {item.Time}
				</div>
				<div className="aboutTextDesc">
					{item.Description}
				</div>
				{this.addNewLine(experienceLength, i)}
			</div>)
		);

		const tech = content.Skills.Tech.map(item =>
			(<li key={item}>
				{item}
			</li>)
		);

		const design = content.Skills.Design.map(item =>
			(<li key={item}>
				{item}
			</li>)
		);

		return (
			<div className="container">
				<div className="container aboutPage">
					<div className="container containerName ">
						<div className="row">
							<div className="col aboutName aboutBox">
								<div className="aboutMainName">
									{content.Name}
								</div>
								<div className="aboutSubName aboutEduName">
									{content.School}
								</div>
								<div className="aboutSubName aboutMajorName">
									{content.Major}
								</div>
							</div>
						</div>
					</div>
					<div className="container containerDesc">
						<div className="row aboutBoxCol ">
							<div className="col-mid-6 col-lg-9 aboutText ">
								<div>
									{content.Description}
								</div>
								<br/>
								<div>
									<b className="aboutBold">Experience</b>
								</div>
								<div>
									{experience}
								</div>
							</div>
							<div className="col-mid-6 col-lg-3 aboutText aboutSplit">
								<br/>
								<div className="aboutSkill">
									<b className="aboutBold">Programming</b>
									<ul className="aboutSkills">
										{tech}
									</ul>
								</div>
								<div className="aboutSkill">
									<b className="aboutBold">Design</b>
									<ul className="aboutSkills">
										{design}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container aboutImg">
					<img src={aboutPic}/>
				</div>
			</div>
		);
	}
}
