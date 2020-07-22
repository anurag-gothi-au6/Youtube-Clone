import React, { Component } from "react";
import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";
import {
  fetchVideo,
  fetchComments,
} from "../redux/actions/currentVideoActions";
import Comments from "../components/Comments";

export class VideoDetail extends Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId);
    this.props.fetchComments(this.props.match.params.videoId);
  }
  render() {
    return (
      <div>
        {this.props.currentVideo ? (
          <VideoPlayer video={this.props.currentVideo.items[0]} />
        ) : (
          <div className="loader">Loading...</div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          {this.props.comments ? (
            <Comments comments={this.props.comments.items} />
          ) : (
            <div className="loader">Loading...</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentVideo: storeState.currentVideoState.video,
    comments: storeState.currentVideoState.comments,
  };
};

export default connect(mapStateToProps, { fetchVideo, fetchComments })(
  VideoDetail
);
