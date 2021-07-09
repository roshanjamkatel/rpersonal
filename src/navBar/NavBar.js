import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Roshan Jamkatel</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/links">Links</Nav.Link>
            </Nav>
          </Navbar>
    )
}

export default NavBar