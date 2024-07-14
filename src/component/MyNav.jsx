import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { InputGroup, Form } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';
import { Button } from "react-bootstrap";

function MyNav({filter}) {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <Navbar className={theme === 'light'? 'mb-5' : 'bg-dark mb-5'} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Epic Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
            <Button onClick={() => toggleTheme()} variant="primary">Set Theme</Button>
          </Nav>
        </Navbar.Collapse>
        <InputGroup className="mb-5">
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
          <Form.Control
            onChange={filter}
            placeholder="Look for your book"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </Container>
    </Navbar>
  );
}

export default MyNav;