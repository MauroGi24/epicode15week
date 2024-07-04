import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/style.css"

function SingleBook(book) {
    console.log(book)
  return (
    <>
      <Col  sm={12} md={4} lg={2}>
        <Card className="h-100 bookCard">
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
