import React from "react";

const SingleComment = ({ comment }) => {
  return (
    <div className="single-comment mb-2 p-2 border rounded">
      <p className="mb-1">
        <strong>{comment.user || "Anonimo"}</strong>
      </p>
      <p className="mb-1">{comment.text}</p>
      <p className="mb-0">
        <em>Voto: {comment.rating}/5</em>
      </p>
    </div>
  );
};

export default SingleComment;
