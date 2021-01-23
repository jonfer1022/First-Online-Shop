import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Scroll from 'react-scroll';
import './styles/NavBar.scss'
// import {Link} from "react-scroll";

const NavBar = () => {

  var scroll = Scroll.animateScroll;

  window.addEventListener("scroll", function(event) {
    if (this.scrollY > 150) {
      document.getElementById("navbar-main").classList.remove('nav-bar-main');
      document.getElementById("navbar-main").classList.add('nav-bar-main-scrollY');
    }else{
      document.getElementById("navbar-main").classList.remove('nav-bar-main-scrollY');
      document.getElementById("navbar-main").classList.add('nav-bar-main');
    }
  },false);

  const handleSearchPosition = function(elemento, cantidad){
    let element = document.getElementById(elemento);
    scroll.scrollTo(element.offsetTop - cantidad);
  }

  // <Link to="categories" smooth={true}><h6>Categorias</h6></Link>

  return(
  <div id="nav-bar">
    <Navbar id="navbar-main" collapseOnSelect className="nav-bar-main" expand="lg">
      <Navbar.Brand href="#" onClick={() => handleSearchPosition("header",0)}><h5>Samplhes</h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link onClick={() => handleSearchPosition("categories",80)}><h6>Categorias</h6></Nav.Link>
                <Nav.Link onClick={() => handleSearchPosition("discounts",400)}><h6>Descuentos</h6></Nav.Link>
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
                </Nav>
            <Nav>
                <Nav.Link href="#"><h6>Contactanos</h6></Nav.Link>
                <Nav.Link eventKey={2} href="#">
                  <h6>Mi App</h6>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NavBar;