import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Scroll from 'react-scroll';
import './styles/NavBar.scss';
import { useDispatch } from 'react-redux';
import { push } from "connected-react-router";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {

  var scroll = Scroll.animateScroll;
  const history = useHistory();
  const dispatch = useDispatch();

  function scrollHome() {
    if (window.scrollY > 150 ) {
      document.getElementById("navbar-main").style.backgroundColor = "rgb(118, 118, 118)";
    }else{
      document.getElementById("navbar-main").style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
  }

  function scrollProducts() {
    document.getElementById("navbar-main").style.backgroundColor = "rgb(118, 118, 118)";
  }

  // Escucha el evento del movimiento del scroll para cambiar el Style de la navegación dependiento igualmente de la página
  if(props.side === "Home"){
    document.getElementById("navbar-main").style.backgroundColor = "rgba(255, 255, 255, 0)";
    window.addEventListener("scroll", scrollHome, false);
  } else if (props.side === "Products"){
    document.getElementById("navbar-main").style.backgroundColor = "rgb(118, 118, 118)";
    window.addEventListener("scroll", scrollProducts, false);
  }

  const handleSearchPosition = function(elemento, cantidad){
    let element = document.getElementById(elemento);
    scroll.scrollTo(element.offsetTop - cantidad);
  }

  const openProductsWith = (gender = false, category = false) => {
    history.push({pathname: "/products", state:{
        gender,
        category,
      }
    })
  }

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
                  <NavDropdown.Item >Buzos</NavDropdown.Item>
                  <NavDropdown.Item >Camisas</NavDropdown.Item>
                  <NavDropdown.Item >Chaquetas</NavDropdown.Item>
                  <NavDropdown.Item >Zapatos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="text-center" drop={'right'} title="Para Mujeres">
                  <NavDropdown.Item >Buzos</NavDropdown.Item>
                  <NavDropdown.Item >Camisas</NavDropdown.Item>
                  <NavDropdown.Item >Vestidos</NavDropdown.Item>
                  <NavDropdown.Item >Zapatos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => openProductsWith()}>Portafolio completo</NavDropdown.Item>
              </NavDropdown>
              </Nav>
            <Nav>
              <Nav.Link ><h6>Contactanos</h6></Nav.Link>
              <Nav.Link onClick = {() => dispatch(push("/home"))}>
                <h6>Mi App</h6>
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NavBar;