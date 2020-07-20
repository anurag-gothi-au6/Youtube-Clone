import React, { Component } from "react";
import { Comment, Collapse } from "antd";
import Replies from "./Replies";
import ShowMoreText from "react-show-more-text";

class CommentListItem extends Component {
  state = {
    date: new Date(
      this.props.comment.snippet.topLevelComment.snippet.publishedAt
    ),
  };

  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  render() {
    return (
      <div style={{ height: "auto", width: 1100, marginBottom: "20px" }}>
        <Comment
          author={
            <p style={{ color: "grey" }}>
              {
                this.props.comment.snippet.topLevelComment.snippet
                  .authorDisplayName
              }{" "}
              {this.state.date.toDateString()}
            </p>
          }
          avatar={
            <img
              style={{ borderRadius: "50%" }}
              src={
                this.props.comment.snippet.topLevelComment.snippet
                  .authorProfileImageUrl
              }
              alt="Han Solo"
            />
          }
          content={
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              anchorClass=""
              onClick={this.executeOnClick}
              expanded={false}
              width={1100}
            >
              {this.props.comment.snippet.topLevelComment.snippet.textOriginal}
            </ShowMoreText>
          }
        >
          {this.props.comment.replies ? (
            <>
              <Collapse>
                <Collapse.Panel
                  header={`view ${this.props.comment.snippet.totalReplyCount} replies`}
                >
                  <Replies replies={this.props.comment.replies} />
                </Collapse.Panel>
              </Collapse>
            </>
          ) : null}
        </Comment>
        <hr />
      </div>
    );
  }
}
export default CommentListItem;
