import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import COLORS from '../assets/Styles/color';
import './Navbar.css';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="sticky-top custom-navbar" style={{ backgroundColor: COLORS.secondary }} variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand" style={{ color: COLORS.primary, fontWeight: 'bold' }}>
          ATS Fitness
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link-custom" style={{ color: COLORS.white }}>Home</Nav.Link>
            <Nav.Link href="#programs" className="nav-link-custom" style={{ color: COLORS.white }}>Programs</Nav.Link>
            <Nav.Link href="#coaching" className="nav-link-custom" style={{ color: COLORS.white }}>Coaching</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link-custom" style={{ color: COLORS.white }}>Pricing</Nav.Link>
            <Nav.Link href="#tools" className="nav-link-custom" style={{ color: COLORS.white }}>Tools</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link-custom" style={{ color: COLORS.white }}>Gallery</Nav.Link>
            <Nav.Link href="#trainers" className="nav-link-custom" style={{ color: COLORS.white }}>Trainers</Nav.Link>
          </Nav>
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <Button variant="outline-light" className="navbar-btn">Login</Button>
            <Button style={{ backgroundColor: COLORS.primary, border: 'none' }} className="navbar-btn navbar-btn-primary">
              <span>Sign Up</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
