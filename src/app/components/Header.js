'use strict';
import React, {Component} from 'react';
import './Header.scss';
import {getSubjects} from '../constants/dbConstants';
import $ from 'jquery';

export class Header extends Component {

	handlePopNav() {
		if ($('.navPop').hasClass('navPopped')) {
			$('.navPop').removeClass('navPopped');
			$('.fa-bars').removeClass('navMenuPopped');
			$('.navPop').animate({
				right: '-175px'
			});
		} else {
			$('.navPop').addClass('navPopped');
			$('.fa-bars').addClass('navMenuPopped');
			$('.navPop').animate({
				right: '0px'
			});
		}
	}

	setResult(result) {
		this.setState({subjects: result.SUBJECT});
		console.log(result);
	}

	constructor(props) {
		super(props);
		this.state = {
			subjects: []
		};

		this.subjects = [];
		$.ajaxSetup({async: false});
	}

	componentDidMount() {
		$.ajax({
			url: getSubjects,
			datatype: 'jsonp',
			success: response =>
				this.setResult(response)
		});
	}

	render() {
		const subjects = this.state.subjects.map(item =>
			(<li key={item.SUBJECT_ID} className={' tab col col-xs-2 col-sm-2 col-mid-2 col-lg-2'}>
				<h6 >{item.SUBJECT_NAME}</h6>
			</li>)
		);

		const subVertical = this.state.subjects.map(item =>
			(<li key={item.SUBJECT_ID} className={'sub'} >
				<h6>{item.SUBJECT_NAME}</h6>
			</li>)
		);

		const social = (
			<div className={'col socialMedia col-xs-3 col-sm-3 col-mid-3 col-lg-3'}>
				<i className={"fa fa-facebook-square col-xs-2 col-sm-2 col-mid-2 col-lg-2"} aria-hidden="true"></i>
				<i className={"fa fa-linkedin-square col-xs-2 col-sm-2 col-mid-2 col-lg-2"} aria-hidden="true"></i>
				<i className={"fa fa-instagram col-xs-2 col-sm-2 col-mid-2 col-lg-2"} aria-hidden="true"></i>
				<i className={"fa fa-github-square col-xs-2 col-sm-2 col-mid-2 col-lg-2"} aria-hidden="true"></i>
			</div>
		);

		return (
			<div className={'headerParent'}>
				<header className={'container'}>
					<div className={'row'}>
						<div className={'col col-xs-6 col-sm-4 col-mid-3 col-lg-3 title'}>
							<h2>{'Keith Maverick'}</h2>
						</div>
						<ul className={'col col-xs-1 col-sm-8 col-mid-6 col-lg-6 '}>
							{subjects}
						</ul>
						{social}
						<div className={'navMenu col-xs-5 col-sm-5'}>
							<div className={'col col-xs-5 col-sm-5'}></div>
							<div className={'col col-xs-2 col-sm-2'}>
								<i className={'fa fa-bars'} aria-hidden="true" onClick={this.handlePopNav}></i>
							</div>
						</div>

					</div>
				</header>
				<div className={'navPop'}>
					<div className={'topNav'}>
					</div>

					<ul>
						{subVertical}
					</ul>
				</div>
			</div>
		);
	}

}

Header.propTypes = {
};

