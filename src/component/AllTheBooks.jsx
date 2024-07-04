import SingleBook from "./SingleBook";
import { books } from "../data/books";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';

function AllTheBooks() {
  return (
    <>
    <Container className="mb-5">
      <Row className='gy-4'>
        {books.map((element) => (
          <SingleBook book={element} />
        ))}
      </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;
