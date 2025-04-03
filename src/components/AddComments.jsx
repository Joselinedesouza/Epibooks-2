import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

const URL = `https://striveschool-api.herokuapp.com/api/comments`;
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkOGE1NjM4MzRiZjAwMTUwMDA5ZWIiLCJpYXQiOjE3NDM2ODA5NTUsImV4cCI6MTc0NDg5MDU1NX0.eUEdO6Xo7sMCUSlmWNQm_vy_Xz7ezGpz1chLlenM-iI";

class AddComment extends Component {
  state = {
    comments: { comment: "", rate: "", bookId: this.props.asin },
  };

  sendComments = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state.comments),
      headers: { "Content-Type": "application/json", authorization: TOKEN },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Boom");
        }
      })
      .then((data) => {
        console.log("Commento inviato con successo", data);
        // Puoi resettare il form o aggiornare il componente qui, se necessario.
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.sendComments}>
        <div className="form-group">
          <label htmlFor="comment">Add your comment</label>
          <textarea
            id="comment"
            className="form-control"
            value={this.state.comments.comment}
            required
            onChange={(e) => {
              this.setState({
                comments: {
                  ...this.state.comments,
                  comment: e.target.value,
                },
              });
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Voto (1-5):</label>
          <Form.Group className="mb-3">
            <Form.Label>Voto</Form.Label>
            <Form.Select
              value={this.state.comments.rate}
              onChange={(e) => {
                this.setState({
                  comments: {
                    ...this.state.comments,
                    rate: e.target.value,
                  },
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>
        </div>
        <Button type="submit" className="bg-black opacity-75 text-light mt-3">
          Aggiungi Commento
        </Button>
      </form>
    );
  }
}

export default AddComment;
