import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const VideoListItem = ({ video, mode }) => {
  return (
    <Card
      style={{
        flexBasis: "260px",
        marginBottom: "10px",
        marginTop: "40px",
        marginLeft: "auto",
      }}
    >
      <Link
        to={
          mode === "search"
            ? `/videos/${video.id.videoId}`
            : `/videos/${video.id}`
        }
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Card.Img
          variant="top"
          src={video.snippet.thumbnails.high.url}
          width="150px"
          height="150px"
        />
        <Card.Body>
          <Card.Title>{video.snippet.title}</Card.Title>
          <Card.Text>
            <span style={{ fontWeight: "bold" }}>
              {" "}
              <img
                src={video.snippet.channelId}
                alt="channelLogo"
                style={{ width: "50px", height: "50px" }}
              />{" "}
            </span>{" "}
            {video.snippet.channelTitle}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default VideoListItem;
