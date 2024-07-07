import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/style.css"
import { useState } from "react";

function SingleBook(book) {
  const [bookSelected, setBookSelected] = useState(false)
  const selected = () => {
    setBookSelected(!bookSelected)
  }
  return (
    <>
      <Col  sm={12} md={4} lg={2} className={bookSelected ? 'borderRed' : ''} onClick={selected}>
        <Card className= 'h-100 bookCard'>
          <Card.Img variant="top" src={book.book.img} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
            <Card.Title className="fs-6">{book.book.title}</Card.Title>
            <Card.Text className="text-center">{book.book.price} €</Card.Text>
            </div>
            <Button>Sfoglia il libro</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default SingleBook;
