import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import './styles/NavBar.scss'

const NavBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand href="/home">Primera tienda Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/categorias">Categorias</Nav.Link>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown className="text-center" drop={'right'} title="Para Hombres">
                        <NavDropdown.Item href="#action/3.4">Chaquetas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.5">Buzos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.6">Zapatos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className="text-center" drop={'right'} title="Para Mujeres">
                        <NavDropdown.Item href="#action/3.7">Camisas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.8">Vestido</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.9">Zapatos</NavDropdown.Item>
                    </NavDropdown>
                </NavDropdown>
                <Nav.Link href="#pricing">Descuentos</Nav.Link>
                </Nav>
            <Nav>
                <Nav.Link href="#deets">Contactanos</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Mi APP
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;