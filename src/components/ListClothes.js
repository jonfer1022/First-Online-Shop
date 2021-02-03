import React, {Fragment, useState} from 'react';
import { Card, Image } from 'react-bootstrap';
import Pagination from '@material-ui/lab/Pagination';
import Scroll from 'react-scroll';
import RopaImg from '../img/img-portafolio/Ropa1.jpg';
import './styles/ListClothes.scss';

const ListClothes = (props) => {

  const [page,setPage] = useState(1);
  let scroll = Scroll.animateScroll;

  const handleChange = (event, value) =>{
    handleSearchPosition("list-clothes-main",0)
    setPage(value)
  }

  const handleSearchPosition = function(elemento, cantidad){
    let element = document.getElementById(elemento);
    scroll.scrollTo(element.offsetTop - cantidad);
  }

  let index = (page-1)*props.amountItems||0;  //Número inicio de la iteración del for dependiendo del valor "page"
  let max = (page)*props.amountItems;         //Iteración tope en el for dependiendo del valor "page"
  let cantidad = (Math.trunc((props.clothes.length)/(props.amountItems)))+1 //Número máximo de paginación
  
  const getClothes = () =>{
    let clothesItems = [];
    for (let i = index; i < max; i++) {
      clothesItems[i] = (
        props.clothes[i] ?
        <Card
          key={props.clothes[i].id}
          border="light"
        >
          <Card.Header>
            <Image src={RopaImg} className="clothes-img" rounded/>
          </Card.Header>
          <Card.Footer>
            <div className="card-description">Descripción respectiva de la ropa presentada</div>
            <div className="card-price">Precio {props.clothes[i].id}</div>
          </Card.Footer>
        </Card>
        : null
      );
    }
    return clothesItems;
  }

  return(
    <Fragment>
      <div id="list-clothes-main" className="list-clothes">
        <div className="list-clothes-pagination">
          <Pagination count={cantidad} page={page} onChange={handleChange} variant="outlined" shape="rounded"/>
        </div>
        { getClothes() }
        <div className="list-clothes-pagination">
          <Pagination count={cantidad} page={page} onChange={handleChange} variant="outlined" shape="rounded"/>
        </div>
      </div>
    </Fragment>
  )
}

export default ListClothes;