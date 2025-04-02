import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleBook = ({ book }) => {
  if (!book) {
    return <p></p>;
  }

  return (
    <Card className="h-100 bg-info opacity-75">
      <Card.Img
        variant="top"
        src={book.img || "https://via.placeholder.com/150"} // Placeholder se manca l'immagine
        alt={`Immagine di ${book.title || "Sconosciuto"}`}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{book.title || "Titolo non disponibile"}</Card.Title>
        <Card.Text>€ {book.price || "N/A"}</Card.Text>
        {book.shoplink ? (
          <Button variant="dark" href={book.shoplink} target="_blank">
            Acquista Ora
          </Button>
        ) : (
          <p>Link non disponibile</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
