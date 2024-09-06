import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">Roshan Jamkatel</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/links">Links</Nav.Link>
            <Nav.Link href="/coffee">Coffee</Nav.Link>
          </Nav>
        </Navbar>
      );
}
export default NavBar