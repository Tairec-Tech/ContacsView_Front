import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-3">
          ContactView
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard" className="fw-medium">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/profile" className="fw-medium">Mi Perfil</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className="me-3 text-muted">
              Hola, <span className="fw-medium text-dark">{user?.name || user?.username}</span>
            </Navbar.Text>
            <Button variant="outline-secondary" onClick={handleLogout} size="sm">
              Cerrar Sesión
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
