import SingleBook from "./SingleBook";
import { books } from "../data/books";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from "react";

function AllTheBooks() {
  const [search, setSearch] = useState('')
  const [filterBook, setFilterBook] = useState(books)
  const filter = (searchValue) => {
    setSearch(searchValue.target.value)
    const filtered = books.filter((element) => {
      return search.toLocaleLowerCase()===''? element : element.title.toLocaleLowerCase().includes(searchValue.target.value.toLocaleLowerCase())
    })
    setFilterBook(filtered)
  }


  return (
    <>   
    <Container className="mb-5">
    <InputGroup className="mb-5">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
        <Form.Control onChange={filter}
          placeholder="Look for your book"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Row className='gy-4'>
        {filterBook.map((element) => (
          <SingleBook book={element} />
        ))}
      </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;
