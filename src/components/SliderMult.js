import React, {Fragment} from 'react';
import Carousel from "react-elastic-carousel";
import { Card, Image } from 'react-bootstrap';
import './styles/SliderMult.scss';
// import RopaImg from '../img/img-portafolio/01-small.jpg';

const SliderMult = (props) => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  const getItems = (discounts) => {

    let variable = [discounts.length]

    for (let i = 0; i < discounts.length; i++) {
      variable[i] =  (
        <div className="divCar">
          { discounts[i] ? 
            <Card key={discounts[i].id}>
              <Card.Header className="card-header-des">
                <a href={"/producto"} >
                  <Image src={discounts[i].image_path}
                  className="img-responsive-des" rounded/>
                </a>
              </Card.Header>
              <Card.Footer>{discounts[i].product_name}</Card.Footer>  
            </Card>
            : null
          }
          { discounts[i+1] ?
            <Card key={discounts[i+1].id}>
              <Card.Header className="card-header-des">
                <a href={"/producto"} >
                  <Image src={discounts[i+1].image_path}
                  className="img-responsive-des" rounded/>
                </a>
              </Card.Header>
              <Card.Footer>{discounts[i+1].product_name}</Card.Footer>  
            </Card>
            : null
          }
        </div>
      )
      i += 1;
    }
    return variable
  }

  return(
    <Fragment>
      <div id={props.id} className="App">
        <Carousel breakPoints={breakPoints}>
          { getItems(props.discounts) }
        </Carousel>
      </div>
    </Fragment>
  )
}

export default SliderMult;