import React from "react";
import dateFormat from "dateformat";

const LoadComments = (props) => {
  return props.comments.map((comment) => {
    return (
      <div
        key={comment.id}
        style={{ margin: "20px", fontFamily: "'Proza Libre', sans-serif" }}
      >
        <h6>
          <b>{comment.author}</b>
        </h6>
        <p>{comment.comment}</p>
        <p style={{ fontSize: "13px", paddingBottom: "10px" }}>
          {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}
        </p>
      </div>
    );
  });
};

export default LoadComments;
