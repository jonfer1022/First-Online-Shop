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
    <div id={props.id} className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="intro-text">
              <h1>Samplhes</h1>
              <p>Ropa a tu medida</p>
              <a href="#/" onClick={() => handleSearchPosition("theLast",380)} className="btn-custom btn-lg page-scroll">¡Descubre lo último!</a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;