import React, { Component } from "react";
import { Typography, Row, Col, Avatar, Input } from "antd";
import { Button } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
import { LikeFilled, DislikeFilled, ShareAltOutlined } from "@ant-design/icons";

const { Title } = Typography;

const { TextArea } = Input;

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
          className="embed-responsive embed-responsive-16by9 curVideo"
          style={{ height: "auto", width: "100%" }}
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
        <div style={{ height: "auto", width: "100%" }}>
          <Title level={3}>{this.props.video.snippet.title}</Title>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span="6">
              <p>{`${this.props.video.statistics.viewCount} views.`}</p>
            </Col>
            <Col span="10">
              <p>{this.state.date.toDateString()}</p>
            </Col>
            <Col span="4">
              <LikeFilled />
              <p className='like'>{`${this.props.video.statistics.likeCount}`}</p>
            </Col>
            <Col span="4">
              <DislikeFilled />
              <p className='like'>{`${this.props.video.statistics.dislikeCount}`}</p>
            </Col>
            <Col span="4">
              <ShareAltOutlined />
              <p>share</p>
            </Col>
          </Row>
          <hr />
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span="1">
              <Avatar src={this.props.video.snippet.channelId} />
            </Col>
            <Col span="13">
              <p>{this.props.video.snippet.channelTitle}</p>
            </Col>
            <Col span="2">
              {/* <Button variant="outline-primary">JOIN</Button> */}
            </Col>
            <Col span="2">
              <Button variant="danger">Subscribe</Button>
            </Col>
          </Row>
          <br />
          <div style={{ marginLeft: 50 }}>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              anchorClass=""
              onClick={this.executeOnClick}
              expanded={false}
              width={"100%"}
            >
              {this.props.video.snippet.description}
            </ShowMoreText>
          </div>
          <hr />
          <br />
          <br />
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span="1">
              <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
                A
              </Avatar>
            </Col>
            <Col span="22">
              <TextArea
                style={{ width:'50%' , margin: "auto" }}
                className="commentInput"
                placeholder="Add a Public Comment"
              ></TextArea>
            </Col>
          </Row>
          <br />
          <Button variant="primary" style={{ marginLeft: 50 }}>
            Add Comment
          </Button>
        </div>
      </>
    );
  }
}

export default VideoPlayer;
