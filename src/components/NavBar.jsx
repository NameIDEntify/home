import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className="text-light" href="">NameIDEntify</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="">Project</Nav.Link>
                    <Nav.Link href="">Progress</Nav.Link>
                    <Nav.Link href="">Members</Nav.Link>
                    <Nav.Link href="">Contacts</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;