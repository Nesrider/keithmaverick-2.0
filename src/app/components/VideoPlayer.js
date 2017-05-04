import React, {Component} from 'react';
import videojs from 'video.js';
import './VideoPlayer.scss';

export default class VideoPlayer extends Component {

	componentDidMount() {
		const id = `video${this.props.id}`;
		this.setState({
			player: videojs(id)
		});
	}

	componentWillUnmount() {
		if (this.state.player) {
			this.state.player.dispose();
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			this.state.player.src(nextProps.source);
			this.state.player.poster(nextProps.poster);
		}
	}

	render() {
		const videoId = `video${this.props.id}`;
		const videoSource = this.props.source;
		const videoPoster = this.props.poster;

		const videoHtml = (
			<div>
				<link href="//vjs.zencdn.net/5.4.6/video-js.min.css" rel="stylesheet"/>
				<video id={videoId} className="videoProject video-js vjs-default-skin" controls preload="auto" poster={videoPoster}>
					<source src={videoSource} type="video/mp4"/>
					<p className="vjs-no-js">
						To view this video please enable JavaScript
					</p>
				</video>
			</div>);

		return videoHtml;
	}
}

VideoPlayer.propTypes = {
	id: React.PropTypes.number,
	source: React.PropTypes.string,
	poster: React.PropTypes.string
};
