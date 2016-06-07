import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
	constructor(props){
		super(props);
		this.onVideoSelect = props.onVideoSelect;
	}

	render(){
		const videoItems = this.props.videos.map((elem) => {
			return <VideoListItem onVideoSelect={this.onVideoSelect} key={elem.etag} video={elem}/>}
		);
		return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		)
	}
}

export default VideoList;