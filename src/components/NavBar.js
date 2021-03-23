import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Scroll from 'react-scroll';
import './styles/NavBar.scss';
import { useDispatch } from 'react-redux';
import { push } from "connected-react-router";
import { useHistory } from "react-router-dom";
import master_data from '../master_data';

const NavBar = (props) => {
  
  var scroll = Scroll.animateScroll;
  const history = useHistory();
  const dispatch = useDispatch();
  
  const female = master_data.clothes_gender.female;
  const male = master_data.clothes_gender.male;
  const jackets = master_data.clothes_categories.jackets;
  const sweater = master_data.clothes_categories.sweater;
  const shirts = master_data.clothes_categories.shirts;
  const dresses = master_data.clothes_categories.dresses;
  const shoes = master_data.clothes_categories.shoes;

  let navbarMain = document.getElementById("navbar-main");

  function scrollHome() {
    if (window.scrollY > 150 ) {
      if(navbarMain) navbarMain.style.backgroundColor = "rgb(118, 118, 118)";
    }else{
      if(navbarMain) navbarMain.style.backgroundColor = "rgba(255, 255, 255, 0)";
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

  const handleSearchPosition = (elemento, cantidad) =>{
    let element = document.getElementById(elemento);
    if(element) scroll.scrollTo(element.offsetTop - cantidad);
  }

  const openProductsWith = (gender = "", category = "") => {
    scroll.scrollTo(0); //Posiciona el scroll al comienzo de la página
    history.push({pathname: "/products", state:{
        gender,
        category,
      }
    })
  }

  return(
  <div id="nav-bar">
    <Navbar id="navbar-main" collapseOnSelect className="nav-bar-main" expand="lg">
      <Navbar.Brand style={{cursor: 'pointer'}} 
      onClick={() => {
        if(props.side === master_data.sides.home) handleSearchPosition("header",0) 
        else { scroll.scrollTo(0); dispatch(push("/home"))}
        }} >
        <h5>Samplhes</h5>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          { props.side === master_data.sides.home ?
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleSearchPosition("categories",80)}><h6>Categorias</h6></Nav.Link>
            <Nav.Link onClick={() => handleSearchPosition("discounts",400)}><h6>Descuentos</h6></Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown className="text-center" drop={'right'} title="Para Hombres">
                  <NavDropdown.Item onClick={() => openProductsWith(male,sweater)}>Buzos</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => openProductsWith(male,shirts)}>Camisas</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => openProductsWith(male,jackets)}>Chaquetas</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => openProductsWith(male,shoes)}>Zapatos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="text-center" drop={'right'} title="Para Mujeres">
                  <NavDropdown.Item onClick={() => openProductsWith(female,sweater)}>Buzos</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => openProductsWith(female,shirts)}>Camisas</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => openProductsWith(female,dresses)}>Vestidos</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => openProductsWith(female,shoes)}>Zapatos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => openProductsWith()}>Portafolio completo</NavDropdown.Item>
              </NavDropdown>
          </Nav>
          : <Nav className="mr-auto"></Nav> }
          <Nav>
            <Nav.Link href="#" ><h6>Contactanos</h6></Nav.Link>
            {/* <Nav.Link onClick = {() => dispatch(push("/home"))}>
              <h6>Mi App</h6>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
  )
}

export default NavBar;