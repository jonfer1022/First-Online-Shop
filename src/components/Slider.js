import React, {Fragment} from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/Slider.scss';
import Scroll from 'react-scroll';
import { useDispatch } from 'react-redux';
import productsAction from '../redux/reducer/products.reducer';
// import { useHistory } from "react-router-dom";

const Slider = (props) => {

  var scroll = Scroll.animateScroll;
  // const history = useHistory();
  
  const dispatch = useDispatch();
  const openProductsWith = (gender = "", category = "") => {
    scroll.scrollTo(0); //Posiciona el scroll al comienzo de la página
    dispatch(productsAction.saveCategoryAndGender(category, gender));
    // history.push({pathname: "/products", state:{
    //   gender,
    //   category,
    //   }
    // });
  }

  return(
    <Fragment>
    <div id={props.id}>
      <div style={{textAlign: "center"}}>
        <h2>CATEGORIAS</h2>
        <h5>Encontrarás prendas de tendecia en la categoria que prefieras</h5>
      </div>
      <Carousel className="div-carousel">
        {props.categories.map((category) => (
          <Carousel.Item key={category.id}>
            <a onClick={() => openProductsWith("",category.id_categories)} style={{cursor: 'pointer'}}>
              <img
                className="img-slider"
                src={category.image_path}
                alt={`slide #${category.id}`}
              />
              <Carousel.Caption>
                <h3>{category.categories}</h3>
                <p>{category.description}</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </Fragment>
  )
}

export default Slider;