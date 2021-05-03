import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import Carousel from "react-elastic-carousel";
import { Card, Image } from 'react-bootstrap';
import './styles/SliderMult.scss';
import Scroll from 'react-scroll';
import productsAction from '../redux/reducer/products.reducer';
// import { useHistory } from "react-router-dom";

const SliderMult = (props) => {

  var scroll = Scroll.animateScroll;
  // const history = useHistory();

  const dispatch = useDispatch();
  let img = "https://raw.githubusercontent.com/jonfer1022/First-Online-Shop/main/src/img/img-portafolio/Ropa2.jpg";
  
  const openSpecificProduct = (product_id, i) => {
    scroll.scrollTo(0); //Posiciona el scroll al comienzo de la página
    dispatch(productsAction.saveProductId(product_id));
    // history.push({pathname: "/clothing-detail", data:{ product_id }
  }

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
                <a onClick={() => openSpecificProduct(discounts[i-1].id_clothes)} style={{cursor: 'pointer'}} >
                  <Image src={img||discounts[i].image_path}
                  className="img-responsive-des" rounded/>
                </a>
              </Card.Header>
              <Card.Footer>
                <div className="card-div-percentage">{discounts[i].percentage ? `${discounts[i].percentage}%`:null}</div>
                {discounts[i].product_name}
              </Card.Footer>  
            </Card>
            : null
          }
          { discounts[i+1] ?
            <Card key={discounts[i+1].id}>
              <Card.Header className="card-header-des">
                <a onClick={() => openSpecificProduct(discounts[i].id_clothes)} style={{cursor: 'pointer'}} >
                  <Image src={img||discounts[i+1].image_path}
                  className="img-responsive-des" rounded/>
                </a>
              </Card.Header>
              <Card.Footer>
                <div className="card-div-percentage">{discounts[i+1].percentage ? `${discounts[i+1].percentage}%`:null}</div>
                {discounts[i+1].product_name}
              </Card.Footer>  
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