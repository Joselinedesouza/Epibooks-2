import React, { Component } from "react";

class AddComment extends Component {
  state = {
    comment: "",
    rating: 1, // Imposta il valore iniziale come 1
  };

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleRatingChange = (e) => {
    // Assicurati che il valore sia un numero valido (tra 1 e 5)
    const newRating = parseInt(e.target.value, 10);

    // Verifica che newRating sia un numero e sia compreso tra 1 e 5
    if (!isNaN(newRating) && newRating >= 1 && newRating <= 5) {
      this.setState({ rating: newRating });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { comment, rating } = this.state;
    const newComment = {
      comment,
      rating,
      bookId: this.props.bookId,
    };

    // Invia il nuovo commento tramite la funzione passata come prop
    this.props.onCommentAdded(newComment);

    // Resetta il form
    this.setState({ comment: "", rating: 1 });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">Commento:</label>
          <textarea
            id="comment"
            className="form-control"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Voto (1-5):</label>
          <input
            type="number"
            id="rating"
            className="form-control"
            value={this.state.rating}
            min="1"
            max="5"
            onChange={this.handleRatingChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Aggiungi Commento
        </button>
      </form>
    );
  }
}

export default AddComment;
