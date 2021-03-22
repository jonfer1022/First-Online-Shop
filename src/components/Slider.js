import React, {Fragment} from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import './styles/Slider.scss';
import { useHistory } from "react-router-dom";

const Slider = (props) => {

  const history = useHistory();
  
  const openProductsWith = (gender = "", category = "") => {
    history.push({pathname: "/products", state:{
      gender,
      category,
      }
    });
  }

  return(
    <Fragment>
    {/* <div id={props.id}> */}
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
    {/* </div> */}
    </Fragment>
  )
}

export default Slider;