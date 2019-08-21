import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import fdalogo from "../images/fdalogo.png";

const MenuBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="dark"
      style={{ backgroundColor: "#008888" }}
    >
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand>
            <Image src={fdalogo} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/requirements">
              <Nav.Link>Requirements</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/authorizations">
              <Nav.Link>Authorizations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faqs">
              <Nav.Link>FAQs</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar;
