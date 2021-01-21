import React, {Fragment} from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/Slider.scss';

const Slider = (props) => {
  return(
    <Fragment>
      <div style={{textAlign: "center"}}>
        <h2>CATEGORIAS</h2>
        <h5>Encontrarás prendas de tendecia en la categoria que prefieras</h5>
      </div>
      <Carousel className="div-carousel">
        {props.categories.map((category) => (
          <Carousel.Item key={category.id}>
            <img
              className="img-slider"
              src={category.src}
              alt={`slide #${category.id}`}
            />
            <Carousel.Caption>
              <h3>{category.producto}</h3>
              <p>{category.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Fragment>
  )
}

export default Slider;