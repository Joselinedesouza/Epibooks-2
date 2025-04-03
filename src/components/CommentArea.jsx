import React, { Component } from "react";
import CommentList from "../components/CommentLists";
import AddComment from "../components/AddComments";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGE1NjM4MzRiZjAwMTUwMDA5ZWIiLCJpYXQiOjE3NDM2ODA5NTUsImV4cCI6MTc0NDg5MDU1NX0.eUEdO6Xo7sMCUSlmWNQm_vy_Xz7ezGpz1chLlenM-iI",
          },
        }
      );
      if (!response.ok) throw new Error("Errore nel recupero dei commenti");
      const data = await response.json();
      this.setState({ comments: data });
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  // Viene chiamato subito dopo il montaggio del componente
  componentDidMount() {
    this.fetchComments();
  }

  // Aggiorna lo stato aggiungendo un nuovo commento
  addComment = (newComment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }));
  };

  render() {
    return (
      <div className="comment-area mt-3">
        <CommentList comments={this.state.comments} />
        <AddComment
          bookId={this.props.bookId}
          onCommentAdded={this.addComment}
        />
      </div>
    );
  }
}

export default CommentArea;
