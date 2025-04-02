import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import libri from "../Horror/horror_updated.json";
import SingleBook from "./SingleBook";

const BookList = () => {
  console.log("LIBRI IMPORTATI:", libri);

  const primiTreLibri = Array.isArray(libri) ? libri.slice(0, 3) : [];

  return (
    <Container>
      <h3 className="mt-3 text-white text-center">I NOSTRI BESTSELLER:</h3>
      <Row className="justify-content-center">
        {primiTreLibri.length > 0 ? (
          primiTreLibri.map((book) => (
            <Col key={book.asin} xs={12} md={4} lg={3} className="mb-3">
              <SingleBook book={book} />
            </Col>
          ))
        ) : (
          <p className="text-center text-white">Nessun libro disponibile</p>
        )}
      </Row>
    </Container>
  );
};

export default BookList;
