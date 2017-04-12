'use strict';
import React, {Component} from 'react';
import {Link} from 'react-router';
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
			}, {queue: false});
			$('.navBackground').animate({
				opacity: '0'
			}, {queue: false,
				complete: () =>
				$('.navBackground').css("display", "none")
			});
		} else {
			$('.navPop').addClass('navPopped');
			$('.fa-bars').addClass('navMenuPopped');
			$('.navBackground').css("display", "block");
			$('.navPop').animate({
				right: '0px'
			}, {queue: false});
			$('.navBackground').animate({
				opacity: '0.7'
			}, {queue: false});
		}
	}

	setResult(result) {
		this.setState({subjects: result.SUBJECT});
	}

	constructor(props) {
		super(props);
		this.state = {
			subjects: []
		};

		this.removePop = this.removePop.bind(this);
		this.subjects = [];
		$.ajaxSetup({async: false});
		$(window).resize(this.removePop);

		this.subVertical = this.subVertical.bind(this);
		this.handleHome = this.handleHome.bind(this);
	}

	removePop() {
		const documentWidth = $(document).width();
		if ($('.navPop').hasClass('navPopped') && documentWidth > 768) {
			this.handlePopNav();
		}
	}

	componentDidMount() {
		$.ajax({
			url: getSubjects,
			datatype: 'jsonp',
			success: response =>
				this.setResult(response)
		});
	}

	subject(item, changeSub) {
		const change = () => changeSub(item);
		return (<Link to={item.SUBJECT_LINK} key={item.SUBJECT_ID}>
			<li className={' tab col col-xs-2 col-sm-2 col-mid-2 col-lg-2'} onClick={change}>
				<h6 >{item.SUBJECT_NAME}</h6>
			</li>
		</Link>);
	}

	subVertical(item) {
		return (<Link to={item.SUBJECT_LINK} key={item.SUBJECT_ID}>
			<li className={'sub'} onClick={this.handlePopNav}>
				<h6>{item.SUBJECT_NAME}</h6>
			</li>
		</Link>);
	}

	handleHome() {
		if ($('.navPop').hasClass('navPopped')) {
			this.handlePopNav();
		}
	}

	render() {
		const subject = this.subject;
		const changeSub = this.props.changeSub;
		const subjects = this.state.subjects.map(item =>
			subject(item, changeSub)
		);

		const subVertical = this.state.subjects.map(item =>
			this.subVertical(item)
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
							<Link to="/" className="home" onClick={this.handleHome}>
								<h2>{'Keith Maverick'}</h2>
							</Link>
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
				<div className="navBackground">
				</div>
			</div>
		);
	}

}

Header.propTypes = {
	changeSub: React.PropTypes.func
};

