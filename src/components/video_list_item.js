import React, { Component } from 'react';

class VideoListItem extends Component {
	constructor(props){
		super(props);
		this.video = props.video;
		this.onVideoSelect = props.onVideoSelect;

	}

	render(){
		var video = this.video;
		const imageURL = video.snippet.thumbnails.default.url;
		return (
			<li onClick={ () => this.onVideoSelect(video) }>
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={imageURL}/>
					</div>
					<div className="media-body">
						<div className="media-heading">{video.snippet.title}</div>
					</div>
				</div>
			</li>
		)
	}
}

export default VideoListItem;