import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Route, Router, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import BookPage from "./BookPage";
import LocalPage from "./LocalPage";

const RouterPage = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/books">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">홈</Link>
              <Link to="/books">도서검색</Link>
              <Link to="/local">지역검색</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" component={HomePage} exact={true}></Route>
        <Route path="/books" component={BookPage}></Route>
        <Route path="/local" component={LocalPage}></Route>
      </Switch>
    </>
  );
};

export default RouterPage;
