import "./css/style.css";
import {Col, Card} from "react-bootstrap";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function SingleBook({book, selected, bookSelected}) {
  const {theme} = useContext(ThemeContext)
  

  return (
    <>
      <Col sm={12} md={4} lg={3}>
        <Card className={theme === 'light'? 'h-100 bookCard' : 'bg-dark h-100 bookCard'}>
          <Card.Img
            className={bookSelected===book.asin ? "borderRed" : ""}
            onClick={() => selected(book.asin) }
            variant="top"
            src={book.img}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="fs-6">{book.title}</Card.Title>
              <Card.Text className="text-center">{book.price} €</Card.Text>
            </div>
            
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default SingleBook;
