import React from 'react';
import './styles/Header.scss';
import Scroll from 'react-scroll';

const Header = (props) => {

  var scroll = Scroll.animateScroll;
  const handleSearchPosition = function(elemento, cantidad){
    let element = document.getElementById(elemento);
    scroll.scrollTo(element.offsetTop - cantidad);
  }
  
  //  <Link to="theLast" smooth={true} class="btn-custom btn-lg page-scroll">¡Descubre lo último!</Link> */
  
  return(
    <div id={props.id} class="intro">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="intro-text">
              <h1>Samplhes</h1>
              <p>Ropa a tu medida</p>
              <a href="#/" onClick={() => handleSearchPosition("theLast",380)} class="btn-custom btn-lg page-scroll">¡Descubre lo último!</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;