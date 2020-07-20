import React, { Component } from "react";
import { Typography, Row, Col } from "antd";
import ShowMoreText from "react-show-more-text";
import {
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";

const { Title } = Typography;


class VideoPlayer extends Component {
  state = {
    date: new Date(this.props.video.snippet.publishedAt),
  };

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  render() {
    //console.log(this.props)
    return (
      <>
        <div
          className="embed-responsive embed-responsive-16by9"
          style={{ height: "auto", width: '80%' }}
        >
          <iframe
            title="video"
            src={`https://www.youtube.com/embed/${this.props.video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <br />
        <div style={{ height: "auto", width: '80%' }}>
          <Title level={3}>{this.props.video.snippet.title}</Title>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span="4">
              <p>{`${this.props.video.statistics.viewCount} views.`}</p>
            </Col>
            <Col span="10">
              <p>{this.state.date.toDateString()}</p>
            </Col>
            <div style={{display:'flex', justifyContent:'center'}}>
              <LikeFilled />
              <p>{`${this.props.video.statistics.likeCount}`}</p>
              <span style={{marginLeft:'20px'}}></span>
              <DislikeFilled />
              <p>{`${this.props.video.statistics.dislikeCount}`}</p>
            </div>
          </Row>
          <hr />
          <br />
          <div style={{ marginLeft: 50 }}>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              anchorClass=""
              onClick={this.executeOnClick}
              expanded={false}
            >
              {this.props.video.snippet.description}
            </ShowMoreText>
          </div>
          <hr />
          <br />
        </div>
      </>
    );
  }
}
export default VideoPlayer;
