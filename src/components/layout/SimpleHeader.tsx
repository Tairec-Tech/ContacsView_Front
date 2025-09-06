import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SimpleHeader: React.FC = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-3">
          ContactView
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" className="fw-medium me-2">
              Ingresar
            </Nav.Link>
            <Link to="/register" className="text-decoration-none">
              <Button variant="primary" size="sm" className="ms-2">
                Registrarse
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SimpleHeader;
