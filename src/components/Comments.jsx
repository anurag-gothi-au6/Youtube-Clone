import React from "react";
import CommentListItem from "./CommentListItem";

const Comments = ({ comments }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
      }}
    >
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
