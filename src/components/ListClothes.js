import React, {Fragment, useState} from 'react';
import { Card, Image } from 'react-bootstrap';
import RopaImg from '../img/img-portafolio/Ropa1.jpg';
import './styles/ListClothes.scss';
import Pagination from '@material-ui/lab/Pagination';

const ListClothes = (props) => {

  const [page,setPage] = useState(1)

  const handleChange = (event, value) =>{
    console.log(value)
    setPage(value)
  }

  const getClothes = (clothes) =>{
    let clothesItems = [];
    for (let i = 0; i < 12; i++) {
      clothesItems[i] = (
        <Card border="light">
          <Card.Header>
            <Image src={RopaImg} className="clothes-img" rounded/>
          </Card.Header>
          <Card.Footer>
            <div className="card-description">Descripción respectiva de la ropa presentada</div>
            <div className="card-price">Precio {i}</div>
          </Card.Footer>
        </Card>
      );
    }
    return clothesItems;
  }

  return(
    <Fragment>
      <div className="list-clothes">
        <div className="list-clothes-pagination">
          <Pagination count={4} page={page} onChange={handleChange} variant="outlined" shape="rounded"/>
        </div>
        { getClothes() }
        <div className="list-clothes-pagination">
          <Pagination count={4} page={page} onChange={handleChange} variant="outlined" shape="rounded"/>
        </div>
      </div>
    </Fragment>
  )
}

export default ListClothes;