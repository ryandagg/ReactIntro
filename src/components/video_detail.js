import React from 'react';

const VideoDetail = ({video}) => {
	if(video == null){
		return <div>Loading ...</div>;
	}

	const videoID = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoID}`;
	return (
		<div className="video-detail col-mid-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoDetail;