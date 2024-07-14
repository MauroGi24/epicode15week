import SingleBook from "./SingleBook";
import {Row, Container, Col} from "react-bootstrap/";
import { useState } from "react";
import CommentArea from "./CommentArea";


function AllTheBooks({filterBook}) {
  const [bookSelected, setBookSelected] = useState(null);
  const selected = (asin) => {
    if (bookSelected === asin) {
      setBookSelected(null)
    } else {
    setBookSelected(asin);
  }
  };

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col md={8} >
          <Row className="gy-4">
          {filterBook.map((element) => (
            <SingleBook book={element} bookSelected={bookSelected} selected={selected}  />
          ))}
          </Row>
          </Col>
          <Col md= {4}>
          {bookSelected && <CommentArea asin={bookSelected}/>}
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default AllTheBooks;
