import React, {Component} from 'react';
import './About2.scss';
import {aboutContent, aboutPic} from '../constants/aboutConstants';
import $ from 'jquery';

export class About2 extends Component {

	constructor(props) {
		super(props);

		this.state = {
			content: aboutContent
		};
	}

	handleFadeIn() {
		$('#aboutPhoto').fadeIn(200);
	}

	addNewLine(contentLength, i) {
		if (i !== contentLength) {
			return (<br/>);
		}

		return (<div></div>);
	}

	skillMeter(item) {
		return (<tr className="row" key={item.skill}>
			<td className="skill col-xs-6 col-sm-6 col-md-6 col-lg-6">{item.skill}</td>
			<td className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<div className="skillMeter">
					<div className="bar" style={{width: `${item.score * 10}%`}}>
						&nbsp;
					</div>
				</div>
			</td>
		</tr>);
	}

	render() {
		const content = this.state.content;
		const experienceLength = content.Experience.length - 1;
		const tech = content.Skills.Tech.map(item => this.skillMeter(item));
		const design = content.Skills.Design.map(item => this.skillMeter(item));
		const hobbies = content.Skills.Hobbies.map(item => this.skillMeter(item));

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

		return (
			<div className="container aboutSub">
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
					<div className="container containerDesc aboutText">
						<div className="row aboutBoxCol">
							<div className="center-block">
								<div className="aboutBoxTitle">
									<b>Software Engineer</b>
								</div>
								<div>
									{content.Description}
								</div>
							</div>
						</div>
						<div className="row aboutBoxCol">
							<div className="center-block">
								<div className="aboutBoxTitle">
									<b>The Website</b>
								</div>
								<div>
									{content.Website}
								</div>
							</div>
						</div>
						<div className="row aboutBoxCol">
							<div className="center-block">
								<div className="aboutBoxTitle">
									<b>Experience</b>
								</div>
								<div>
									{experience}
								</div>
							</div>
						</div>
						<div className="row doubleBoxCol">
							<div className="col col-lg-6 leftBox">
								<div className="aboutSkills aboutBoxCol">
									<div className="aboutBoxTitle">
										<b>Programming</b>
									</div>
									<table>
										<tbody>
											{tech}
										</tbody>
									</table>
								</div>
							</div>
							<div className="col col-lg-6 rightBox">
								<div className="aboutSkills aboutBoxCol">
									<div className="aboutBoxTitle">
										<b>Design</b>
									</div>
									<table>
										<tbody>
											{design}
										</tbody>
									</table>
									<br/>
									<br/>
									<br/>
									<div className="aboutBoxTitle">
										<b>Hobbies</b>
									</div>
									<table>
										<tbody>
											{hobbies}
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="row aboutBoxCol">
							<div className="center-block">
								<div className="aboutBoxTitle">
									<b>Thank you</b>
								</div>
								<div>
									{content.Thankyou}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container aboutImg">
					<img id="aboutPhoto" src={aboutPic} onLoad={this.handleFadeIn}/>
				</div>
			</div>
		);
	}
}
